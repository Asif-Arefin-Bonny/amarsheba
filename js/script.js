$(document).ready(function(){


	$('.home-service-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
			autoplay:true
        },
        600:{
            items:3,
            nav:false,
			autoplay:true
        },
        1000:{
            items:4,
            nav:true,
			autoplay:true
        }
    }
});







});