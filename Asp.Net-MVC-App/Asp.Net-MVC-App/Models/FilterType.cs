using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Asp.Net_MVC_App.Models.Db
{
    public class FilterType
    {
        public int Id { get; set; }
        public virtual string InternalName { get; set; }
        public virtual string DisplayName { get; set; }
    }
}