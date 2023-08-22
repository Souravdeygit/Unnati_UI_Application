// mmenu starts here
//document.addEventListener(
//    "DOMContentLoaded", () => {
//        new Mmenu( "#m-menus", {
//           "offCanvas": {
//              "position": "right"
//           },
//           "theme": "white",
//           "navbars": [
//              {
//                 "position": "top",
//                 "content": [
//                    "searchfield"
//                 ]
//              }
//           ]
//        });
//    }
//);
// collapse js starts here
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


// demo js
$(document).on("change",".rad-input",function(){
    var _this=$(this);
     var _val=_this.filter(":checked").val();
     if(_val=="All"){
         $(".div_1,.div_2,.div_3,.div_4,.div_5,.div_6").show();
     }
     else if(_val=="FY"){
         $(".div_1,.div_6").show();
         $(".div_2,.div_3,.div_4,.div_5").hide();
     }
 
     else if(_val=="program"){
         $(".div_1,.div_4,.div_6").show();
         $(".div_2,.div_3,.div_5").hide();
     }
 
     else if(_val=="project"){
         $(".div_1,.div_4,.div_5,.div_6").show();
         $(".div_2,.div_3").hide();
     }
 
     else if(_val=="partner"){
         $(".div_1,.div_3,.div_6").show();
         $(".div_2,.div_4,.div_5").hide();
     }
 
     else{
 
     }
 
 
 });
 
 $(document).on("click","#srch-btn",function(){
     var _val=$(".rad-input").filter(":checked").val();
     if(_val=="All"){
         
         $(".toggle-panel").show();
         $(".all-wrap").show();
         $(".filter-header-panel").addClass("active");
         $(".tab-panel").show();
         $(".all-wrap-header-panel").hide();
     }
 
     else if(_val=="FY"){     
         $(".toggle-panel").show();
         $(".all-wrap").show();       
         $(".filter-header-panel").removeClass("active");
         $(".tab-panel").hide();
         $(".all-wrap-header-panel").show();
         $(".fy-wrap").addClass("fy-active");
         $(".program-wrap").removeClass("program-wrap-active");
         $(".project-wrap").removeClass("project-wrap-active");
         $(".partner-wrap").removeClass("partner-wrap-activate");
         $(".fy-body-wrap").hide();
         $(".program-body-wrap").show();
         $(".partner-body-wrap").show();
         $(".project-body-wrap").show();
     }
 
     else if(_val=="program"){
         $(".toggle-panel").show();
         $(".all-wrap").show();       
         $(".filter-header-panel").removeClass("active");
         $(".tab-panel").hide();
         $(".all-wrap-header-panel").show();
         $(".fy-wrap").addClass("fy-active");
         $(".program-wrap").addClass("program-wrap-active");
         $(".project-wrap").removeClass("project-wrap-active");
         $(".partner-wrap").removeClass("partner-wrap-activate");
         $(".fy-body-wrap").hide();
         $(".program-body-wrap").hide();
         $(".partner-body-wrap").show();
         $(".project-body-wrap").show();
     }
 
     else if(_val=="project"){
         $(".toggle-panel").show();
         $(".all-wrap").show();       
         $(".filter-header-panel").removeClass("active");
         $(".tab-panel").hide();
         $(".all-wrap-header-panel").show();
         $(".fy-wrap").addClass("fy-active");
         $(".program-wrap").addClass("program-wrap-active");
         $(".project-wrap").addClass("project-wrap-active");
         $(".partner-wrap").removeClass("partner-wrap-activate");
         $(".fy-body-wrap").hide();
         $(".program-body-wrap").hide();
         $(".partner-body-wrap").show();
         $(".project-body-wrap").hide();
     }
 
     else if(_val=="partner"){
         $(".toggle-panel").show();
         $(".all-wrap").show();       
         $(".filter-header-panel").removeClass("active");
         $(".tab-panel").hide();
         $(".fy-body-wrap").addClass("disable");
         $(".all-wrap-header-panel").show();
         $(".fy-wrap").addClass("fy-active");
         $(".program-wrap").removeClass("program-wrap-active");
         $(".project-wrap").removeClass("project-wrap-active");
         $(".partner-wrap").addClass("partner-wrap-activate");
         $(".fy-body-wrap").hide();
         $(".program-body-wrap").show();
         $(".partner-body-wrap").hide();
         $(".project-body-wrap").show();
     }
 
     else{
 
     }
     
 });
