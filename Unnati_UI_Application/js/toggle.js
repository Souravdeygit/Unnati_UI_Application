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




