using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Asp.Net_MVC_App.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/content/ui-angular-bootstrap/js")
                .Include("~/scripts/jquery-*")
                .Include("~/scripts/bootstrap*")
                .Include("~/scripts/angular.js")
                .Include("~/scripts/angular-ui/ui-bootstrap-tpls.js"));
            bundles.Add(new ScriptBundle("~/content/layout/js")
                .Include("~/scripts/layout.js"));
            bundles.Add(new ScriptBundle("~/content/dataservice/js")
                .Include("~/scripts/dataservice.js"));
            bundles.Add(new ScriptBundle("~/content/filtersservice/js")
                .Include("~/scripts/filtersservice.js"));
            bundles.Add(new ScriptBundle("~/content/index/js")
                .Include("~/scripts/index.js")
                .Include("~/scripts/autocomplete.js"));
            bundles.Add(new ScriptBundle("~/content/results/js")
                .Include("~/scripts/results.js")
                .Include("~/scripts/autocomplete.js"));
            bundles.Add(new ScriptBundle("~/content/details/js")
                .Include("~/scripts/details.js"));

            bundles.Add(new StyleBundle("~/content/ui-angular-bootstrap/css")
                .Include("~/content/bootstrap*")
                .Include("~/content/ui-*"));
            bundles.Add(new ScriptBundle("~/content/layout/css")
                .Include("~/content/layout.css"));
            bundles.Add(new ScriptBundle("~/content/index/css")
                .Include("~/content/index.css"));
            bundles.Add(new ScriptBundle("~/content/results/css")
                .Include("~/content/results.css"));
            bundles.Add(new ScriptBundle("~/content/details/css")
                .Include("~/content/details.css"));
        }
    }
}