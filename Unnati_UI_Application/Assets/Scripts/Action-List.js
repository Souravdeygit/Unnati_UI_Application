var _baseUrl = window.origin;
var _loader = $(".loader");
var _arrOBJ = [], _OBJ = {};

$(document).ready(function () {

   
    $(document).ready(function () {
        $(".aliasadd").click(function (e) {
            e.preventDefault();
            $("#add_item").prepend(
                ' <div class="row"> <div class="col-md-4 col-6 right-div-cntrl"> <label for="" class="frm-label">Company Name</label> <input type="text" class="form-control-2" id="" placeholder=""> </div> <div class="col-md-4 col-6 right-div-cntrl"> <label for="" class="frm-label">Position</label> <input type="text" class="form-control-2" id="" placeholder=""> </div><div class="col-md-12"><div class="row"><div class="col-md-3 col-6 mt-2 mb-2"><button type="button" class="custom-btn custom-primary-btn"><i class="fa fa-star" aria-hidden="true"></i></button><label class="frm-label-checkbx">Primary</label></div><div class="col-md-3 col-6 mt-2 mb-2"><button type="button" class="custom-btn custom-warning-btn-2"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></button><label class="frm-label-checkbx">Inactive</label></div></div></div><div class="col-md-1 col-12 right-div-cntrl"> <a href="" class="custom-btn custom-danger-btn remove-itm-btn" id="aliasadd"><i class="fa fa-trash" aria-hidden="true"></i></a> </div>   </div>'
            );
            $("#add_item_1").prepend(
                '<div class="row"> <div class="col-md-5 col-5 right-div-cntrl"> <label for="" class="frm-label">Alias <span style="color: red;">*</span></label> <input type="text" class="form-control-2" id="" placeholder="Enter Alias"> </div>  <div class="col-md-5 col-5 right-div-cntrl"> <label for="" class="frm-label">Type <span style="color: red;">*</span></label> <select class="form-control-2"> <option>Select</option> <option>Option1</option> <option>Option2</option> </select> </div> <div class="col-md-2 col-2 right-div-cntrl"><button type="submit" class="custom-btn custom-danger-btn remove-itm-btn delete-btn" id=""><i class="fa fa-trash" aria-hidden="true"></i></button></div></div>'
            );
            $("#add_item_2").prepend(
                '<div class="row"> <div class="col-md-4 col-6 right-div-cntrl"> <label for="" class="frm-label">Institution <span style="color: red;">*</span></label> <select class="form-control-2"> <option>Select</option> <option>Indian Institute Of Technology Bombay</option> </select> </div> <div class="col-md-4 col-6 right-div-cntrl"> <label for="" class="frm-label">Batch <span style="color: red;">*</span></label> <select class="form-control-2"> <option>Select</option><option>1985</option><option>1986</option><option>1987</option><option>1988</option></select> </div> <div class="col-md-4 col-6 right-div-cntrl"><label for="" class="frm-label">Dates Attended <span style="color: red;">*</span></label><select class="form-control-2"> <option>Select</option><option>1985</option><option>1986</option><option>1987</option><option>1988</option></select></div> <div class="col-md-4 col-6 right-div-cntrl"><label for="" class="frm-label">Major <span style="color: red;">*</span></label><select class="form-control-2"> <option>Select</option><option>Mechanical Engineering</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div> <div class="col-md-4 col-6 right-div-cntrl"><label for="" class="frm-label">Degree <span style="color: red;">*</span></label><select class="form-control-2"><option>Select</option><option>Option 3</option><option>Option 4</option></select></div> <div class="col-md-4 col-6 right-div-cntrl"><label for="" class="frm-label">Fraternity/Sorority <span style="color: red;">*</span></label><select class="form-control-2"><option>Select</option><option>Hostel 1</option><option>Hostel 2</option><option>Hostel 3</option><option>Hostel 4</option></select></div> <div class="col-md-12 mt-2 mb-3"><Button class="custom-btn custom-danger-btn remove-itm-btn"><i class="fa fa-trash" aria-hidden="true"></i></Button></div> </div>'
            );
            $("#add_item_3").prepend(
                ' <div class="row mb-3"><div class="col-md-6 col-6 right-div-cntrl"><label for="" class="frm-label">Email Type</label><select class="form-control"><option>IIT B Email 1</option><option>IIT B Email 2</option><option>IIT B Email 3</option><option>IIT B Email 4</option><option>IIT B Email 5</option></select></div><div class="col-md-6 col-6 right-div-cntrl"><label for="" class="frm-label">Email Address</label><input type="text" class="form-control" id="" placeholder="Enter Email Address"></div><div class="col-md-12"><div class="row"><div class="col-md-5 col-6 mt-2 mb-2"><button type="button" class="custom-btn custom-primary-btn"><i class="fa fa-star" aria-hidden="true"></i></button><label class="frm-label-checkbx">Primary</label></div><div class="col-md-5 col-6 mt-2 mb-2"><button type="button" class="custom-btn custom-warning-btn-2"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></button><label class="frm-label-checkbx">Inactive</label></div></div></div><div class="col-md-2 col-3"> <button type="button" class="custom-btn custom-success-btn">Save</button></div><div class="col-md-1 col-6 "> <a href="" class="custom-btn custom-danger-btn remove-itm-btn" id="aliasadd"><i class="fa fa-trash" aria-hidden="true"></i></a> </div>  </div>'
            );
        });
        $(document).on("click", ".remove-itm-btn", function (e) {
            e.preventDefault();
            let row_item = $(this).parent().parent();
            $(row_item).remove();
        });
    });


    let floatbtn = document.querySelector(".floatbtn");
    let menu = document.querySelector(".menu");

    //floatbtn.onclick = function () {
    //    menu.classList.toggle("active");
    //};

    let changeicon = function (icon) {
        icon.classList.toggle("fa-minus-circle");
    };

/*<!--tabs -->*/

  $(".nav-tabs")
      .on("click", "a", function (e) {
          e.preventDefault();
          if (!$(this).hasClass("add-contact")) {
              $(this).tab("show");
          }
      })
      .on("click", "span", function () {
          var anchor = $(this).siblings("a");
          $(anchor.attr("href")).remove();
          $(this).parent().remove();
          $(".nav-tabs li").children("a").first().click();
      });

  $(".add-contact").click(function (e) {
      e.preventDefault();
      var id = $(".nav-tabs").children().length; //think about it ;)
      var tabId = "contact_" + id;
      $(this)
          .closest("li")
          .before('<li><a href="#contact_' + id + '">New Tab</a> <span class="custom-danger-btn"> <i class="fa fa-times" aria-hidden="true"></i> </span></li>');
      $(".tab-content").append(
          '<div class="tab-pane" id="' +
              tabId +
              '"> <div class="list-pannel"><div class="box-cont"><button type="button" class="box-1 box"><span class="d-block"><img src="../images/copy-writing.png"></span><h5>Build A New List</h5><p>Start from scratch and fine-tune with filters</p> </button><button type="button" class="box-2 box" data-bs-toggle="modal" data-bs-target="#open-saved-list-modal"><span class="d-block"><img src="../images/floppy-disk.png"></span><h5>Open A Saved List</h5><p>Search for and open saved lists</p></button><button type="button" class="box-3 box" data-bs-toggle="modal" data-bs-target="#static-query-modal"><span class="d-block"><img src="../images/list.png"></span><h5>Start with a static query</h5><p>Use a query or query list in the database view and update with filters</p></button></div></div></div>'
      );
      $(".nav-tabs li:nth-child(" + id + ") a").click();
  });

    /*let floatbtn4 = document.querySelector(".search-btn");*/
    let menu4 = document.querySelector(".trigger");

    //floatbtn4.onclick = function () {
    //    menu4.classList.toggle("active");
    //};

    let btn = document.querySelector(".kebab-btn");

    let kebab = document.querySelector(".kebab-drop-sec");

    //btn.onclick = function () {
    //    kebab.classList.toggle("active");
    //};

});



