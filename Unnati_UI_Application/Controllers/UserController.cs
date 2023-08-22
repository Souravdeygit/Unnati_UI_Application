using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Unnati_UI_Application.Models;
using System.Data;
using Unnati_UI_Application.App_Start;
using System.Web.Security;
using RestSharp;
using System.Net;
using RestSharp.Deserializers;
using System.Collections;
using EmailManager;
using System.IO;
using System.Security.AccessControl;
using System.Text;
using System.Security;
using System.Security.Cryptography;

namespace Unnati_UI_Application.Controllers
{
    public class UserController : Controller
    {
        private List<SelectListItem> item;
        private Dictionary<string, object> errordata, _dictionaryData;
        private Dictionary<string, object> dictionaryObj, dictionaryObj_otp;
        private string _jsonString;
        private UserManagementModel ummObj;
        private API_Action _ApiAction;
        private Dictionary<string, object> _errobj;
        private Dictionary<string, object> resobj;
        public string EncryptSHA256(string rawData)
        {
            // Create a SHA256   
            using (SHA256 sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }


        [HttpGet]
        public ActionResult UserLogin()

        {
            if (Session != null)
            {
                if (Session.Count > 0)
                {
                    string Url = Request.Url.Scheme + "://" + Request.Url.Authority + "/dashboard";
                    return Redirect(Url);
                }
            }

            return View();
        }
        [HttpPost]
        public dynamic UserLogindatak(LoginValidation logValid)
        {

            if (Request.IsAjaxRequest())
            {
                if (ModelState.IsValid)
                {
                    //****
                    string ip = Data.GetIp();
                    string mac = Data.GetMac();
                    //****

                    string username = logValid.UserName.ToString();
                    string password = logValid.Password.ToString();
                    string encrypted_password = EncryptSHA256(password);
                    var client = new RestSharp.RestClient(Constant.LOGIN);
                    var request = new RestRequest(Method.POST);
                    ServicePointManager.SecurityProtocol = (SecurityProtocolType)3072;
                    request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
                    request.AddParameter("username", username);
                    request.AddParameter("password", password);
                    request.AddParameter("grant_type", "password");
                    IRestResponse Response = client.Execute(request);
                    //if (Response.StatusCode == HttpStatusCode.OK)
                    //{
                    Dictionary<string, object> JSONObj = Data.Deserialize(Response.Content.ToString(), typeof(Dictionary<string, object>));
                    if (JSONObj.ContainsKey("access_token"))
                    {
                        if (JSONObj["status"].ToString().ToLower().Trim() == "true")
                        {
                            string access_token = JSONObj["access_token"].ToString(); //strore Access Token
                            string USER_ID = JSONObj["USER_ID"].ToString();

                            Session["TOKEN"] = access_token;
                            Session.Add("USER_ID", USER_ID);

                            _dictionaryData = new Dictionary<string, object>();
                            _dictionaryData.Add("status", true);


                            _jsonString = Data.ObjectToJsonString(_dictionaryData);

                            return _jsonString;
                        }
                        else
                        {
                            errordata = new Dictionary<string, object>();
                            errordata.Add("status", false);
                            errordata.Add("response", "Something went wrong....!");

                            _jsonString = Data.ObjectToJsonString(errordata);
                            return _jsonString;
                        }

                    }
                    else
                    {
                        errordata = new Dictionary<string, object>();
                        errordata.Add("status", false);
                        errordata.Add("response", JSONObj["error_description"].ToString());

                        _jsonString = Data.ObjectToJsonString(errordata);
                        return _jsonString;
                    }


                }
                else
                {
                    errordata = new Dictionary<string, object>();
                    errordata.Add("status", false);
                    errordata.Add("response", Data.ModelError(ModelState));

                    _jsonString = Data.ObjectToJsonString(errordata);

                }
            }
            return _jsonString;
        }

        public dynamic UserLogindata(string username,string password)
        {
            string response = string.Empty;
            string token = string.Empty;
            string userId = string.Empty;
            string status = string.Empty;
            try
            {
                if (username.Length > 0)
                {
                    _ApiAction = new API_Action();
                    response = _ApiAction.UserLoginRequest(username, password);
                    token = _ApiAction.DataDeserialize("access_token", response);
                    status = _ApiAction.DataDeserialize("status", response);
                    Session["Token"] = token;
                    if (status=="true")
                    {
                        //string Url = Request.Url.Scheme + "://" + Request.Url.Authority + "/dashboard";
                       // return Redirect(Url);

                        resobj = new Dictionary<string, object> ();
                        resobj.Add("status", true);
                        resobj.Add("response", "User login successfully");
                        response = Data.ObjectToJsonString(resobj);
                    }
                }
                else
                {
                    _errobj = new Dictionary<string, object>();
                    _errobj.Add("status", false);
                    _errobj.Add("response", "Please Check the json");
                    response = Data.ObjectToJsonString(_errobj);
                }

            }

            catch (Exception ex)
            {
                _errobj = new Dictionary<string, object>();
                _errobj.Add("status", false);
                _errobj.Add("response", ex.Message);
                response = Data.ObjectToJsonString(_errobj);

            }

            return response;

        }
        [HttpGet]
        public ActionResult Dashboard()
        {
            return View();
        }
    }
}