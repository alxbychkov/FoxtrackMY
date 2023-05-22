if (window.Swiper) {
	new Swiper('.image-slider', {
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: '.carousel-control-next',
			prevEl: '.carousel-control-prev'
		},
		pagination: {
			el: '.carousel-indicators',
			clickable: true,
			type: 'bullets'
		},
		breakpoints: {
			320: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 8
			}
		}
	});
	
	new Swiper('.image-slider-adv', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		autoplay: {
			delay: 4000
		},
		pagination: {
			el: '.carousel-indicators',
			clickable: true,
			type: 'progressbar'
		}
	});
}

$('.collapse').collapse();

$(document).ready(function() {
	$('.image-slider_wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		}
	});
});