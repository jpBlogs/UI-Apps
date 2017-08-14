using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Asp.Net_MVC_App.Controllers
{
    public class SearchController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Results()
        {
            return View();
        }

        public ActionResult Details(int id, string tabId = "details")
        {
            ViewBag.Id = id;
            ViewBag.TabId = tabId;
            return View();
        }
    }
}