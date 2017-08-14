namespace Asp.Net_MVC_App.Migrations
{
    using Models;
    using Models.Db;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Diagnostics;
    using System.Linq;
    using System.Reflection;
    using System.Xml;
    using System.Xml.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Asp.Net_MVC_App.Models.Db.DBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Asp.Net_MVC_App.Models.Db.DBContext context)
        {
            // Add filters for quicklinks
            context.Filters.AddOrUpdate(filter => filter.InternalName,
                new FilterType() { InternalName = "City", DisplayName = "City" },
                new FilterType() { InternalName = "State", DisplayName = "State" },
                new FilterType() { InternalName = "Language", DisplayName = "Language" });


            // Read XML file 
            var assembly = Assembly.GetExecutingAssembly();
            var stream = assembly.GetManifestResourceStream("Asp.Net_MVC_App.App_Data.dataset.xml");

            IEnumerable<XElement> results = XDocument.Load(stream).Descendants("record");
            foreach(var result in results)
            {
                Individual individual = new Individual();
                individual.Id = Convert.ToInt32(result.Element("Id").Value);
                individual.FullName = result.Element("FullName").Value;
                individual.FirstName = result.Element("FirstName").Value;
                individual.LastName = result.Element("LastName").Value;
                individual.Email = result.Element("Email").Value;
                individual.Gender = result.Element("Gender").Value;
                individual.Language = result.Element("Language").Value;
                individual.AddressLine1 = result.Element("AddressLine1").Value;
                individual.City = result.Element("City").Value;
                individual.State = result.Element("State").Value;
                individual.Zipcode = result.Element("Zipcode").Value;
                individual.Lat = Convert.ToDouble(result.Element("Lat").Value);
                individual.Long = Convert.ToDouble(result.Element("Long").Value);
                context.Individuals.AddOrUpdate(e => e.Id, individual);
            }

            context.SaveChanges();
        }
    }
}
