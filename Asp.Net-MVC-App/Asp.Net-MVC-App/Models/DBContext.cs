using Asp.Net_MVC_App.Models.Db;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Xml.Linq;

namespace Asp.Net_MVC_App.Models.Db
{
    public class DBContext: DbContext
    {
        public DbSet<Individual> Individuals { get; set; }
        public DbSet<FilterType> Filters { get; set; }

        public void Seed(DBContext context)
        {
#if DEBUG
            // Add filters for quicklinks
            context.Filters.Add(new FilterType() { InternalName = "City", DisplayName = "City" });
            context.Filters.Add(new FilterType() { InternalName = "State", DisplayName = "State" });
            context.Filters.Add(new FilterType() { InternalName = "Language", DisplayName = "Language" });


            // Read XML file 
            var assembly = Assembly.GetExecutingAssembly();
            var stream = assembly.GetManifestResourceStream("Asp.Net_MVC_App.App_Data.dataset.xml");

            IEnumerable<XElement> results = XDocument.Load(stream).Descendants("record");
            foreach (var result in results)
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
                context.Individuals.Add(individual);
            }
#endif
            
            context.SaveChanges();
        }

        public class DropCreateIfChangeInitializer : DropCreateDatabaseIfModelChanges<DBContext>
        {
            protected override void Seed(DBContext context)
            {
                context.Seed(context);

                base.Seed(context);
            }
        }

        public class CreateInitializer : CreateDatabaseIfNotExists<DBContext>
        {
            protected override void Seed(DBContext context)
            {
                context.Seed(context);

                base.Seed(context);
            }
        }

        static DBContext()
        {
#if DEBUG
            Database.SetInitializer<DBContext>(new DropCreateIfChangeInitializer());
#else
            Database.SetInitializer<DBContext> (new CreateInitializer ());
#endif
        }
    }
}