//  demo js ends here

// readmore js starts here
const parentContainer = document.querySelector('.read-more-container');

//parentContainer.addEventListener('click', event=>{
//    const current = event.target;
//    const isReadmoreBtn = current.className.includes('read-more-btn');
//    if(!isReadMoreBtn) return;
//    const currentText = event.target.parentNode.querySelector('.read-more-text');
//    currentText.classList.toggle('read-more-text--show');
//    current.textContent = current.textContent.includes('Read More') ?
//    "Read Less..." : "Read More..";
//})
// read more js ends here

// table expandable js starts here
// colResizable 1.6 - a jQuery plugin by Alvaro Prieto Lauroba http://www.bacubacu.com/colresizable/

!function(t){var e,i=t(document),r=t("head"),o=null,s={},d=0,n="id",a="px",l="JColResizer",c="JCLRFlex",f=parseInt,h=Math,p=navigator.userAgent.indexOf("Trident/4.0")>0;try{e=sessionStorage}catch(g){}r.append("<style type='text/css'>  .JColResizer{table-layout:fixed;} .JColResizer > tbody > tr > td, .JColResizer > tbody > tr > th{overflow:hidden;padding-left:0!important; padding-right:0!important;}  .JCLRgrips{ height:0px; position:relative;} .JCLRgrip{margin-left:-5px; position:absolute; z-index:5; } .JCLRgrip .JColResizer{position:absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;cursor: e-resize;top:0px} .JCLRLastGrip{position:absolute; width:1px; } .JCLRgripDrag{ border-left:1px dotted black;	} .JCLRFlex{width:auto!important;} .JCLRgrip.JCLRdisabledGrip .JColResizer{cursor:default; display:none;}</style>");var u=function(e,i){var o=t(e);if(o.opt=i,o.mode=i.resizeMode,o.dc=o.opt.disabledColumns,o.opt.disable)return w(o);var a=o.id=o.attr(n)||l+d++;o.p=o.opt.postbackSafe,!o.is("table")||s[a]&&!o.opt.partialRefresh||("e-resize"!==o.opt.hoverCursor&&r.append("<style type='text/css'>.JCLRgrip .JColResizer:hover{cursor:"+o.opt.hoverCursor+"!important}</style>"),o.addClass(l).attr(n,a).before('<div class="JCLRgrips"/>'),o.g=[],o.c=[],o.w=o.width(),o.gc=o.prev(),o.f=o.opt.fixed,i.marginLeft&&o.gc.css("marginLeft",i.marginLeft),i.marginRight&&o.gc.css("marginRight",i.marginRight),o.cs=f(p?e.cellSpacing||e.currentStyle.borderSpacing:o.css("border-spacing"))||2,o.b=f(p?e.border||e.currentStyle.borderLeftWidth:o.css("border-left-width"))||1,s[a]=o,v(o))},w=function(t){var e=t.attr(n),t=s[e];t&&t.is("table")&&(t.removeClass(l+" "+c).gc.remove(),delete s[e])},v=function(i){var r=i.find(">thead>tr:first>th,>thead>tr:first>td");r.length||(r=i.find(">tbody>tr:first>th,>tr:first>th,>tbody>tr:first>td, >tr:first>td")),r=r.filter(":visible"),i.cg=i.find("col"),i.ln=r.length,i.p&&e&&e[i.id]&&m(i,r),r.each(function(e){var r=t(this),o=-1!=i.dc.indexOf(e),s=t(i.gc.append('<div class="JCLRgrip"></div>')[0].lastChild);s.append(o?"":i.opt.gripInnerHtml).append('<div class="'+l+'"></div>'),e==i.ln-1&&(s.addClass("JCLRLastGrip"),i.f&&s.html("")),s.bind("touchstart mousedown",J),o?s.addClass("JCLRdisabledGrip"):s.removeClass("JCLRdisabledGrip").bind("touchstart mousedown",J),s.t=i,s.i=e,s.c=r,r.w=r.width(),i.g.push(s),i.c.push(r),r.width(r.w).removeAttr("width"),s.data(l,{i:e,t:i.attr(n),last:e==i.ln-1})}),i.cg.removeAttr("width"),i.find("td, th").not(r).not("table th, table td").each(function(){t(this).removeAttr("width")}),i.f||i.removeAttr("width").addClass(c),C(i)},m=function(t,i){var r,o,s=0,d=0,n=[];if(i){if(t.cg.removeAttr("width"),t.opt.flush)return void(e[t.id]="");for(r=e[t.id].split(";"),o=r[t.ln+1],!t.f&&o&&(t.width(o*=1),t.opt.overflow&&(t.css("min-width",o+a),t.w=o));d<t.ln;d++)n.push(100*r[d]/r[t.ln]+"%"),i.eq(d).css("width",n[d]);for(d=0;d<t.ln;d++)t.cg.eq(d).css("width",n[d])}else{for(e[t.id]="";d<t.c.length;d++)r=t.c[d].width(),e[t.id]+=r+";",s+=r;e[t.id]+=s,t.f||(e[t.id]+=";"+t.width())}},C=function(t){t.gc.width(t.w);for(var e=0;e<t.ln;e++){var i=t.c[e];t.g[e].css({left:i.offset().left-t.offset().left+i.outerWidth(!1)+t.cs/2+a,height:t.opt.headerOnly?t.c[0].outerHeight(!1):t.outerHeight(!1)})}},b=function(t,e,i){var r=o.x-o.l,s=t.c[e],d=t.c[e+1],n=s.w+r,l=d.w-r;s.width(n+a),t.cg.eq(e).width(n+a),t.f?(d.width(l+a),t.cg.eq(e+1).width(l+a)):t.opt.overflow&&t.css("min-width",t.w+r),i&&(s.w=n,d.w=t.f?l:d.w)},R=function(e){var i=t.map(e.c,function(t){return t.width()});e.width(e.w=e.width()).removeClass(c),t.each(e.c,function(t,e){e.width(i[t]).w=i[t]}),e.addClass(c)},x=function(t){if(o){var e=o.t,i=t.originalEvent.touches,r=i?i[0].pageX:t.pageX,s=r-o.ox+o.l,d=e.opt.minWidth,n=o.i,l=1.5*e.cs+d+e.b,c=n==e.ln-1,f=n?e.g[n-1].position().left+e.cs+d:l,p=e.f?n==e.ln-1?e.w-l:e.g[n+1].position().left-e.cs-d:1/0;if(s=h.max(f,h.min(p,s)),o.x=s,o.css("left",s+a),c){var g=e.c[o.i];o.w=g.w+s-o.l}if(e.opt.liveDrag){c?(g.width(o.w),!e.f&&e.opt.overflow?e.css("min-width",e.w+s-o.l):e.w=e.width()):b(e,n),C(e);var u=e.opt.onDrag;u&&(t.currentTarget=e[0],u(t))}return!1}},y=function(r){if(i.unbind("touchend."+l+" mouseup."+l).unbind("touchmove."+l+" mousemove."+l),t("head :last-child").remove(),o){if(o.removeClass(o.t.opt.draggingClass),o.x-o.l!=0){var s=o.t,d=s.opt.onResize,n=o.i,a=n==s.ln-1,c=s.g[n].c;a?(c.width(o.w),c.w=o.w):b(s,n,!0),s.f||R(s),C(s),d&&(r.currentTarget=s[0],d(r)),s.p&&e&&m(s)}o=null}},J=function(e){var d=t(this).data(l),n=s[d.t],a=n.g[d.i],c=e.originalEvent.touches;if(a.ox=c?c[0].pageX:e.pageX,a.l=a.position().left,a.x=a.l,i.bind("touchmove."+l+" mousemove."+l,x).bind("touchend."+l+" mouseup."+l,y),r.append("<style type='text/css'>*{cursor:"+n.opt.dragCursor+"!important}</style>"),a.addClass(n.opt.draggingClass),o=a,n.c[d.i].l)for(var f,h=0;h<n.ln;h++)f=n.c[h],f.l=!1,f.w=f.width();return!1},L=function(){for(var t in s)if(s.hasOwnProperty(t)){t=s[t];var i,r=0;if(t.removeClass(l),t.f){for(t.w=t.width(),i=0;i<t.ln;i++)r+=t.c[i].w;for(i=0;i<t.ln;i++)t.c[i].css("width",h.round(1e3*t.c[i].w/r)/10+"%").l=!0}else R(t),"flex"==t.mode&&t.p&&e&&m(t);C(t.addClass(l))}};t(window).bind("resize."+l,L),t.fn.extend({colResizable:function(e){var i={resizeMode:"fit",draggingClass:"JCLRgripDrag",gripInnerHtml:"",liveDrag:!1,minWidth:15,headerOnly:!1,hoverCursor:"e-resize",dragCursor:"e-resize",postbackSafe:!1,flush:!1,marginLeft:null,marginRight:null,disable:!1,partialRefresh:!1,disabledColumns:[],onDrag:null,onResize:null},e=t.extend(i,e);switch(e.fixed=!0,e.overflow=!1,e.resizeMode){case"flex":e.fixed=!1;break;case"overflow":e.fixed=!1,e.overflow=!0}return this.each(function(){u(this,e)})}})}(jQuery);






