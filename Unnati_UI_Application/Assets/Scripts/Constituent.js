var _baseUrl = window.origin;
var _loader = $(".loader");

$(document).ready(function () {
    $("#left_modal_smm").modal("show");
    /***************************************
    * Purpose:- This Method return 'true' if all form's all fields are properly filled 
    * Method Name:- $.isFormValidate
    * Parameters:_formID i.e  $("#form")
    ***************************************/
    $.isFormValidate = (_formID) => {
        if (typeof _formID != "undefined" && _formID != "" && _formID.length > 0) {

            var _frmObj = $(_formID),
                _iTag = 'span',
                _isExist = "",
                _isRequirtedExist,
                _responseStatus = true,
                formControl = _frmObj.find('select , input , textarea');
            //var _spanHTML = '<span style="color:red;font-size: smaller;font-family: monospace;">*Please fill out this field.</span>';


            $.each(formControl, (indx, val) => {
                var _this = $(val);
                var _spanHTML = '<span id="spanID-' + indx + '" style="color:red;font-size: smaller;font-family: monospace;">*Please fill out this field.</span>';

                _isExist = _this.next(_iTag).length > 0 ? true : false;
                if ($.parseBool(_isExist))
                    _this.next(_iTag).remove();
                _isRequirtedExist = _this.hasAttr('required');

                if (_this.hasAttr('name')) {
                    if (_isRequirtedExist) {
                        if (_this.is('input')) {
                            if (_this.attr('name') == "MOBILE_NO") {
                                if ($.isNull(_this.val())) {
                                    _this.after(_spanHTML);
                                    _responseStatus = false;
                                }
                                else {
                                    if (!$.validregex(_this.val(), "mobile")) {
                                        _this.after('<span style="color:red;font-size: smaller;font-family: monospace;">*Mobile No should be 10 digit.</span>');
                                        _responseStatus = false;
                                    }

                                }
                            }
                            else if (_this.attr('name') == "EMAIL") {
                                if ($.isNull(_this.val())) {
                                    _this.after(_spanHTML);
                                    _responseStatus = false;
                                }
                                else {
                                    if (!$.validregex(_this.val(), "email")) {
                                        _this.after('<span style="color:red;font-size: smaller;font-family: monospace;">*Email id is not valied.</span>');
                                        _responseStatus = false;
                                    }
                                }

                            }

                            else if ($.isNull(_this.val())) {
                                _this.after(_spanHTML);
                                _responseStatus = false;
                            }
                        }
                        else if (_this.is('select')) {
                            if (_this.children("option").filter(":selected").val() === "0") {
                                _this.after(_spanHTML);
                                _responseStatus = false;
                            }
                        }
                        else if (_this.is('textarea')) {
                            if ($.isNull(_this.val())) {
                                _this.after(_spanHTML);
                                _responseStatus = false;
                            }
                        }
                    }
                }


            })

        }
        return _responseStatus;

    }
    //**********Set PlaceHolder Text
    $("#FromIdIndividual").find('input[type="text"]').attr('placeholder', "Enter");

    $("#formID_organization").find('input[type="text"]').attr('placeholder', "Enter");
    
    // Dropdown list bind

    //adress-type ddl 
    $.ajax({
        url: _baseUrl + "/masterdropdownlist/get-adress-type",
        type: "GET",
        async: false,
        dataType: "json",
        success: function (data) {
            $("#ddl-Adress-type,#ddl-org-adres-type").append("<option>" + "-- Select --" + "</option>");
            $("#ddl-Adress-type,#ddl-org-adres-type").Dropdown(data.response, {
                value: {
                    text: "Type",
                    value: "ID"
                }
            });
        },
        error: function (data) {
            $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
        }
    });

    //adress-type ddl 
    $.ajax({
        url: _baseUrl + "/masterdropdownlist/get-account-type",
        type: "GET",
        async: false,
        dataType: "json",
        success: function (data) {
            $("#ddl-presence,#org_online_presence_type").Dropdown(data.response, {
                value: {
                    text: "Type",
                    value: "ID"
                }
            });
        },
        error: function (data) {
            $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
        }
    });

    //adress-type ddl 
    $.ajax({
        url: _baseUrl + "/masterdropdownlist/get-email-type",
        type: "GET",
        async: false,
        dataType: "json",
        success: function (data) {
            $("#ddl-Email-type,#org-email-type").Dropdown(data.response, {
                value: {
                    text: "Type",
                    value: "ID"
                }
            });
        },
        error: function (data) {
            $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
        }
    });

    //adress-type ddl 
    $.ajax({
        url: _baseUrl + "/masterdropdownlist/get-phone-type",
        type: "GET",
        async: false,
        dataType: "json",
        success: function (data) {
            $("#ddl-phn-type,#org-phn-no-type").Dropdown(data.response, {
                value: {
                    text: "Type",
                    value: "ID"
                }
            });
        },
        error: function (data) {
            $.alert({ title: "Error", content: "Oops!...Something went wrong", type: "red" });
        }
    });

    //First Text Will Upper
    $("input[type='text']").on('keyup paste', function () {
        this.value = $.fn_FIRST_LETTER_CAPITAL($(this).val());
    })

    $(document).on("click", "button.individual-radio-address", function () {
        var _radioInputVal = $('#individual-addrss-radio-val');
        _radioInputVal.val($(this).attr('data-radio_val'));
        alert($(this).attr('data-radio_val'));
    })

    $(document).on("click", "button.individual-radio-phn", function () {
        var _radioInputVal = $('#individual-Phone-radio-val');
        _radioInputVal.val($(this).attr('data-radio_val'));
        alert($(this).attr('data-radio_val'));
    })

    $(document).on("click", "button.individual-radio-email", function () {
        var _radioInputVal = $('#individual-Email-radio-val');
        _radioInputVal.val($(this).attr('data-radio_val'));
        alert($(this).attr('data-radio_val'));
    })

    $(document).on("click", "button.individual-radio-online-presence", function () {
        var _radioInputVal = $('#individual-Online-Presence-radio-val');
        _radioInputVal.val($(this).attr('data-radio_val'));
        alert($(this).attr('data-radio_val'));
    })


    ///************************************| Individual Section|********************************************************///

    /*********
     Button Save Individual
     ***********/
    $(document).on("click", "button#_BtnSvIndividual", function () {
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
                url: _baseUrl + "/constituent/post-add-save-individual",
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

    ///************************************| Organization Section|********************************************************///

    /*********
     Button Save Organization
     ***********/

    $(document).on("click", "button.const-radio-address", function () {
        var _radioInputVal = $('#const-addrss-radio-val');
        _radioInputVal.val($(this).attr('data-radio_val'));
        //alert($(this).attr('data-radio_val'));
    })

    $(document).on("click", "button.org-radio-phn", function () {
        var _radioInputVal = $('#org-Phone-radio-val');
        _radioInputVal.val($(this).attr('data-radio_val'));
        alert($(this).attr('data-radio_val'));
    })

    $(document).on("click", "button.org-radio-email", function () {
        var _radioInputVal = $('#org-Email-radio-val');
        _radioInputVal.val($(this).attr('data-radio_val'));
        alert($(this).attr('data-radio_val'));
    })

    $(document).on("click", "button.org-radio-online-presence", function () {
        var _radioInputVal = $('#org-Online-Presence-radio-val');
        _radioInputVal.val($(this).attr('data-radio_val'));
        alert($(this).attr('data-radio_val'));
    })

    $(document).on("click", "button#_BtnSvOrganization", function () {
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
                url: _baseUrl + "/constituent/post-add-save-organization",
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