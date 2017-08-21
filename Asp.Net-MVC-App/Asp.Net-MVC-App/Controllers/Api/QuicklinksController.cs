using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Asp.Net_MVC_App.Models.Db;
using Asp.Net_MVC_App.Models.Response;
using System.Linq.Expressions;

namespace Asp.Net_MVC_App.Api.Controllers
{
    public class QuicklinksController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/quicklinks
        [ResponseType(typeof(List<Quicklinks>))]
        public IHttpActionResult Get()
        {
            List<FilterType> filters = db.Filters.ToList();
            List<Quicklinks> listOfQuicklinks = new List<Quicklinks>();
            foreach(FilterType filter in filters)
            {
                Quicklinks quicklinks = new Quicklinks();
                quicklinks.DisplayName = filter.DisplayName;
                quicklinks.InternalName = filter.InternalName;
                try
                {
                    quicklinks.Links = db.Individuals.Select(Individual.GetColumnSelector(filter.InternalName)).Distinct().Take(10).ToList();
                    listOfQuicklinks.Add(quicklinks);
                }
                catch(NotSupportedException ex)
                {
                    BadRequest(ex.Message);
                }
                catch (Exception ex)
                {
                    BadRequest();
                }
            }
            return Ok(listOfQuicklinks);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
