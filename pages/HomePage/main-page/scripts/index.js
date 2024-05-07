const iframeLayout = `<iframe class="videos__iframe" width="100%" height="100%" frameborder="0" allowfullscreen="" src="" allow="autoplay"></iframe>`;
const iframeWrappers = document.querySelectorAll(".videos__iframe-wrapper");
// const jobTooltip = document.querySelector("#tooltip-job");
// const refundTooltip = document.querySelector("#tooltip-refund");
// const jobTooltipBtn = document.querySelector("#internship");
// const refundTooltipBtn = document.querySelector("#refund");
const burgerMenuBtn = document.querySelector(".main__burger");

burgerMenuBtn.addEventListener("click", openMobileMenu);
// jobTooltipBtn.addEventListener("mouseover", () => {
// 	openTooltip(jobTooltip);
// });
// jobTooltipBtn.addEventListener("mouseout", () => {
// 	closeTooltip(jobTooltip);
// });
// refundTooltipBtn.addEventListener("mouseover", () => {
// 	openTooltip(refundTooltip);
// });
// refundTooltip.addEventListener("mouseout", () => {
// 	closeTooltip(refundTooltip);
// });

const employerReviewsSwiper = new Swiper(".employer-reviews__swiper", {
	loop: false,
	navigation: {
		nextEl: "#employer-reviews-next-btn",
		prevEl: "#employer-reviews-prev-btn",
	},
	spaceBetween: 44,
	slideToClickedSlide: true,
	mousewheel: {
		invert: false,
		forceToAxis: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 0.4,
			freeMode: {
				enabled: true,
				sticky: false,
			},
		},
		640: {
			slidesPerView: 0.6,
		},
		960: {
			slidesPerView: 1.15,
			freeMode: {
				enabled: false,
				sticky: true,
			},
		},
		1199: {
			slidesPerView: 1.12,
		},
	},
});

if (window.outerWidth > 479) {
	const freeMaterialsSwiper = new Swiper(".free-materials__swiper", {
		loop: false,
		navigation: {
			nextEl: "#free-materials-prev-btn",
			prevEl: "#free-materials-next-btn",
		},
		spaceBetween: 24,
		slidesPerView: 3,
		slideToClickedSlide: true,
		mousewheel: {
			invert: false,
		},
		breakpoints: {
			480: {
				slidesPerView: 1.24,
			},
			640: {
				slidesPerView: 2,
			},
			960: {
				slidesPerView: 3,
			},
		},
	});
}

const reviewsSwiper = new Swiper(".reviews__swiper", {
	loop: false,
	navigation: {
		nextEl: "#reviews-next-btn",
		prevEl: "#reviews-prev-btn",
	},
	spaceBetween: 44,
	slideToClickedSlide: true,
	mousewheel: {
		invert: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 0.4,
			freeMode: {
				enabled: true,
				sticky: false,
			},
		},
		640: {
			slidesPerView: 0.6,
		},
		960: {
			slidesPerView: 1.15,
			freeMode: {
				enabled: false,
				sticky: true,
			},
		},
		1199: {
			slidesPerView: 1.12,
		},
	},
});

const videosSwiper = new Swiper(".videos__swiper", {
	loop: false,
	navigation: {
		nextEl: "#videos-prev-btn",
		prevEl: "#videos-next-btn",
	},
	spaceBetween: 44,
	slideToClickedSlide: false,
	mousewheel: {
		invert: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 1.8,
		},
		640: {
			slidesPerView: 2.4,
			spaceBetween: 40,
		},
		960: {
			slidesPerView: 4,
		},
	},
});

const mentorsSwiper = new Swiper(".mentors__swiper", {
	loop: false,
	navigation: {
		nextEl: "#mentors-prev-btn",
		prevEl: "#mentors-next-btn",
	},
	spaceBetween: 24,
	mousewheel: {
		invert: false,
	},
	slideToClickedSlide: true,
	breakpoints: {
		480: {
			slidesPerView: 1.5,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1.7,
			spaceBetween: 40,
		},
		960: {
			slidesPerView: 3,
		},
	},
});

iframeWrappers.forEach((wrapper) => {
	const playBtn = wrapper.querySelector(".videos__play");
	const preview = wrapper.querySelector(".videos__preview");
	const currentVideoId = wrapper.dataset.video;

	wrapper.addEventListener("click", () => {
		preview.insertAdjacentHTML("afterend", iframeLayout);
		const iframe = wrapper.querySelector(".videos__iframe");
		iframe.src = `https://www.youtube.com/embed/${currentVideoId}?&amp;autoplay=1&amp;rel=0`;
		playBtn.classList.add("videos__play_hidden");
		preview.classList.add("videos__preview_hidden");
	});
});

// function openTooltip(tooltip) {
// 	tooltip.classList.add("warranty__tooltip_visible");
// 	setTimeout(() => {
// 		window.addEventListener("click", closeTooltipByOverlay);
// 	}, 500);
// }

// function closeTooltip(tooltip) {
// 	tooltip.classList.remove("warranty__tooltip_visible");
// 	window.removeEventListener("click", closeTooltipByOverlay);
// }

// function closeTooltipByOverlay(event) {
// 	if (event.type === "click") {
// 		if (event.target !== document.querySelector(".warranty__tooltip")) {
// 			closeTooltip(document.querySelector(".warranty__tooltip_visible"));
// 		}
// 	}
// }

function openMobileMenu() {
	burgerMenuBtn.classList.add("main__burger_clicked");
	setTimeout(() => {
		window.addEventListener("click", closeMobileMenuByOverlay);
	}, 200);
}

function closeMobileMenuByOverlay(event) {
	if (event.type === "click") {
		if (event.target !== document.querySelector(".main__burger")) {
			closeMobileMenu(document.querySelector(".main__burger_clicked"));
		}
	}
}

function closeMobileMenu() {
	burgerMenuBtn.classList.remove("main__burger_clicked");
	window.removeEventListener("click", closeMobileMenuByOverlay);
}