$(function(){
  
  var onSampleResized = function(e){  
    var table = $(e.currentTarget); //reference to the resized table
  };  

 $("table").colResizable({
     // fixed:false,
     disabledColumns: [0],
     headerOnly: true,
    liveDrag:true,
    // gripInnerHtml:"<div class='grip'></div>", 
     resizeMode:'overflow',
    draggingClass:"dragging", 
    onResize:onSampleResized
  });    
  
});
// table expandable js ends here


// toggle js and left modal js starts here
$(document).ready(function(){
    $("#left_modal_sm").modal('show');
    $("#dark-mode").click(function(){
          $("body").addClass("darkmodeactivated");
          $("#dark-mode").css("display","none");
          $("#light-mode").css("display","block");
          $(".light-mood-logo").css("display","none");
          $(".dark-mood-logo").css("display","block");
          
        })
        
        $("#light-mode").click(function(){
            $("body").removeClass("darkmodeactivated");
            $("#dark-mode").css("display","block");
          $("#light-mode").css("display","none");
          $(".light-mood-logo").css("display","block");
          $(".dark-mood-logo").css("display","none");
        })
        
        $("#collapse_btn").click(function(){
            $(".left-card-wrap").toggleClass("shrink");
            $(".right-card-wrap").toggleClass("expand");
        $(".ver-tab-txt").toggleClass("ver-tab-txt-d-none");
        $(".fa-angle-left").toggleClass("rotate");
    })
  
      $("#srch_btn").click(function(){
        $(".fixed-search-panel").toggleClass("active-search-panel");
        
        $("#left_modal_sm").modal('show');
    })
    
    $(".add_btn").click(function(){      
        $("#right_modal_xl").modal('show');
    })
  
    $("#srch-btn").click(function(){
        $(".fixed-search-panel").removeClass("active-search-panel");
        $(".nav-transparent-bg").removeClass("nav-transparent-bg-active");
        $(".fixed-search-panel").removeClass("animate__animated");
        $("#srch_btn").css("display","block");
        $(".show-hide-panel").addClass("panel-active");
        $("#left_modal_sm").modal('hide');
    })
    $("#create-btn").click(function(){
        $(".fixed-search-panel").removeClass("active-search-panel");
        $(".nav-transparent-bg").removeClass("nav-transparent-bg-active");
        $(".fixed-search-panel").removeClass("animate__animated");
        $("#srch_btn").css("display","block");
        $(".show-hide-panel").addClass("panel-active");
        $("#left_modal_sm").modal('hide');
    })
    $("#create-btn-2").click(function(){
        $(".fixed-search-panel").removeClass("active-search-panel");
        $(".nav-transparent-bg").removeClass("nav-transparent-bg-active");
        $(".fixed-search-panel").removeClass("animate__animated");
        $("#srch_btn").css("display","block");
        $(".show-hide-panel").addClass("panel-active");
        $("#left_modal_sm").modal('hide');
    })
    
    $(".show-single-panel-btn").click(function(){
        $(".tab-panel").slideToggle("slow");
        $(".show-single-panel-btn").toggleClass("rotate");
    })
})


function profileFunction() {
    document.getElementById("profile-dropdown").classList.toggle("show");
}

function notificationFunction() {
    document.getElementById("notification-dropdown").classList.toggle("noti-show");
}



// window.onclick = function(event) {
    //   console.log(event.currentTarget);
    //   if (!event.target.matches('.dropbtn')) {
        //     var dropdowns = document.getElementsByClassName("dropdown-content");
        //     var i;
        //     for (i = 0; i < dropdowns.length; i++) {
            //       var openDropdown = dropdowns[i];
            //       if (openDropdown.classList.contains('show')) {
                //         openDropdown.classList.remove('show');
                //       }
                //     }
                //   }
                // }
                // toggle js and left modal js ends here