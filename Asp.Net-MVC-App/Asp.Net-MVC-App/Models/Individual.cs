using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Web;

namespace Asp.Net_MVC_App.Models.Db
{
    public class Individual
    {
        public int Id { get; set; }
        public virtual string FullName { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual string Email { get; set; }
        public virtual string Gender { get; set; }
        public virtual string Language { get; set; }
        public virtual string AddressLine1 { get; set; }
        public virtual string City { get; set; }
        public virtual string State { get; set; }
        public virtual string Zipcode { get; set; }
        public virtual double Lat { get; set; }
        public virtual double Long { get; set; }

        public static Func<Individual, string> GetColumnSelector(string colName)
        {
            var param = Expression.Parameter(typeof(Individual));
            try
            {
                var body = Expression.PropertyOrField(param, colName);
                return Expression.Lambda<Func<Individual, string>>(body, param).Compile();
            }
            catch(ArgumentException ex)
            {
                throw new NotSupportedException("Error: Type " + colName + " is not a supported filter.");
            }
        }

        public static Func<Individual, bool> GetColumnPredicateEquals(string colName, string value)
        {
            var param = Expression.Parameter(typeof(Individual));
            try
            {
                var property = Expression.PropertyOrField(param, colName);
                var compareValue = Expression.Constant(value, typeof(string));
                var body = Expression.Equal(property, compareValue);
                return Expression.Lambda<Func<Individual, bool>>(body, param).Compile();
            }
            catch(ArgumentException ex)
            {
                throw new NotSupportedException("Error: Type " + colName + " is not a supported filter.");
            }
        }
    }
}