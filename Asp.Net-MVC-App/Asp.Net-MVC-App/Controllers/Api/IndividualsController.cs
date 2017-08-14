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
using System.Xml.Linq;
using System.Reflection;
using Asp.Net_MVC_App.Models.Request;
using Asp.Net_MVC_App.Models.Response;

namespace Asp.Net_MVC_App.Api.Controllers
{
    public class IndividualsController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/individuals
        [ResponseType(typeof(List<Individual>))]
        public IHttpActionResult Get([FromUri] Filter filter)
        {
            try
            {
                return Ok(db.Individuals.Where(Individual.GetColumnPredicateEquals(filter.type, filter.value)));
            }
            catch(NotSupportedException ex)
            {
                return BadRequest(ex.Message);
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        // GET: api/individuals/5
        [ResponseType(typeof(Individual))]
        public IHttpActionResult Get(int id)
        {
            Individual individual = db.Individuals.Find(id);
            if (individual == null)
            {
                return NotFound();
            }

            return Ok(individual);
        }



        // GET: api/individuals/suggestions
        [HttpGet]
        [ResponseType(typeof(List<Suggestion>))]
        public IHttpActionResult Suggestions(string text)
        {
            try
            {
                return Ok(db.Individuals
                    .Where(e => e.FullName.ToLower().Contains(text.ToLower()))
                    .Select(e => new Suggestion { Type = "FullName", Value = e.FullName }));
            }
            catch (NotSupportedException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
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