/*************All Requre functionality Starting form Here*************************/

//First Text Will Upper
$("input[type='text']").on('keyup paste', function () {
    this.value = $.fn_FIRST_LETTER_CAPITAL($(this).val());
})

//Post Save "Columns" Details
$(document).on("click", "#btnColumnSaveChanges", function (e) {

    var _this = $(e.currentTarget),
        _formObj = $(_this.data("form_target")),
        _checkbx = _formObj.find('input[type="checkbox"]'),
        _checkboxVal = "";

    _checkbx.map(function (indx,_val) {
        var _$this = $(_val);
        if (_$this.is(":checked")) {
            _checkboxVal = _$this.val() + "," + _checkboxVal;
        }
    })
    _checkboxVal = _checkboxVal.slice(0, -1);
    //console.log(_checkboxVal);
    if (typeof _checkboxVal == "undefined" && _checkboxVal == "")
        return;

    var _arr = [], _obj = {}, _jsondata = "";

    _obj["ACTION_COLUMNS_CHECKBOX"] = _checkboxVal;
    _obj["CREATED_BY"] = 1;

    _arr.push(_obj);
    _jsondata = JSON.stringify(_arr);


    $.ajax({
        type: "POST",
        url: _baseUrl + "/list/post-add-save-action-columns",
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

//Post Save "SAVE" Details
$(document).on("click", "#_BtnlistActinSave", function (e) {

    var _this = $(e.currentTarget);
    //var _formObj = $(_this.data("form_target"));

    var _name = $("input#_txtSvname").val(),
        _descrip = $("input#_txtSvname").val(),
        _radioVGal = $("input[name='save-action-radio']:checked").val();

    if (_name == "") { }
    else {
        _arrOBJ = [];
        _OBJ["NAME"] = _name;
        _OBJ["DESCRIPTION"] = _descrip;
        _OBJ["RADIO_VAL"] = _radioVGal;
        _OBJ["CREATED_BY"] = 1;


        _arrOBJ.push(_OBJ);
        var _jsondata = JSON.stringify(_arrOBJ);


        $.ajax({
            type: "POST",
            url: _baseUrl + "/list/post-add-save-save_list",
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



$(document).on("click", "#_btnOnlyShowdselected,#_btnClearAllselected", function (e) {
    var _this = $(e.currentTarget);
    var _formObj = $("#_formActionColumn"),
        _checkbox = _formObj.find("input[type='checkbox'].check-bx-2");
    var _status = _this.data("status");

    if (e.type == "click") {
        _checkbox.prop("checked", false);

        if (_status)
        _checkbox.prop("checked", true);
    }




    

})

$(document).on("change", "input#_chckbxShowOnlySelected", function (e) {
    var _this = $(e.currentTarget);
    var _formObj = $("#_formActionColumn"),
        _checkbox = _formObj.find("input[type='checkbox'].check-bx-2");
    var _lists = _formObj.find("ul.col-ul").children("li.cntnt-sec");

   // console.log(_lists);
    

    if (e.type == "change") {
        if (_this.is(":checked")) {
            _checkbox.map(function (indx, _val) {
                var _$this = $(_val);
                if (!_$this.is(":checked")) {
                    //_checkboxVal = _$this.val() + "," + _checkboxVal;
                    //_$this.addClass('_hidebox');
                    _$this.parentsUntil('li.cntnt-sec').addClass('_hidebox');
                }
                else {
                    if (_$this.parentsUntil('li.cntnt-sec').hasClass('_hidebox'))
                        _$this.parentsUntil('li.cntnt-sec').removeClass('_hidebox');

                   // _lists.removeClass('_hidebox');

                }

            })
        }
        else {
            _lists.map((i, v) => {
                var _$this = $(v);
                         if (_$this.hasClass('_hidebox'))
                     _$this.removeClass('_hidebox');

            })           

        }

    }





})



