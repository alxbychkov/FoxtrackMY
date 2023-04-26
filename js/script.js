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
			991: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 5
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

$('.collapse').collapse()