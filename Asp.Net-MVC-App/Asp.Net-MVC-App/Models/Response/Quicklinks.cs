using Asp.Net_MVC_App.Models.Db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Asp.Net_MVC_App.Models.Response
{
    public class Quicklinks
    {
        public string InternalName { get; set; }
        public string DisplayName { get; set; }
        public List<string> Links { get; set; }
    }
}