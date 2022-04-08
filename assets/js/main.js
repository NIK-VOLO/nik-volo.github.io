new WOW().init();

jQuery(document).ready(function(){

	/*Sticky Header*/

	jQuery(document).on("scroll", function() {

	  if (jQuery(document).scrollTop() > 0) {

		jQuery("body").addClass("header-fixed");

	  } else {

		jQuery("body").removeClass("header-fixed");

	  }

	});



	jQuery('.video-popup').magnificPopup({

		disableOn: 200,

		type: 'iframe',

		mainClass: 'mfp-fade',

		removalDelay: 160,

		preloader: false,

		fixedContentPos: false

	});



	jQuery('.howitwork-slider').slick({

	  dots: true,

	  arrows: true,

	  infinite: true,

	  speed: 300,

	  slidesToShow: 1,

	  slidesToScroll: 1,

	  autoplay: false,

	  fade: true,

  	  cssEase: 'linear',

	});



	jQuery('.testimonials-slider').slick({

	  dots: true,

	  arrows: true,

	  infinite: true,

	  slidesToShow: 3,

	  slidesToScroll: 1,

	  autoplay: true,

	  autoplaySpeed: 4000,

  	  responsive: [

  	      {

  	        breakpoint: 1000,

  	        settings: {

  	          slidesToShow: 2,

  	          slidesToScroll: 2,

  	          dots: false,

  	        }

  	      },

  	      {

  	        breakpoint: 767,

  	        settings: {

  	          slidesToShow: 1,

  	          slidesToScroll: 1,

  	          dots: false,

  	        }

  	      }

  	    ]

	});



	jQuery(".testi-content-inner .read-more").click(function(){  

        jQuery(this).parent().parent().toggleClass("active");

    });

    jQuery(".testi-content-inner .read-less").click(function(){  

        jQuery(this).parent().parent().toggleClass("active");

    });





    jQuery('.team-list').on('click', '.learn-more-link', function() {

        jQuery('.team-list .team-content-box-main.active').removeClass('active');

        jQuery(this).parent().parent().parent().parent().addClass("active");

    });

    jQuery(".team-content-box-main").click(function(){  

        jQuery(this).removeClass('active');

    });



    //Scroll to Section

    jQuery(".scroll a").click(function(e){

    	e.preventDefault();

    	var hrefVal = jQuery(this).attr("href");

		try {
			var sectionOffset = jQuery(hrefVal).offset().top - 76;

    		jQuery('html, body').animate({

    		scrollTop: sectionOffset

    		}, 500);
		} catch (error) {
			window.location = hrefVal;
		}
    	

    });

	

	jQuery("#accordionExample .accordion-button").click(function(){

		if(jQuery(this).hasClass("collapsed")){

			jQuery("#accordionExample .collapse").collapse('hide');

			jQuery("#accordionExample .accordion-button").addClass('collapsed');

			jQuery(this).parent().parent().find(".collapse").collapse('show');

			jQuery(this).removeClass('collapsed');

		}

	});



	jQuery(".navbar-nav.scroll li a").click(function(){  

	    jQuery(this).parent().parent().parent().toggleClass('show');

	});



});//ready over

jQuery(window).ready(function(){

	  if (jQuery(document).scrollTop() > 0) {

		jQuery("body").addClass("header-fixed");

	  } else {

		jQuery("body").removeClass("header-fixed");

	  }

});