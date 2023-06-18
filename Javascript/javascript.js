// For event filter

$(document).ready(function(){
    $("#all").click(function(){
        $("#spices-img").show();
        $("#spices-dishes-img").show();
         $("#spices-noodels-img").show();
         $(".ghowais").show();
         $("#bestseller").show();
    })

    $("#spices").click(function(){
        $("#spices-img").show();
        $("#spices-dishes-img").hide();
           $("#spicesnoodels-img").hide();
           $(".ghowais").hide();
    })

    $("#spicesdishes").click(function(){
          $("#spices-img").hide();
            $("#spices-dishes-img").show();
             $("#spicesnoodels-img").hide();
             $(".ghowais").hide();
    })

    $("#spicesnoodles").click(function(){
        $("#spices-img").hide();
        $("#spices-dishes-img").hide();
        $("#spicesnoodels-img").show();
         $("#spices-dishes-img").hide();
         $(".ghowais").hide();
    })
    $("#galleryowais").click(function(){
      $("#spices-img").hide();
        $("#spices-dishes-img").hide();
        $("#spicesnoodels-img").hide();
           $("#spices-dishes-img").hide();
        $(".ghowais").show();
  })
});


// For scroll-top 

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#scroll-up").fadeIn();
      } else {
        $("#scroll-up").fadeOut();
      }
    });
  
    $("#scroll-up").click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 100);
        return false;
    });
  
  });


  // For owl-carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
