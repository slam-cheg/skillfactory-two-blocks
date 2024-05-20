const reviews = document.querySelector(".reviews");
const reviewsSliderPrev = reviews.querySelector(".reviews__scroll-button_left");
const reviewsSliderNext = reviews.querySelector(".reviews__scroll-button_right");


const reviewsSlider = new Swiper(".reviews__slider", {
	navigation: {
		nextEl: reviewsSliderNext,
		prevEl: reviewsSliderPrev,
	},
	slideToClickedSlide: true,
	spaceBetween: 20,
	mousewheel: {
		invert: false,
		forceToAxis: true,
	},
	slidesPerView: 2.45,
});
