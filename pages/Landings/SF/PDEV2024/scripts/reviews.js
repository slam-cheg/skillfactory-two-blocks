const reviews = document.querySelector(".reviews");
const reviewsSliderPrev = reviews.querySelector(".reviews__scroll-button_left");
const reviewsSliderNext = reviews.querySelector(".reviews__scroll-button_right");


const reviewsSlider = new Swiper(".reviews__slider", {
	navigation: {
		nextEl: reviewsSliderNext,
		prevEl: reviewsSliderPrev,
	},
	slideToClickedSlide: true,
	mousewheel: {
		invert: false,
		forceToAxis: true,
	},
	breakpoints: {
	    320: {
			slidesPerView: 1.1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		960: {
			slidesPerView: 2.45,
			spaceBetween: 20,
		}
	}

});
