const iframeLayout = `<iframe class="video-slide__iframe" width="100%" height="100%" frameborder="0" allowfullscreen="" src="" allow="autoplay"></iframe>`;
const iframeWrappers = document.querySelectorAll(".video-slide__iframe-wrapper");

const reviewsMixedSlider = new Swiper(".reviews-mixed__slider", {
	loop: false,
	navigation: {
		nextEl: "#reviews-mixed-prev-btn",
		prevEl: "#reviews-mixed-next-btn",
	},
	spaceBetween: 20,
	slideToClickedSlide: false,
	mousewheel: {
		invert: false,
	},
	slidesPerView: "auto",
});

iframeWrappers.forEach((wrapper) => {
	const playBtn = wrapper.querySelector(".video-slide__play");
	const preview = wrapper.querySelector(".video-slide__preview");
	const currentVideoId = wrapper.dataset.video;

	wrapper.addEventListener("click", () => {
		preview.insertAdjacentHTML("afterend", iframeLayout);
		const iframe = wrapper.querySelector(".video-slide__iframe");
		iframe.src = `https://www.youtube.com/embed/${currentVideoId}?&amp;autoplay=1&amp;rel=0`;
		playBtn.classList.add("video-slide__play_hidden");
		preview.classList.add("video-slide__preview_hidden");
	});
});