using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace Unnati_UI_Application.App_Start
{
    public class Constant
    {
       internal static string API_BASEURL = WebConfigurationManager.AppSettings["API_URL"];
       internal static string LOG_DIR_PATH = "~/LogReport";
        internal static string LOG_FILE_PATH = "~/LogReport/_Log.txt";
        internal static string SERVER_PATH_PREFIX = "~/";
        internal static string UPLOAD_FILE = "~/Uploaded_files";
        internal static string UPLOAD_IMAGE_RAW_FILE = "userphoto/";
        internal static string UPLOAD_INVOICE_LOGO = "logo/";
        //internal static ulong MAX_FILE_SIZE                               = 5242880;  // 5 MB 

        // Static Message
        internal static string SUCESSFULLY_INSERT_MSG = "Data successfully inserted.";
        internal static string SUCESSFULLY_UPDATE_MSG = "Data successfully updated.";
        internal static string SUCESSFULLY_DELETE_MSG = "Data successfully deleted.";
        internal static string EMPTY_DATA_MSG = "Data not available.";
        internal static string OPPS_MSG = "Opps..!!! Something went wrong.";
        internal static string ALREADY_EXISTS_MSG = "Data already exists.";
        // API URL PATH   
        internal static string LOGIN = API_BASEURL + "api/user-login";
    }
}