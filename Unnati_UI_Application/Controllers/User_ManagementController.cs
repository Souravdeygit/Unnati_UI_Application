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
using System.Net.Http;
using System.Data.SqlClient;
using DatabaseManagementClient;

namespace Unnati_UI_Application.Controllers
{
    public class User_ManagementController : Controller
    {
        private API_Action _ApiAction;
        private Dictionary<string, object> _errobj;
        private SqlParameter[] _paramObj;
        private static DatabaseManagement _dbObj = new DatabaseManagement("CONNECT_DB");
        private string jsonstring;


        public ActionResult add_user()
        {
            return View();
        }

        public ActionResult add_role() 
        {
            return View();
        }

        public ActionResult view_user()
        {
            return View();
        }

        public dynamic save_all_data(string jsondata)
        {
            string response = string.Empty;
            try
            {
                if (jsondata.Length > 0)
                {
                    //_ApiAction = new API_Action();
                    //response = _ApiAction.Post_Method_API("", jsondata, "");

                    response = Get_All_Userdata_DDLAsync(jsondata);
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

        public dynamic save_add_role(string jsondata)
        {
            string response = string.Empty;
            try
            {
                if (jsondata.Length > 0)
                {
                    //_ApiAction = new API_Action();
                    //response = _ApiAction.Post_Method_API("", jsondata, "");

                    response = Get_All_UserRole_DDLAsync(jsondata);
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
            //response = "Test";
            return response;

        }

        public dynamic view_UserDetails(string jsondata)
        {
            string response = string.Empty;
            try
            {
                if (jsondata.Length > 0)
                {
                    //_ApiAction = new API_Action();
                    //response = _ApiAction.Post_Method_API("", jsondata, "");

                    response = Get_All_ViewUser_DDLAsync(jsondata);
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
            //response = "Test";
            return response;

        }

        public dynamic BindAccessTypeData(string jsondata)
        {
            string response = string.Empty;
            try
            {
                response = Get_AccessTypeData(jsondata); 
                //if (jsondata.Length > 0)
                //{
                //    //_ApiAction = new API_Action();
                //    //response = _ApiAction.Post_Method_API("", jsondata, "");

                    
                //}
                //else
                //{
                //    _errobj = new Dictionary<string, object>();
                //    _errobj.Add("status", false);
                //    _errobj.Add("response", "Please Check the json");
                //    response = Data.ObjectToJsonString(_errobj);
                //}

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


        public dynamic GetUserInfoMappingDataForUpdate(string jsondata)
        {
            string response = string.Empty;
            try
            {
                response = Get_UserInfoMappingDataForUpdate(jsondata);
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

        public dynamic Get_All_Userdata_DDLAsync(string jsondata = null)
        {
            string myContent = string.Empty;
            try
            {
                DataTable _dt = new DataTable();
                // _mmmObj = new MasterManagementModel();
                _dt = Get_All_UserAdd_DDL_Datatable(jsondata);
                if (_dt.Rows.Count > 0)
                {
                    jsonstring = Convert.ToString(_dt.Rows[0]["JSON_VALUE"]);
                }
                else
                {
                    jsonstring = Data.DatatableEmpty();
                }
            }
            catch (Exception ex)
            {
                jsonstring = Data.ExceptionToJsonString(ex.Message);
            }

            StringContent sc = new StringContent(jsonstring, Encoding.UTF8, "application/json");
            myContent = sc.ReadAsStringAsync().Result;

            return myContent;
        }

        public dynamic Get_All_UserRole_DDLAsync(string jsondata = null)
        {
            string myContent = string.Empty;
            try
            {
                DataTable _dt = new DataTable();
                _dt = Get_All_UserRole_DDL_Datatable(jsondata);
                if (_dt.Rows.Count > 0)
                {
                    jsonstring = Convert.ToString(_dt.Rows[0]["JSON_VALUE"]);
                }
                else
                {
                    jsonstring = Data.DatatableEmpty();
                }
            }
            catch (Exception ex)
            {
                jsonstring = Data.ExceptionToJsonString(ex.Message);
            }

            StringContent sc = new StringContent(jsonstring, Encoding.UTF8, "application/json");
            myContent = sc.ReadAsStringAsync().Result;

            return myContent;
        }
        
        public dynamic Get_All_ViewUser_DDLAsync(string jsondata = null)
        {
            string myContent = string.Empty;
            try
            {
                DataTable _dt = new DataTable();
                _dt = Get_All_ViewUser_DDL_Datatable(jsondata);
                if (_dt.Rows.Count > 0)
                {
                    jsonstring = Convert.ToString(_dt.Rows[0]["JSON_VALUE"]);
                }
                else
                {
                    jsonstring = Data.DatatableEmpty();
                }
            }
            catch (Exception ex)
            {
                jsonstring = Data.ExceptionToJsonString(ex.Message);
            }

            StringContent sc = new StringContent(jsonstring, Encoding.UTF8, "application/json");
            myContent = sc.ReadAsStringAsync().Result;

            return myContent;
        }

        public dynamic Get_AccessTypeData(string jsondata = null)
        {
            string myContent = string.Empty;
            try
            {
                DataTable _dt = new DataTable();
                _dt = Get_AccessTypeData_Datatable(jsondata);
                if (_dt.Rows.Count > 0)
                {
                    jsonstring = Convert.ToString(_dt.Rows[0]["JSON_VALUE"]);
                }
                else
                {
                    jsonstring = Data.DatatableEmpty();
                }
            }
            catch (Exception ex)
            {
                jsonstring = Data.ExceptionToJsonString(ex.Message);
            }

            StringContent sc = new StringContent(jsonstring, Encoding.UTF8, "application/json");
            myContent = sc.ReadAsStringAsync().Result;

            return myContent;
        }

        public dynamic Get_UserInfoMappingDataForUpdate(string jsondata = null)
        {
            string myContent = string.Empty;
            try
            {
                DataTable _dt = new DataTable();
                _dt = Get_UserInfoMappingDataForUpdate_Datatable(jsondata);
                if (_dt.Rows.Count > 0)
                {
                    jsonstring = Convert.ToString(_dt.Rows[0]["JSON_VALUE"]);
                }
                else
                {
                    jsonstring = Data.DatatableEmpty();
                }
            }
            catch (Exception ex)
            {
                jsonstring = Data.ExceptionToJsonString(ex.Message);
            }

            StringContent sc = new StringContent(jsonstring, Encoding.UTF8, "application/json");
            myContent = sc.ReadAsStringAsync().Result;

            return myContent;
        }

        // SP Data Fetch

        public DataTable Get_All_UserAdd_DDL_Datatable(String jsondata)
        {
            DataTable _dtObj = new DataTable();
            _paramObj = new SqlParameter[]
            {
                new SqlParameter("@json_data",jsondata) {SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input },

            };
            _dtObj = _dbObj.Select("sp_UserADD", _paramObj);
            return _dtObj;
        }

        public DataTable Get_AccessTypeData_Datatable(String jsondata)
        {
            DataTable _dtObj = new DataTable();
            _paramObj = new SqlParameter[]
            {
                new SqlParameter("@ModuleID",jsondata) {SqlDbType = SqlDbType.Int, Direction = ParameterDirection.Input },

            };
            _dtObj = _dbObj.Select("Sp_GetSubMouleAccess", _paramObj);
            return _dtObj;
        }

        public DataTable Get_All_UserRole_DDL_Datatable(String jsondata)
        {
            DataTable _dtObj = new DataTable();
            _paramObj = new SqlParameter[]
            {
                new SqlParameter("@json_data",jsondata) {SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input },

            };
            _dtObj = _dbObj.Select("Sp_UserModuleSubModuleMapping", _paramObj);
            return _dtObj;
        }

        public DataTable Get_All_ViewUser_DDL_Datatable(String jsondata)
        {
            DataTable _dtObj = new DataTable();
            _paramObj = new SqlParameter[]
            {
                new SqlParameter("@json_data",jsondata) {SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input },

            };
            _dtObj = _dbObj.Select("Sp_ViewUserData", _paramObj);
            return _dtObj;
        }

        public DataTable Get_UserInfoMappingDataForUpdate_Datatable(String jsondata)
        {
            DataTable _dtObj = new DataTable();
            _paramObj = new SqlParameter[]
            {
                new SqlParameter("@json_data",jsondata) {SqlDbType = SqlDbType.NVarChar, Direction = ParameterDirection.Input },

            };
            _dtObj = _dbObj.Select("sp_GetUserInfoByUId", _paramObj);
            return _dtObj;
        }
    }
}