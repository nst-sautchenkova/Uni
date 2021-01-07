//load
$(window).on('load', function () {
	$('#preloader').delay(300).fadeToggle(500);
	$('.banner h1').attr('data-aos', 'fade-up');
	$('.banner__search').attr('data-aos', 'fade-up');
	$('.trade-in-banner .btn-modal').attr('data-aos', 'fade-up');
	$('.assignment-banner .btn-modal').attr('data-aos', 'fade-up');
	
});
$(window).on('load', function () {
	function anims() {
	  $('.start-anim').addClass('anim');
	  
	}
	setTimeout(anims, 800);

});
$(window).on('load', function () {
	function el1() {
	  $('.banner h1').addClass('aos-animate');
	}
	setTimeout(el1, 1000);

});
$(window).on('load', function () {
	function el2() {
	  $('.banner__search').addClass('aos-animate');
	  $('.trade-in-banner .btn-modal').addClass('aos-animate');
	  $('.assignment-banner .btn-modal').addClass('aos-animate');
	 
	}
	setTimeout(el2, 1200);

});



$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});


AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
	once: true,
	disable: function () {
    var maxWidth = 1100;
    return window.innerWidth < maxWidth;
  }
	
});



// adaptive
$(document).on("ready", function () {
	if( window.innerWidth <= 1250 ){
		
		// .products-slider
		$(".products-slider").addClass('swiper-container');
		$(".products-slider .products-row").addClass('swiper-wrapper');
		$(".products-slider .swiper-wrapper").removeClass('products-row');
		$(".products-slider .products__card").addClass('swiper-slide');
		
		var ps_swiper = new Swiper(".products-slider", {
			slidesPerView: 2,
			spaceBetween: 50,
			loop:true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			
			pagination: {
				el: '.products-slider .swiper-pagination',
				clickable: true,
			},
			
			breakpoints: {
				500: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				}
			  }
		});
		
		// popular-slider
		$(".popular-slider").addClass('swiper-container');
		$(".popular-slider .popular-row").addClass('swiper-wrapper');
		$(".popular-slider .swiper-wrapper").removeClass('popular-row');
		$(".popular-slider .popular__card").addClass('swiper-slide');
		
		
		var ps_swiper = new Swiper(".popular-slider", {
			slidesPerView: 3,
			spaceBetween: 50,
			loop:true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			
			pagination: {
				el: '.popular-slider .swiper-pagination',
				clickable: true,
			},
			
			breakpoints: {
				1000: {
				  slidesPerView: 2,
				  spaceBetween: 20,
				},
				500: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				}
			  }
		});
		
		
		// magazine-slider
		$(".magazine-slider").addClass('swiper-container');
		$(".magazine-slider .magazine-row").addClass('swiper-wrapper');
		$(".magazine-slider .swiper-wrapper").removeClass('magazine-row');
		$(".magazine-slider .magazine__card").addClass('swiper-slide');
		
		var ps_swiper = new Swiper(".magazine-slider", {
			slidesPerView: 2,
			spaceBetween: 50,
			loop:true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			
			pagination: {
				el: '.magazine-slider .swiper-pagination',
				clickable: true,
			},
			
			breakpoints: {
				500: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				}
			  }
		});
		
		// suggestions-slider
		$(".suggestions-slider").addClass('swiper-container');
		$(".suggestions-slider .suggestions-row").addClass('swiper-wrapper');
		$(".suggestions-slider .swiper-wrapper").removeClass('suggestions-row');
		$(".suggestions-slider .suggestions__card").addClass('swiper-slide');
		
		var ps_swiper = new Swiper(".suggestions-slider", {
			slidesPerView: 2,
			spaceBetween: 50,
			loop:true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			
			pagination: {
				el: '.suggestions-slider .swiper-pagination',
				clickable: true,
			},
			
			breakpoints: {
				500: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				}
			  }
		});
		
		
		// apartment-slider
		$(".apartment-slider").addClass('swiper-container');
		$(".apartment-slider .apartment-row").addClass('swiper-wrapper');
		$(".apartment-slider .swiper-wrapper").removeClass('apartment-row');
		$(".apartment-slider .apartment__card").addClass('swiper-slide');
		
		var ps_swiper = new Swiper(".apartment-slider", {
			slidesPerView: 2,
			spaceBetween: 50,
			loop:true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			
			pagination: {
				el: '.apartment-slider .swiper-pagination',
				clickable: true,
			},
			
			breakpoints: {
				500: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				}
			  }
		});
		
		// programs-slider
		$(".programs-slider").addClass('swiper-container');
		$(".programs-slider .programs-row").addClass('swiper-wrapper');
		$(".programs-slider .swiper-wrapper").removeClass('programs-row');
		$(".programs-slider .programs__card").addClass('swiper-slide');
		
		var ps_swiper = new Swiper(".programs-slider", {
			slidesPerView: 2,
			spaceBetween: 50,
			loop:true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			
			pagination: {
				el: '.programs-slider .swiper-pagination',
				clickable: true,
			},
			
			breakpoints: {
				500: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				}
			  }
		});
	
		
		window.addEventListener("orientationchange", function() {
			tariff_swiper.update();
			ps_swiper.update();
		}, false);
  
	} 
		

	if(( window.innerWidth <= 1400 ) && ( window.innerWidth > 1000 )){
		window.addEventListener("orientationchange", function() {
			window.location.reload();
		}, false);

	}  
	
	
	
});



// Menu
$(document).on("ready", function () {
    $(".header__nav .trigger-menu").click(function () {
        $(this).toggleClass('op');
		$(".header__nav").toggleClass("menu-open");
		$('.header__nav .hamburger-menu__bar').toggleClass('animate');
    });
});

//dropdown
$(document).ready(function() {
	$(".dropdown__btn").click(function() {
		$(this).siblings(".dropdown__list").slideToggle('medium');
		$(this).children('.dropdown__wrap-ico').toggleClass('active');
	});
});


// amount-room
$(document).on("ready", function () {
    $(".amount-room .number").click(function () {
		$(this).toggleClass('active');
    });
});

//.map-options__header .tit
$(document).ready(function() {
	$(".map-options__header .tit").click(function() {
		$(".map-options__tab").slideToggle('medium');
		$(this).toggleClass('active');
	});
});

//.map-offer__header .tit
$(document).ready(function() {
	$(".map-offer__header .tit").click(function() {
		$(".map-offer__body").slideToggle('medium');
		$(this).toggleClass('active');
	});
});




