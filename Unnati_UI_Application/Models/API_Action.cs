using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RestSharp;
using System.IO;
using System.Net;
using System.Text;
using System.Web.Script.Serialization;
using System.Web.UI.WebControls;
using System.Collections;
using Unnati_UI_Application.App_Start;


namespace Unnati_UI_Application.Models
{
    public class API_Action
    {
        private Dictionary<string, object> dictionaryObj, dictionaryObj_otp;
        private static JavaScriptSerializer _jsObj = new JavaScriptSerializer();
        public string Post_Method_API(string url, string token, string jsondata)
        {
            var client1 = new RestSharp.RestClient(url);
            var request1 = new RestRequest(Method.POST);
            ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
            request1.RequestFormat = DataFormat.Json;
            request1.AddHeader("Content-Type", "application/json");
            request1.AddParameter("authorization", "Bearer " + token, ParameterType.HttpHeader);
            request1.AddHeader("content-type", "application/json");
            request1.AddParameter("application/json", jsondata, ParameterType.RequestBody);
            IRestResponse response = client1.Execute(request1);
            string responsedata = response.Content.ToString();
            return responsedata;
        }

        public string Get_Method_API(string url, string token)
        {
            var client1 = new RestSharp.RestClient(url);
            var request1 = new RestRequest(Method.GET);
            ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
            request1.RequestFormat = DataFormat.Json;
            request1.AddHeader("Content-Type", "application/json");
            request1.AddParameter("authorization", "Bearer " + token, ParameterType.HttpHeader);
            request1.AddHeader("content-type", "application/json");
            IRestResponse response = client1.Execute(request1);
            string responsedata = response.Content.ToString();
            return responsedata;
        }

        public string DataDeserialize(string ContainsKey, string response)
        {
            dictionaryObj = new Dictionary<string, object>();
            dictionaryObj = (Dictionary<string, object>)_jsObj.Deserialize(response, dictionaryObj.GetType());
            string responsedata = dictionaryObj[ContainsKey].ToString();
            return responsedata;
        }

        public string UserLoginRequest(string username, string password)
        {
            var client = new RestSharp.RestClient("http://localhost:49680/api/user-login");
            var request = new RestRequest(Method.POST);
            ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            request.AddParameter("username", username);
            request.AddParameter("password", password);
            request.AddParameter("grant_type", "password");
            IRestResponse Response = client.Execute(request);
            Dictionary<string, object> JSONObj = Data.Deserialize(Response.Content.ToString(), typeof(Dictionary<string, object>));
            if (JSONObj.ContainsKey("access_token"))
            {
                if (JSONObj["status"].ToString().ToLower().Trim() == "true")
                {
                    string access_token = JSONObj["access_token"].ToString();
                }
            }
            string responsedata = Response.Content.ToString();
            return responsedata;
        }
    }
}