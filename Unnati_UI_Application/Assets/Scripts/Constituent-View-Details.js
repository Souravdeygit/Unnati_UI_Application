
var _baseUrl = window.origin;
var _loader = $(".loader");
var _arrOBJ = [], _OBJ = {};



$(document).ready(function () {
    var _jsonObj = [

        {
            "APPLICANT_SYS_ID": 1,
            "IMG_SRC":"../images/musk.jpg",
            "COUNTRY_NAME": 1,
            "EMAIL": 1,
            "MOBILE_NO": 1,
            "ASSIGN_TO": 1,
            "FIRST_GIFT": 1,
            "LIFE_TIME_GIVING": 1,
            "LAST_GIFT": 1,
            "GREATEST_GIFT": 1,
            "PROSPECT_STATUS": 1,
            "CONSTITUENT_CODE":"test"

        },

        {
            "APPLICANT_SYS_ID": 2,
            "IMG_SRC": "../images/musk.jpg",
            "COUNTRY_NAME": 2,
            "EMAIL": 2,
            "MOBILE_NO": 2,
            "ASSIGN_TO": 2,
            "FIRST_GIFT": 2,
            "LIFE_TIME_GIVING": 2,
            "LAST_GIFT": 2,
            "GREATEST_GIFT": 2,
            "PROSPECT_STATUS": 2,
            "CONSTITUENT_CODE": "test2"

        },

        {
            "APPLICANT_SYS_ID": 3,
            "IMG_SRC": "../images/musk.jpg",
            "COUNTRY_NAME": 3,
            "EMAIL": 3,
            "MOBILE_NO": 3,
            "ASSIGN_TO": 3,
            "FIRST_GIFT": 3,
            "LIFE_TIME_GIVING": 3,
            "LAST_GIFT": 3,
            "GREATEST_GIFT": 3,
            "PROSPECT_STATUS": 3,
            "CONSTITUENT_CODE": "test3"

        },



    ]

    $.fn_BIND_TBL_ROWS = (_jsonObj) => {

        if (typeof _jsonObj == "undefined" && _jsonObj.length < 0)
            return;

        var _str = [], _html = "", _displaySection = "";

        _displaySection = $("#constituent-details-view").find('table tbody');
        _displaySection.empty();
        _jsonObj.map((v, k) => {

            _str.push('<tr>');
            _str.push('<input type="hidden" id="applicant-sys-id" val=' + v.APPLICANT_SYS_ID + ' />');
            _str.push('<td class="d-flex">');
            _str.push('<div class="kebab">');
            _str.push('<button class="kebab-btn-round" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">');
            _str.push('<i class="fa fa-ellipsis-v" aria-hidden="true"></i>');
            _str.push('</button>');
            _str.push('<ul class="dropdown-menu kebab-dropdwn" aria-labelledby="dropdownMenuButton1" style="">');
            _str.push('<li><button class="dropdown-iteam" data-bs-toggle="modal" data-bs-target="#user1modal5">Add Action</button></li>');
            _str.push('<li><button class="dropdown-iteam" data-bs-toggle="modal" data-bs-target="#user1modal8">Add Note</button></li>');
            _str.push('<li><button class="dropdown-iteam" data-bs-toggle="modal" data-bs-target="#user1modal12">Add Opportunity</button></li>');
            _str.push('<li><button class="dropdown-iteam" data-bs-toggle="modal" data-bs-target="#user1modal16-1">Assign Fundraiser</button></li>');
            _str.push('</ul>');
            _str.push('</div>');
            _str.push('<div class="media"><img src=' + v.IMG_SRC + ' width="40" class="dropbtn" role="button"></div>');
            _str.push('</td>');
            _str.push('<td style="z-index: -1;">');
            _str.push('<div class="media">');
            _str.push('<div class="media-body view-application-body pl-2">');
            _str.push('<h5><a href="#" class="highlight-txt" data-bs-toggle="modal" data-bs-target="#user-name-mdl-1">John Matt</a></h5>');
            _str.push('<label>Country - <span>' + v.COUNTRY_NAME + '</span></label><br>');
            _str.push('<label>Email Id - <span>' + v.EMAIL + '</span></label><br>');
            _str.push('<label>Phone No. - <span>' + v.MOBILE_NO + '</span></label>');
            _str.push('</div>');
            _str.push('</div>');
            _str.push('</td>');
            _str.push('<td style="z-index: -1;"><label class="frm-label-val"></label>' + v.ASSIGN_TO + '</td>');
            _str.push('<td style="z-index: -1;"><label class="frm-label-val">Student</label>' + v.CONSTITUENT_CODE + '</td>');
            _str.push('<td style="z-index: -1;"><label class="frm-label-val">0.00 <span>Rs</span></label>' + v.LIFE_TIME_GIVING + '</td>');
            _str.push('<td style="z-index: -1;"><label class="frm-label-val"></label>' + v.FIRST_GIFT + '</td>');
            _str.push('<td style="z-index: -1;"><label class="frm-label-val"></label>' + v.LAST_GIFT + '</td>');
            _str.push('<td style="z-index: -1;"><label class="frm-label-val"></label>' + v.GREATEST_GIFT + '</td>');
            _str.push('<td style="z-index: -1;"><label class="frm-label-val"></label>' + v.PROSPECT_STATUS + '</td>');
            _str.push('</tr>');




        })

        

        _html = _str.join('');
        _displaySection.append(_html);

    }
    $.fn_BIND_TBL_ROWS(_jsonObj);

    
    $(document).on("click", ".btn-catag", function (e) {

        var _this = $(e.currentTarget);
        var _name = _this.attr("name");
        if (_name == "MEETING")
            $("input#inpt-meeting").val(_name);

        if (_name == "CALL")
            $("input#inpt-call").val(_name);


        if (_name == "EMAIL")
            $("input#inpt-email").val(_name);

        if (_name == "TASK")
            $("input#inpt-task").val(_name);

        //alert(_name);

    });


    $(document).on("click", "#btn-save-action-details", function (e) {

        var _this = $(e.currentTarget);

        var catag_meeting = $("#inpt-meeting").val(),
            catag_call = $("#inpt-call").val(),
            catag_email = $("#inpt-email").val(),
            catag_task = $("#inpt-task").val(),
            _date = $("#input-date").val(),
            _strt_time = $("#inpt-start-time").val(),
            _end_time = $("#inpt-end-time").val(),
            _summary = $("#inpt-summary").val(),
            _notes = $("#txtrea-note").val(),
            _google_calender = $("#input-check-google-calender:checked").val(),
            _status = $("#ddl_status option:selected").val(),
            _assignTo = $("#inpt-Assign-To").val();

        
        _arrOBJ = [];
        var _jsondata = "";

        _OBJ["CALEGORY_MEETING"] = catag_meeting;
        _OBJ["CALEGORY_CALL"] = catag_call;
        _OBJ["CALEGORY_EMAIL"] = catag_email;
        _OBJ["CALEGORY_TASK"] = catag_task;
        _OBJ["DATE"] = _date;
        _OBJ["START_DATE"] = _strt_time;
        _OBJ["END_DATE"] = _end_time;
        _OBJ["SUMMARY"] = _summary;
        _OBJ["NOTES"] = _notes;
        _OBJ["GOOGLE_CALENDER_CHECK"] = _google_calender;
        _OBJ["STATUS"] = _status;
        _OBJ["ASSIGN_TO"] = _assignTo;

        _arrOBJ.push(_OBJ);

        _jsondata = JSON.stringify(_arrOBJ);

        $.ajax({
            type: "POST",
            url: _baseUrl + "/list/post-add-save-constituent-action-details",
            data: { "jsondata": _jsondata },
            dataType: "json",
            beforeSend: function () { _loader.fadeIn(); },
            success: function (data) {
                if (data.status) {
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        text: result.response,
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




    })

    $(document).on("click", "button#btn-copy-to-action", function (e) {


        var _this = $(e.currentTarget);
        var _copyto = $("#input-copy-to").val(),
            _attachedment = $("#checkbx-include-attachement:checked").val(),
            _customFields = $("#checkbx-include-custom:checked").val();


        _arrOBJ = [];
        var _jsondata = "";

        _OBJ["COPY_TO"] = _copyto;
        _OBJ["ATTACHMENT_CHECK"] = _attachedment;
        _OBJ["CUSTOME_CHECK"] = _customFields;


        _arrOBJ.push(_OBJ);

        _jsondata = JSON.stringify(_arrOBJ);

        $.ajax({
            type: "POST",
            url: _baseUrl + "/list/post-add-save-constituent-copy-to-details",
            data: { "jsondata": _jsondata },
            dataType: "json",
            beforeSend: function () { _loader.fadeIn(); },
            success: function (data) {
                if (data.status) {
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        text: result.response,
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




    })

    /*********
     Button Save add Constituent Note
     ***********/
    $(document).on("click", "button#btn-add-const-note", function () {
        var _this = $(this),
            _formID = _this.data('formtarget'),
            _istrue = "", _jsondata = "";

        if (typeof _formID == "undefined" && _formID == "")
            return;

        _istrue = $.isFormValidate($(_formID))
        //alert(_istrue);
        if (_istrue) {

            _jsondata = $.formBindJSON($(_formID))
            console.log(_jsondata);
            if (_jsondata.length == 0)
                return;

            $.ajax({
                type: "POST",
                url: _baseUrl + "/list/post-add-save-constitutent-note",
                data: { "jsondata": _jsondata },
                dataType: "json",
                beforeSend: function () { _loader.fadeIn(); },
                success: function (data) {
                    if (data.status) {
                        Swal.fire({
                            title: 'Success!',
                            icon: 'success',
                            text: result.response,
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



    })

    /*********
     Button Save add Constituent Opportunities
     ***********/
    $(document).on("click", "button#_BtnSaveOpportunities", function () {
        var _this = $(this),
            _formID = _this.data('formtarget'),
            _istrue = "", _jsondata = "";

        if (typeof _formID == "undefined" && _formID == "")
            return;

        _istrue = $.isFormValidate($(_formID))
        //alert(_istrue);
        if (_istrue) {

            _jsondata = $.formBindJSON($(_formID))
            console.log(_jsondata);
            if (_jsondata.length == 0)
                return;

            $.ajax({
                type: "POST",
                url: _baseUrl + "/list/post-add-save-constituent-opportunities",
                data: { "jsondata": _jsondata },
                dataType: "json",
                beforeSend: function () { _loader.fadeIn(); },
                success: function (data) {
                    if (data.status) {
                        Swal.fire({
                            title: 'Success!',
                            icon: 'success',
                            text: result.response,
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



    })

    /*********
     Button Save add Constituent Fundraisers
     ***********/
    $(document).on("click", "button#_BtnSaveFundraisersDetails", function () {
        var _this = $(this),
            _formID = _this.data('formtarget'),
            _istrue = "", _jsondata = "";

        if (typeof _formID == "undefined" && _formID == "")
            return;

        _istrue = $.isFormValidate($(_formID))
        //alert(_istrue);
        if (_istrue) {

            _jsondata = $.formBindJSON($(_formID))
            console.log(_jsondata);
            if (_jsondata.length == 0)
                return;

            $.ajax({
                type: "POST",
                url: _baseUrl + "/list/post-add-save-constituent-fundraisers",
                data: { "jsondata": _jsondata },
                dataType: "json",
                beforeSend: function () { _loader.fadeIn(); },
                success: function (data) {
                    if (data.status) {
                        Swal.fire({
                            title: 'Success!',
                            icon: 'success',
                            text: result.response,
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



    })


})