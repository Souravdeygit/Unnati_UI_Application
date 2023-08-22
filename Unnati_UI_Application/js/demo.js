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