using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Unnati_UI_Application.Models;
using Unnati_UI_Application.App_Start;
using System.Linq.Expressions;
using System.Data;
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
    public class ConstituentController : Controller
    {
        // GET: Constituent
        private API_Action _ApiAction;
        private Dictionary<string, object> _errobj;
        public ActionResult Constituent()
        {
            return View();
        }

        public dynamic PostSaveIndividual(string jsondata)
        {
            string response = string.Empty;
            try
            {
                if (jsondata.Length > 0)
                {
                    _ApiAction = new API_Action();
                    response = _ApiAction.Post_Method_API("", jsondata, "");
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


        public dynamic PostSaveOrganization(string jsondata)
        {
            string response = string.Empty;
            try
            {
                if (jsondata.Length > 0)
                {
                    _ApiAction = new API_Action();
                    response = _ApiAction.Post_Method_API("", jsondata, "");
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
    }
}