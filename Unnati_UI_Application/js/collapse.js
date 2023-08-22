$(window).on('load', function () {
    $('.menu li').click(function() {
        $(this).addClass('active');
    });
});

$(document).on("click", "#search_", function () {
    var text = $("#ddl_interview option:selected").text();
    if(text==="Face To Face"){
        $("#FaceToFace_div").show();
        $("#Telephonic_div").hide();
    }
    else if(text==="Telephonic"){
        $("#Telephonic_div").show();
        $("#FaceToFace_div").hide();
    }
});

$(document).on("click", "#scrhBtn", function () {
    var text = $("#sd_interview option:selected").text();
    if(text==="Aerospace Eggn."){
        $("#initerviw_table").show();
    }
});
/////// Admin Application table /////
$(document).on("click", "#searchBtn_NewApp", function () {
    $('#newApplication_table').fadeIn();
});
$(document).on("click", "#shortlistBtn", function () {
    $('#shortlistedApp_table').fadeIn();
});
$(document).on("click", "#rejectedBtn", function () {
    $('#rejecteddApp_table').fadeIn();
});
$(document).on("click", "#interviewBtn", function () {
    $('#interviewSchedule_table').fadeIn();
});
$(document).on("click", "#approvedBtn", function () {
    $('#approvedTable').fadeIn();
});
$(document).on("click", "#rejectIntBtn", function () {
    $('#rjectedInter_table').fadeIn();
});
$(document).on("click", "#closeAppBtn", function () {
    $('#closeApplication_table').fadeIn();
});
/////// Admin Application table end /////
$(function () {
    $('#applicationNum').click(function () {
        $('#expandTable').toggle();
    });
    $('#expandTable').css('display', 'none');

    $('#InterviewScheduleBtn').on('click', function () {
        $('#interviewScheduleTable').show();
    });
    $('#IncomleteInterviewBtn').on('click', function () {
        $('#IncompleteInterviewTable').show();
    });
});

//// Application /////
$(document).ready(function() {
    $('#Application_div').on('click', function () {
        $('#showNewApplicationForm').show('slow');
        $('#divNewApp').hide();
        $('#stu_form').hide();
    })
});

jQuery(document).ready(function() {
    $('.table_hide').css("display", "none");
});


///// userlog in /////

//$(function () {
//    $().on('change', function () {
//        var url = $().val();
//        if (url) {
//            window.location = url;
//        }
//        return false;
//    });
//});

$(function () {
    $('#userLogIn_IIT').on('change', function () {
        window.location = $(':selected',this).attr('href');
    });
});
   
//$(function () {
//    $('a#logout').on('click', function () {
//        window.location.href = "../View/Userlogin/HtmlPage.html";
//    });
//});

/////////////////////
$(document).on('click', '#showBtn', function () {
    $('#stud_details').toggle(400);
});
$(document).on('click', '#showBtn_1', function () {
    $('#guar_info').toggle(400);
});
$(document).on('click', '#showBtn_2', function () {
    $('#family_income').toggle(400);
});
$(document).on('click', '#showBtn_3', function () {
    $('#assets_income').toggle(400);
});
$(document).on('click', '#showBtn_4', function () {
    $('#course_details').toggle(400);
});
$(document).on('click', '#showBtn_5', function () {
    $('#exitLoan_details').toggle(400);
});
$(document).on('click', '#showBtn_6', function () {
    $('#document_attch').toggle(400);
});
$(document).on('click', '#showBtn_7', function () {
    $('#academic_pre').toggle(400);
});
$(document).on('click', '#showBtn_8', function () {
    $('#pre_qualify').toggle(400);
});
$(document).on('click', '#showBtn_9', function () {
    $('#bank_details').toggle(400);
});
$(document).on('click', '#showBtn_10', function () {
    $('#pre_iitbEdu').toggle(400);
});
//// accordion //////
$(document).ready(function () {
    $('.card-header').click(function () {
        if ($(this).next('.card-body').hasClass('active')) {
            $(this).next('.card-body').removeClass('active').slideUp()
            $(this).children('.toggle_icon').removeClass('fa-minus').addClass('fa-plus')
        }
        else {
            $('.card .card-body').removeClass('active').slideUp()
            $('.card .card-header .toggle_icon').removeClass('fa-minus').addClass('fa-plus');
            $(this).next('.card-body').addClass('active').slideDown()
            $(this).children('.toggle_icon').removeClass('fa-plus').addClass('fa-minus')
            //$('#roteArrow').css('transform', 'rotate(180deg)');
        }
        //$('.fa-chevron-up').removeClass('current');
        //$(this).next('#roteArrow').addClass('current');
    });    
});
$(document).on('click', '#expandAll', function () {
    $('.toggle_icon').removeClass('fa-plus').addClass('fa-minus');
    $('.openAll').slideDown();
    $('.hideAll').show();
    $('.showAll').hide();
});
$(document).on('click', '#collapseAll', function () {
    $('.toggle_icon').removeClass('fa-minus').addClass('fa-plus');
    $('.openAll').slideUp();
    $('.showAll').show();
    $('.hideAll').hide();
});

$(document).ready(function () {
    $('#collapseAll').css('display', 'none');
});

$(document).on('change',function() {
    var text = $("#interview_result option:selected").text();
    if (text === "Rejected") {
        $("#rejected_div").hide();
    } 
    else if (text === "Approved") {
        $("#rejected_div").show();
    }
});
////Records interview/////
jQuery(document).ready(function () {
    jQuery('#subTable').css('display', 'none');
});
$(document).on('click','#InterResult', function () {
    $('#subTable').toggle(400);
});
/// Interview Result ///
$(document).on('click', '#resultView', function () {
    $('#resultView').css('display', 'none');
    $('#subTableCompletedInterview').show();
    $('#resultHide').show();
    $('#subTableCompletedInterview_2').hide()
    $('#resultHide_2').hide();
    $('#resultView_2').show();
});
$(document).on('click', '#resultHide', function () {
    $('#resultHide').css('display', 'none');
    $('#subTableCompletedInterview').hide();
    $('#resultView').show();
});
///////
$(document).on('click', '#resultView_2', function () {
    $('#resultView_2').css('display', 'none');
    $('#subTableCompletedInterview_2').show();
    $('#subTableCompletedInterview').hide();
    $('#resultHide_2').show();
    $('#resultHide').hide();
    $('#resultView').show();
});
$(document).on('click', '#resultHide_2', function () {
    $('#resultHide_2').css('display', 'none');
    $('#subTableCompletedInterview_2').hide();
    $('#resultView_2').show();
});

$(function () {
    $('#resultHide').css('display', 'none');
    $('#resultHide_2').css('display', 'none');
})

$(document).ready(function () {
    $("#detail_collpase").click(function () {
        $("#collpase_table_two").toggle("slow");
    });

    $("#next_btn").click(function () {
        $(".table-design2").css("display","block");
    });
    $("#config_btn").click(function () {
        $("#collpase_table").toggle("slow");
    });
    $("#show-colp-tab").click(function () {
        $(".showing-tab").toggleClass("active");
        $("#show-colp-tab").toggleClass("plus-collapse");
    });
    $("#show-colp-tab-two").click(function () {
        $(".showing-tab-two").toggleClass("active");
        $("#show-colp-tab-two").toggleClass("plus-two-collapse");
    });
})

