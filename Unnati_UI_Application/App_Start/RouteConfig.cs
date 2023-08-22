using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Unnati_UI_Application
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                    name: "User Login",
                    url: "user/login",
                    defaults: new { controller = "User", action = "UserLogindata" }
                );
            //************************************|Constituent Conbtroller Start|**********************************//

            routes.MapRoute(
                name: "Get Account type Dropdown bind",
                url: "masterdropdownlist/get-account-type",
                defaults: new { controller = "MasterDropdownList", action = "Get_Account_type" }
            );

            routes.MapRoute(
                name: "Get Email type Dropdown bind",
                url: "masterdropdownlist/get-email-type",
                defaults: new { controller = "MasterDropdownList", action = "Get_Email_type" }
            );

            routes.MapRoute(
                name: "Get Phone type Dropdown bind",
                url: "masterdropdownlist/get-phone-type",
                defaults: new { controller = "MasterDropdownList", action = "Get_Phone_type" }
            );
            routes.MapRoute(
                  name: "Adress type Dropdown bind",
                  url: "masterdropdownlist/get-adress-type",
                  defaults: new { controller = "MasterDropdownList", action = "Get_Adress_type" }
              );

            routes.MapRoute(
                   name: "Post Add Individual Save",
                   url: "constituent/post-add-save-individual",
                   defaults: new { controller = "Constituent", action = "PostSaveIndividual" }
               );
            routes.MapRoute(
                  name: "Post Add Oraganization Save",
                  url: "constituent/post-add-save-organization",
                  defaults: new { controller = "Constituent", action = "PostSaveOrganization" }
              );




            //************************************|Constituent Conbtroller End|**********************************//

            //************************************|LIST Conbtroller Start|**********************************//

            routes.MapRoute(
                  name: "Post Add Constituent-Action-Details",
                  url: "list/post-add-save-constituent-action-details",
                  defaults: new { controller = "List", action = "PostAddConstituentActionDetails" }
              );

            routes.MapRoute(
              name: "Post Add Constituent-Attachment-Details",
              url: "list/post-add-save-constituent-attachment-details",
              defaults: new { controller = "List", action = "PostAddConstituentAttachment" }
          );

            routes.MapRoute(
              name: "Post Add Constituent-Copy-to-Details",
              url: "list/post-add-save-constituent-copy-to-details",
              defaults: new { controller = "List", action = "PostAddConstituentCopyTO" }
            );


            routes.MapRoute(
              name: "Post Add Constituent-Note-Details",
              url: "list/post-add-save-constitutent-note",
              defaults: new { controller = "List", action = "PostAddConstituent_Note" }
            );

            routes.MapRoute(
              name: "Post Add Constituent-Opportunities-Details",
              url: "list/post-add-save-constituent-opportunities",
              defaults: new { controller = "List", action = "PostAddConstituent_Opportunities" }
            );


            routes.MapRoute(
              name: "Post Add Constituent-Fundraisers-Details",
              url: "list/post-add-save-constituent-fundraisers",
              defaults: new { controller = "List", action = "PostAddConstituent_Fundraisers" }
            );


            //************************************|LIST Conbtroller End|**********************************//
            //************************************|LIST UserManagementList Start|**********************************//

            routes.MapRoute(
              name: "Submit User Management Data",
              url: "User_Management/post_add_user",
              defaults: new { controller = "User_Management", action = "save_all_data" }
            );

            routes.MapRoute(
              name: "Get Finding Data",
              url: "User_Management/FundRaising_Bind",
              defaults: new { controller = "User_Management", action = "save_add_role" }
            );

            routes.MapRoute(
              name: "Submit Finding Data",
              url: "User_Management/FundRaisingDataSubmit",
              defaults: new { controller = "User_Management", action = "save_add_role" }
            );

            routes.MapRoute(
                name: "Get User type Dropdown bind",
                url: "masterdropdownlist/AllUserbind",
                defaults: new { controller = "MasterDropdownList", action = "Get_All_User_Dropdown_bind" }
            );

            routes.MapRoute(
                name: "Get User Accesstype List bind",
                url: "User_Management/AllUserbind",
                defaults: new { controller = "User_Management", action = "BindAccessTypeData" }
            );

            routes.MapRoute(
                name: "Get User info data",
                url: "User_Management/ViewAllUserbind",
                defaults: new { controller = "User_Management", action = "view_UserDetails" }
            );

            routes.MapRoute(
                name: "Get User info data for update",
                url: "User_Management/GetUserInfoDataforDropdownBind",
                defaults: new { controller = "User_Management", action = "GetUserInfoMappingDataForUpdate" }
            );

            //************************************|LIST UserManagementList End|**********************************//



            routes.MapRoute(
              name: "Get FundRaisingAccess",
              url: "FundRaisingList/GetFundraisingAccess",
              defaults: new { controller = "FundRaisingList", action = "GetSubmoduleAccessDetails" }
            );





            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}",
                defaults: new { controller = "User", action = "UserLogin" }
            );
        }
    }
}
