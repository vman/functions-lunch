using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json.Linq;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;

namespace LunchRecommendations
{
    public static class Place
    {
        [FunctionName("Place")]
        public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Place")]HttpRequestMessage req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function processed a request.");

            string[] names = new string[] { "OIE Truly Thai", "Farmer J's", "Market Green", "Petticoat lane market", "Tiffinbox", "K10", "Tortilla", "Poncho", "Hummus Bro's", "Japanese Canteen", "Earls", "Assenheim's 56", "Bibimbap", "Banh mi" };
            string place = names[new Random().Next(names.Length)];
            var placeInfo = new PlaceInfo();
            placeInfo.Name = place;
            return req.CreateResponse(HttpStatusCode.OK, placeInfo, JsonMediaTypeFormatter.DefaultMediaType);
        }
    }
}
