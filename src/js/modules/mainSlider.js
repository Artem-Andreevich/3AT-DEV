function mainSlider(){
	const slider = document.querySelector('.feedback-slider__items')
	$(slider)?.slick({
		infinite: true,
		speed: 200,
		slidesToShow: 3,
		arrows: true,
		appendDots: '.feedback-slider__dots',
		dots: false,
		prevArrow: '.slider-prev',
		nextArrow: '.slider-next',
		waitForAnimate: true,
		focusOnSelect: true,
		fade: false,
		LazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1340,
				settings: {
					centerMode: true,
					centerPadding: '180px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 991,
				settings: {
					centerMode: true,
					centerPadding: '120px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					centerMode: true,
					centerPadding: '120px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					dots: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
		]
	});
}

export default mainSlider;