jQuery(document).ready(function ($) {

    var baseUrl = window.location.origin;
    var action_name = window.location.pathname.split('/')[2];
    var UserId = "";

    if (action_name == "add_user") {
        AllDropdownBindFunction();

        $(document).on("click", "#submit_user_data", function (e) {


            var user_type = $("#ddl_user_type").val();
            var organizaton = $("#ddl_organization").val();
            var title = $("#ddl_title").val();
            var system_role = $("#ddl_system_role").val();
            var f_name = $("#txt_first_name").val();
            var l_name = $("#txt_last_name").val();
            var gender = $("#ddl_gender").val();
            var ph_no = $("#txt_phone_no").val();
            var email = $("#txt_email").val();
            var Action = '0';


            var val = [];
            $(':checkbox:checked').each(function (i) {
                val.push($(this).val());
            });

            var SelectedModule = val.toString();

            var mainarrya = {};
            var main_arrya = [];
            mainarrya["USER_TYPE"] = parseInt(user_type);
            mainarrya["ORGANIZATION"] = parseInt(organizaton);
            mainarrya["TITLE"] = parseInt(title);
            mainarrya["SYSTEM_ROLE"] = parseInt(system_role);
            mainarrya["SYSTEM_MODULE"] = SelectedModule;
            mainarrya["F_NAME"] = f_name;
            mainarrya["L_NAME"] = l_name;
            mainarrya["GENDER"] = gender;
            mainarrya["PHONE_NO"] = ph_no;
            mainarrya["EMAIL"] = email;
            mainarrya["Action"] = Action;
            main_arrya.push(mainarrya);
            var jsonString = JSON.stringify(main_arrya);
            var json_val = jsonString;

            $.ajax({
                type: "POST",
                url: baseUrl + "/User_Management/post_add_user",
                data: { "jsondata": json_val },
                dataType: "json",
                beforeSend: function () { _loader.fadeIn(); },
                success: function (data) {
                    if (data.STATUS == 'true') {

                        clearfunction();
                        Swal.fire({
                            title: 'Success!',
                            icon: 'success',
                            text: data.response,
                            showConfirmButton: true,
                            //onLoad.baseUrl: baseUrl
                        }).then((result) => {
                            if (result.isConfirmed) {

                            }
                        });

                    }
                    else {
                        Swal.fire({
                            icon: 'info',
                            title: 'Info!',
                            showConfirmButton: true,
                            text: data.response
                        })

                    }


                },
                error: function (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        showConfirmButton: true

                    })

                },
                complete: function () { _loader.fadeOut(); },


            })

        });

    }
    else if (action_name == "add_role") {
        $("#show_Div").hide();
        var dropdownSelectvalue = "";
        RoleModuleDropdownbind();

        $('select').on('change', function () {
            dropdownSelectvalue = this.value;
            UserAccessBind(dropdownSelectvalue);
            CheckedRow(dropdownSelectvalue);
            var selectedTxt = $("#DropdownList_Id option:selected").text();
            ButtonClickFunction(selectedTxt);
        });

    }
    else if (action_name == "view_user") {
        MainViewUser();
        UserRoleDropdownbind();
        $(".custom-success-btn").click(function () {
            var f_name = $("#FirstName_Id").val();
            var system_role = $("#ddl_system_role_id").val();
            var ph_no = $("#Mobile_Id").val();
            var email = $("#Email_Id").val();

            var mainarrya = {};
            var main_arrya = [];
            mainarrya["Action"] = "SEARCH";
            mainarrya["SYSTEM_ROLE"] = parseInt(system_role);
            mainarrya["F_NAME"] = f_name;
            mainarrya["PHONE_NO"] = ph_no;
            mainarrya["EMAIL"] = email;
            main_arrya.push(mainarrya);
            var jsonString = JSON.stringify(main_arrya);
            var json_val = jsonString;

            Viewuserbind(json_val);
        })
    }

    function MainViewUser() {
        var mainarrya = {};
        var main_arrya = [];
        mainarrya["Action"] = "All";
        main_arrya.push(mainarrya);
        var jsonString = JSON.stringify(main_arrya);
        var json_val = jsonString;

        Viewuserbind(json_val);
        UpdateButtonClickEvent();
        DeleteSpecificViewUser();

        $(document).on("click", "#HeaderClose_Id", function (e) {
            Viewuserbind(json_val);
            UpdateButtonClickEvent();
            DeleteSpecificViewUser();
        });
    }

    function GridSubModuleBind(id) {
        // AJAX Call
    }

    function UserAccessBind(dropdownSelectvalue) {
        var json_val = dropdownSelectvalue;
        $.ajax({
            url: baseUrl + "/User_Management/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {


                $("#show_Div").empty();
                $("#tbody_Id").empty();

                if (data.response != null) {
                    if (data.response1 != null) {
                        var val = [];
                        var SelectedModule = "";
                        var lngth = data.response.length;

                        var selectedTxt = $("#DropdownList_Id option:selected").text();
                        var selectedVal = $("#DropdownList_Id option:selected").val();

                        $("#" + selectedTxt + "_Id").empty();

                        var html = "<div class='" + selectedTxt + " box mt-4' id='" + selectedTxt + "_Id'><div class='privilege_tree'><div class='primary-table'>";
                        html += "<table class='table table-bordered mt-3' id='" + selectedTxt + "_table_Id'><thead><tr><th colspan='8' id='" + selectedVal + "'>" + selectedTxt + "</th></tr></thead>";
                        html += "<tbody id='tbody_Id'>";

                        html += "<tr><td hidden></td><td></td>";
                        $.each(data.response, function (data, value) {
                            html += "<td>" + value.AccessName + "</td>";
                            val.push(value.SubModuleAccessID);
                        })
                        html += "</tr>";

                        $.each(data.response1, function (data, value) {
                            html += "<tr>";
                            html += "<td hidden>" + value.SubModuleID + "</td><td>" + value.SubModuleName + "</td>";

                            var snm = value.SubModuleName;
                            var c1 = val.length;

                            for (i = 1; i <= val.length; ++i) {
                                html += "<td><input class='check-bx' type='checkbox' value='" + i + "' id='defaultCheck1' name='" + snm + "'></td>";
                            }

                            html += "</tr>";
                        })

                        $("#tbody_Id").append(html);
                        html += "</tbody></table></div></div>";

                        html += "<div class='row mt-3'><div class='col-md-1'><button class='custom-btn custom-success-btn' id='submit" + selectedTxt + "'>Save</button></div>";
                        html += "<div class='col-md-2'><button class='custom-btn custom-danger-btn' id='Cancel" + selectedTxt + "'>Cancel</button></div>";
                        html += "</div>";

                        html += "</div>";

                        $("#show_Div").append(html);
                        $("#show_Div").show();
                    }


                }
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function CheckedRow(dropdownSelectvalue) {
        var json_val = dropdownSelectvalue;
        $.ajax({
            url: baseUrl + "/User_Management/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                if (data.response != null) {
                    if (data.response1 != null) {
                        var val = [];
                        var SelectedModule = "";
                        var lngth = data.response.length;

                        var selectedTxt = $("#DropdownList_Id option:selected").text();
                        var selectedVal = $("#DropdownList_Id option:selected").val();

                        $.each(data.response1, function (data, value) {
                            var arrayaccestype = [];
                            arrayaccestype.push(value.SubModuleAccessID);
                            SelectedModule = arrayaccestype.toString();

                            var snm = value.SubModuleName;

                            if (SelectedModule != "") {
                                arrayaccestype = SelectedModule.split(",");

                                $.each(arrayaccestype, function (i, val1) {
                                    $('input[name="' + snm + '"][value="' + val1.toString() + '"]').prop("checked", true);

                                });
                            }

                        })
                    }
                }
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function Viewuserbind(json_val) {
        $.ajax({
            url: baseUrl + "/User_Management/ViewAllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {
                $("#demo").empty();
                if (data.response != null) {
                    if (data.response1 != null) {

                        var html = "<table id='viewuserbind_Table'>";
                        html += "<thead><tr><th>PERSON NAME</th><th>ORGANISATION NAME</th><th>EMAIL ID</th><th>ROLE</th><th>Actions</th></tr></thead>";
                        html += "<tbody>";

                        $.each(data.response1, function (data, value) {
                            html += "<tr id=" + value.id + ">";
                            html += "<td>" + value.PERSONNAME + "</td><td>" + value.OrgName + "</td><td>" + value.EmailId + "</td><td>" + value.ROLE + "</td>";

                            html += "<td class='d-flex' style='justify-content: center;'><button type='button' class='action-btn butt_Subclass' id='" + value.id + "' name='btnName_" + value.id + "'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></button>";
                            html += "<button type='button' class='action-btn butt_Deltclass' id='" + value.id + "' name='btnName_" + value.id + "'><i class='fa fa-trash-o' aria-hidden='true'></i></button>";
                            html += "</td></tr>"; //class='action-btn cls_" + value.id + "'

                        })

                        html += "</tbody></table>";
                        $("#demo").append(html);
                    }
                    else {
                        var html = "<table id='viewuserbind_Table'>";
                        html += "<tr>No User Info Available. Please Add User from User Management Section</tr>";
                        html += "</table>";
                        $("#demo").append(html);
                    }
                }
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });

        UpdateSpecificViewUser();
    }

    function UpdateSpecificViewUser() {
        $(".butt_Subclass").click(function () {
            var ID = $(this).attr('id');
            UserId = ID;
            AllDropdownBindFunction();
            SelectedDropdownFunction(UserId);
            $("#myModal").modal('show');

        });
    }

    function DeleteSpecificViewUser() {
        $(".butt_Deltclass").click(function () {
            var ID = $(this).attr('id');
            if (confirm('Are you sure you want to Delete this?')) {
                var Action = '2';
                var mainarrya = {};
                var main_arrya = [];
                mainarrya["UserId"] = parseInt(ID);
                mainarrya["Action"] = Action;
                main_arrya.push(mainarrya);
                var jsonString = JSON.stringify(main_arrya);
                var json_val = jsonString;

                $.ajax({
                    type: "POST",
                    url: baseUrl + "/User_Management/post_add_user",
                    data: { "jsondata": json_val },
                    dataType: "json",
                    beforeSend: function () { _loader.fadeIn(); },
                    success: function (data) {
                        if (data.STATUS == 'true') {
                            MainViewUser();
                            Swal.fire({
                                title: 'Success!',
                                icon: 'success',
                                text: data.response,
                                showConfirmButton: true,
                            }).then((result) => {
                                if (result.isConfirmed) {

                                }
                            });
                        }
                        else {
                            Swal.fire({
                                icon: 'info',
                                title: 'Info!',
                                showConfirmButton: true,
                                text: data.response
                            })
                        }
                    },
                    error: function (err) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            showConfirmButton: true

                        })

                    },
                    complete: function () { _loader.fadeOut(); },
                })
            }
        });
    }

    function UpdateButtonClickEvent() {
        $(document).on("click", "#submit_user_data", function (e) {
            if (confirm('Are you sure you want to Update this?')) {
                var user_type = $("#ddl_user_type").val();
                var organizaton = $("#ddl_organization").val();
                var title = $("#ddl_title").val();
                var system_role = $("#ddl_system_role").val();
                var f_name = $("#txt_first_name").val();
                var l_name = $("#txt_last_name").val();
                var gender = $("#ddl_gender").val();
                var ph_no = $("#txt_phone_no").val();
                var email = $("#txt_email").val();
                var Action = '1';


                var val = [];
                $(':checkbox:checked').each(function (i) {
                    val.push($(this).val());
                });

                var SelectedModule = val.toString();

                var mainarrya = {};
                var main_arrya = [];
                mainarrya["USER_TYPE"] = parseInt(user_type);
                mainarrya["ORGANIZATION"] = parseInt(organizaton);
                mainarrya["TITLE"] = parseInt(title);
                mainarrya["SYSTEM_ROLE"] = parseInt(system_role);
                mainarrya["SYSTEM_MODULE"] = SelectedModule;
                mainarrya["F_NAME"] = f_name;
                mainarrya["L_NAME"] = l_name;
                mainarrya["GENDER"] = gender;
                mainarrya["PHONE_NO"] = ph_no;
                mainarrya["EMAIL"] = email;
                mainarrya["Action"] = Action;
                mainarrya["UserId"] = parseInt(UserId);
                main_arrya.push(mainarrya);
                var jsonString = JSON.stringify(main_arrya);
                var json_val = jsonString;

                $.ajax({
                    type: "POST",
                    url: baseUrl + "/User_Management/post_add_user",
                    data: { "jsondata": json_val },
                    dataType: "json",
                    beforeSend: function () { _loader.fadeIn(); },
                    success: function (data) {
                        if (data.STATUS == 'true') {
                            MainViewUser();
                            Swal.fire({
                                title: 'Success!',
                                icon: 'success',
                                text: data.response,
                                showConfirmButton: true,
                                //onLoad.baseUrl: baseUrl
                            }).then((result) => {
                                if (result.isConfirmed) {

                                }
                            });
                        }
                        else {
                            Swal.fire({
                                icon: 'info',
                                title: 'Info!',
                                showConfirmButton: true,
                                text: data.response
                            })
                        }
                    },
                    error: function (err) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            showConfirmButton: true

                        })

                    },
                    complete: function () { _loader.fadeOut(); },


                })
            }

        });
    }

    function SelectedDropdownFunction(id) {
        debugger;
        var mainarrya = {};
        var main_arrya = [];
        mainarrya["Id"] = parseInt(id);
        main_arrya.push(mainarrya);
        var jsonString = JSON.stringify(main_arrya);
        var json_val = jsonString;

        $.ajax({
            type: "POST",
            url: baseUrl + "/User_Management/GetUserInfoDataforDropdownBind",
            data: { "jsondata": json_val },
            dataType: "json",
            beforeSend: function () { _loader.fadeIn(); },
            success: function (data) {
                if (data.STATUS == 'true') {
                    if (data.response != null) {
                        $.each(data.response, function (data, value) {
                            $('#ddl_user_type option[value="' + value.UserType + '"]').attr("selected", "selected");
                            $('#ddl_organization option[value="' + value.OrganizationName + '"]').attr("selected", "selected");
                            $('#ddl_title option[value="' + value.Title + '"]').attr("selected", "selected");
                            $('#ddl_system_role option[value="' + value.ROLEID + '"]').attr("selected", "selected");

                            var selectedOptions = value.ModuleID.split(",");
                            for (var i in selectedOptions) {
                                var optionVal = selectedOptions[i];
                                $("#ModuleId").find("option[value=" + optionVal + "]").prop("selected", "selected");

                            }
                            $("#ModuleId").multiselect('reload');

                            $('#txt_first_name').val(value.Firstname);
                            $('#txt_last_name').val(value.LastName);
                            $('#ddl_gender option[value="' + value.Gender + '"]').attr("selected", "selected");
                            $('#txt_phone_no').val(value.Phone);
                            $('#txt_email').val(value.EmailId);
                        })
                    }
                }
                else {
                    Swal.fire({
                        icon: 'info',
                        title: 'Info!',
                        showConfirmButton: true,
                        text: data.response
                    })

                }

            },
            error: function (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: true

                })

            },
            complete: function () { _loader.fadeOut(); },


        })
    }

    function Searchuserbind(json_val) {
        // AJAX Call
    }

    function UserTypeDropdownbind() {
        var json_val = "28";

        $.ajax({
            url: baseUrl + "/masterdropdownlist/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                $("#ddl_user_type").empty();
                $("#ddl_user_type").append($("<option></option>").val(0).html("Select User Type"));
                $.each(data.response, function (data, value) {
                    $("#ddl_user_type").append($("<option></option>").val(value.ID).html(value.TypeName));
                })
                $("#ddl_user_type").trigger("chosen:updated");
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function OrganizationDropdownbind() {
        var json_val = "29";

        $.ajax({
            url: baseUrl + "/masterdropdownlist/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                $("#ddl_organization").empty();
                $("#ddl_organization").append($("<option></option>").val(0).html("Select Organization"));
                $.each(data.response, function (data, value) {
                    $("#ddl_organization").append($("<option></option>").val(value.ID).html(value.OrgName));
                })
                $("#ddl_organization").trigger("chosen:updated");
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function TitleDropdownbind() {
        var json_val = "30";

        $.ajax({
            url: baseUrl + "/masterdropdownlist/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                $("#ddl_title").empty();
                $("#ddl_title").append($("<option></option>").val(0).html("Select Title"));
                $.each(data.response, function (data, value) {
                    $("#ddl_title").append($("<option></option>").val(value.ID).html(value.Title));
                })
                $("#ddl_title").trigger("chosen:updated");
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function RoleDropdownbind() {
        var json_val = "31";

        $.ajax({
            url: baseUrl + "/masterdropdownlist/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                $("#ddl_system_role").empty();
                $("#ddl_system_role").append($("<option></option>").val(0).html("Select Role"));
                $.each(data.response, function (data, value) {
                    $("#ddl_system_role").append($("<option></option>").val(value.ID).html(value.RoleName));
                })
                $("#ddl_system_role").trigger("chosen:updated");
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function ModuleDropdownbind() {
        var json_val = "32";

        $.ajax({
            url: baseUrl + "/masterdropdownlist/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                $("#ModuleId").empty();
                $("#ModuleId").multiselect("Unselect all");
                $.each(data.response, function (data, value) {

                    $("#ModuleId").append($("<option></option>").val(value.ID).html(value.ModuleName));
                })
                $("#ModuleId").multiselect('reload');

                multiselectdropdownBind();
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function GenderDropdownbind() {
        var json_val = "33";

        $.ajax({
            url: baseUrl + "/masterdropdownlist/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                $("#ddl_gender").empty();
                $("#ddl_gender").append($("<option></option>").val(0).html("Select Gender"));
                $.each(data.response, function (data, value) {

                    $("#ddl_gender").append($("<option></option>").val(value.GenderCode).html(value.GenderName));
                })
                $("#ddl_gender").trigger("chosen:updated");
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function multiselectdropdownBind() {
        $("#ModuleId").multiselect({

            columns: 1,     // how many columns should be use to show options
            search: true, // include option search box

            // search filter options
            searchOptions: {
                delay: 250,                  // time (in ms) between keystrokes until search happens
                showOptGroups: false,                // show option group titles if no options remaining
                searchText: true,                 // search within the text
                searchValue: false,                // search within the value
                onSearch: function (element) { } // fires on keyup before search on options happens
            },

            // plugin texts
            texts: {
                placeholder: 'Select options', // text to use in dummy input
                search: 'Search',         // search input placeholder text
                selectedOptions: ' selected',      // selected suffix text
                selectAll: 'Select all',     // select all text
                unselectAll: 'Unselect all',   // unselect all text
                noneSelected: 'None Selected'   // None selected text
            },

            // general options
            selectAll: false, // add select all option
            selectGroup: false, // select entire optgroup
            minHeight: 200,   // minimum height of option overlay
            maxHeight: null,  // maximum height of option overlay
            maxWidth: null,  // maximum width of option overlay (or selector)
            maxPlaceholderWidth: null, // maximum width of placeholder button
            maxPlaceholderOpts: 10, // maximum number of placeholder options to show until "# selected" shown instead
            showCheckbox: true,  // display the checkbox to the user
            optionAttributes: [],  // attributes to copy to the checkbox from the option element

            // Callbacks
            onLoad: function (element) { },           // fires at end of list initialization
            onOptionClick: function (element, option) { },   // fires when an option is clicked
            onControlOpen: function (element) { },           // fires when the options list is opened
            onControlClose: function (element) { },           // fires when the options list is closed
            onSelectAll: function (element, selected) { }, // fires when (un)select all is clicked
            onPlaceholder: function (element, placeholder, selectedOpts) { }, // fires when the placeholder txt is up<a href="https://www.jqueryscript.net/time-clock/">date</a>d

            // @NOTE: these are for future development
            minSelect: false, // minimum number of items that can be selected
            maxSelect: false, // maximum number of items that can be selected

        });
    }

    function AllDropdownBindFunction() {
        UserTypeDropdownbind();
        OrganizationDropdownbind();
        TitleDropdownbind();
        RoleDropdownbind();
        ModuleDropdownbind();
        GenderDropdownbind();
    }

    function clearfunction() {
        $("#txt_first_name").val("");
        $("#txt_last_name").val("");
        $("#txt_phone_no").val("");
        $("#txt_email").val("");
        AllDropdownBindFunction();
    }

    function RoleModuleDropdownbind() {
        var json_val = "32";

        $.ajax({
            url: baseUrl + "/masterdropdownlist/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                $("#DropdownList_Id").empty();
                $("#DropdownList_Id").append($("<option></option>").val(0).html("Select Module"));
                $.each(data.response, function (data, value) {

                    $("#DropdownList_Id").append($("<option></option>").val(value.ID).html(value.ModuleName));
                })
                $("#DropdownList_Id").trigger("chosen:updated");

            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

    function ButtonClickFunction(selectedTxt) {
        $(document).on("click", "#submit" + selectedTxt + "", function (e) {

            var main_arrya = [];

            $("[id*=" + selectedTxt + "_table_Id] tr").each(function () {
                var self = $(this);
                var col_1_value = self.find("td:eq(0)").text().trim();
                //alert(col_1_value);
                if (col_1_value != '') {
                    var name = self.find("td:eq(1)").text().trim();
                    if (name == "Gift Management") {
                        name = "Gift";
                    }
                    var val = [];
                    $('[name="' + name + '"]:checked').each(function () {
                        val.push($(this).val());
                    });


                    var SelectedModule = val.toString();

                    var SelectedDropDownModule = $("#DropdownList_Id").val();

                    var mainarrya = {};
                    mainarrya["DropDownModule_Val"] = parseInt(SelectedDropDownModule);
                    mainarrya["Submodule_Id"] = parseInt(col_1_value);
                    mainarrya["Access_Type"] = SelectedModule;
                    main_arrya.push(mainarrya);
                }

            });

            var jsonString = JSON.stringify(main_arrya);
            var json_val = jsonString;
            //alert(json_val);

            $.ajax({
                type: "POST",
                url: baseUrl + "/User_Management/FundRaisingDataSubmit",
                data: { "jsondata": json_val },
                dataType: "json",
                beforeSend: function () { _loader.fadeIn(); },
                success: function (data) {

                    if (data.STATUS == 'true') {
                        Swal.fire({
                            title: 'Success!',
                            icon: 'success',
                            text: data.response,
                            showConfirmButton: true,
                        }).then((result) => {
                            if (result.isConfirmed) {

                            }
                        });
                    }
                    else {
                        Swal.fire({
                            icon: 'info',
                            title: 'Info!',
                            showConfirmButton: true,
                            text: data.response
                        })

                    }
                },
                error: function (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        showConfirmButton: true

                    })
                },
                complete: function () { _loader.fadeOut(); },
            })

        });
    }

    function UserRoleDropdownbind() {
        var json_val = "31";

        $.ajax({
            url: baseUrl + "/masterdropdownlist/AllUserbind",
            data: { "jsondata": json_val },
            type: "GET",
            async: false,
            dataType: "json",
            success: function (data) {

                $("#ddl_system_role_id").empty();
                $("#ddl_system_role_id").append($("<option></option>").val(0).html("Select Role"));
                $.each(data.response, function (data, value) {
                    $("#ddl_system_role_id").append($("<option></option>").val(value.ID).html(value.RoleName));
                })
                $("#ddl_system_role_id").trigger("chosen:updated");
            },
            error: function (data) {
                $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
            }
        });
    }

});








