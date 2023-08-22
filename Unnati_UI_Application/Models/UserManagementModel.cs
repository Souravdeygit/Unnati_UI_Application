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
using System.IO;
using System.Security.AccessControl;
using System.Text;
using System.Net.Mail;
using System.ComponentModel.DataAnnotations;

namespace Unnati_UI_Application.Models
{
    public class UserManagementModel
    {
    }
    public class LoginValidation
    {
        [Display(Name = "User Name")]
        [Required(ErrorMessage = "User Name should be required.")]
        public string UserName { get; set; }

        [Display(Name = "Password")]
        [Required(ErrorMessage = "Password should be required.")]
        [DataType(DataType.Password)]
        //[RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$", ErrorMessage = "Please Provide a password 8 to 15 characters and include one lowercase,one uppercase,one number and one special character")]
        public string Password { get; set; }
    }
}