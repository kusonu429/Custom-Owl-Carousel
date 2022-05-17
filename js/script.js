// icon-bars menu 
$(function () {

    
    $(".humburger").click(function () {

      $("ul").toggleClass("active");

    });
    
  });

// icon-bars menu 




// owl-owlCarousel stats here  //

$('.owl-carousel-one').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText:["<span class='fa fa-chevron-left'></span>" , "<span class='fa fa-chevron-right'></span>"], 
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// owl-owlCarousel Ends here  //
