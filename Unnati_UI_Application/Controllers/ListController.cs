using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Unnati_UI_Application.App_Start;
using Unnati_UI_Application.Models;
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
    public class ListController : Controller
    {
        private API_Action _ApiAction;
        private Dictionary<string, object> _errobj;
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ActionIndex()
        {
            return View();
        }

        public ActionResult ConstituentView()
        {
            return View();
        }

        public ActionResult GiftView()
        {
            return View();
        }

        public ActionResult OpportunitiesView()
        {
            return View();
        }

        public ActionResult MOUView()
        {
            return View();
        }

        #region[ACTION DETAILS]

        //Action List-Column Save      
        public dynamic PostAddActionColumns(string jsondata)
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

        //Action Save-List Save      
        public dynamic PostAddActionSave_list(string jsondata)
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




        #endregion

        #region[CONSTITUENT DETAILS]

        //Action List-Action Details Save      
        public dynamic PostAddConstituentActionDetails(string jsondata)
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

        //Action List-Attachment Save      
        public dynamic PostAddConstituentAttachment(string jsondata)
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


        //Action List-CopyTO Save      
        public dynamic PostAddConstituentCopyTO(string jsondata)
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


        //Action List-Note Save  
        public dynamic PostAddConstituent_Note(string jsondata)
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

        //Action List-Opportunities Save  
        public dynamic PostAddConstituent_Opportunities(string jsondata)
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

        //Action List-Fundraisers Save  
        public dynamic PostAddConstituent_Fundraisers(string jsondata)
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




        #endregion


    }
}