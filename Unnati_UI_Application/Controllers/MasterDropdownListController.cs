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
using System.Data.SqlClient;
using DatabaseManagementClient;
using System.Net.Http;


namespace Unnati_UI_Application.Controllers
{
    public class MasterDropdownListController : Controller
    {
        private API_Action _ApiAction;
        private Dictionary<string, object> _errobj;

        private SqlParameter[] _paramObj;
        private static DatabaseManagement _dbObj = new DatabaseManagement("CONNECT_DB");
        private string jsonstring;
        private dynamic response1;
        private Dictionary<string, object> errordata;
        private Dictionary<string, object> dictionaryData;

        //Action List     
        public dynamic Get_Adress_type()
        {
            string response = string.Empty;
            try
            {
                string token = Session["Token"].ToString();
                _ApiAction = new API_Action();
                response = _ApiAction.Get_Method_API("http://localhost:49680/api/get-all-master-ddl?OperationId=11", token);

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

        //phone List    
        public dynamic Get_Phone_type()
        {
            string response = string.Empty;
            try
            {
                string token = Session["Token"].ToString();
                _ApiAction = new API_Action();
                response = _ApiAction.Get_Method_API("http://localhost:49680/api/get-all-master-ddl?OperationId=8", token);

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


        //email type List    
        public dynamic Get_Email_type()
        {
            string response = string.Empty;
            try
            {
                string token = Session["Token"].ToString();
                _ApiAction = new API_Action();
                response = _ApiAction.Get_Method_API("http://localhost:49680/api/get-all-master-ddl?OperationId=10", token);

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


        //Account type List    
        public dynamic Get_Account_type()
        {
            string response = string.Empty;
            try
            {
                string token = Session["Token"].ToString();
                _ApiAction = new API_Action();
                response = _ApiAction.Get_Method_API("http://localhost:49680/api/get-all-master-ddl?OperationId=9", token);

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

        public dynamic Get_All_User_Dropdown_bind(string jsondata)
        {
            string response = string.Empty;
            try
            {
                string token = Session["Token"].ToString();
                _ApiAction = new API_Action();
                response = _ApiAction.Get_Method_API("http://localhost:49680/api/get-all-master-ddl?OperationId="+ jsondata, token);
                //response = Get_All_master_DDLAsync(jsondata);

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



        // API Purpose

        public dynamic Get_All_master_DDLAsync(string OperationId = null)
        {
            string myContent = string.Empty;
            try
            {
                DataTable _dt = new DataTable();
                // _mmmObj = new MasterManagementModel();
                _dt = Get_All_master_DDL_Datatable(OperationId);
                if (_dt.Rows.Count > 0)
                {
                    jsonstring = Convert.ToString(_dt.Rows[0]["JSON_VALUE"]);
                    //response1 = HttpStatusCodeResult(HttpStatusCode.OK);
                    //response1.StatusCode = (int)HttpStatusCode.OK;
                }
                else
                {
                    jsonstring = Data.DatatableEmpty();
                    //response1 = this.Request.CreateResponse(HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                jsonstring = Data.ExceptionToJsonString(ex.Message);
                //response1 = this.Request.CreateResponse(HttpStatusCode.ExpectationFailed);

            }

            StringContent sc = new StringContent(jsonstring, Encoding.UTF8, "application/json");

            //string myContent = await sc.ReadAsStringAsync();
            //or
            myContent = sc.ReadAsStringAsync().Result;


            //response1.content = new StringContent();
            return myContent;

        }

        public DataTable Get_All_master_DDL_Datatable(String OperationId)
        {
            DataTable _dtObj = new DataTable();
            _paramObj = new SqlParameter[]
            {
                new SqlParameter("@OPERATION",OperationId) {SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input },

            };
            _dtObj = _dbObj.Select("SP_Master_Data_DDL", _paramObj);
            return _dtObj;
        }


    }
}