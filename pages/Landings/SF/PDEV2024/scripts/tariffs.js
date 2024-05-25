const tariffsBlock = document.querySelector(".tariffs");
const tariffsPaginationButtonLeft = tariffsBlock.querySelector(".tariffs__pagination-button_left");
const tariffsPaginationButtonRight = tariffsBlock.querySelector(".tariffs__pagination-button_right");

const tariffsSlider = new Swiper(".tariffs__slider", {
	loop: false,
	navigation: {
		nextEl: tariffsPaginationButtonRight,
		prevEl: tariffsPaginationButtonLeft,
	},
	spaceBetween: 25,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		960: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});

tariffsSlider.on("reachEnd", () => {
	changeButtons(tariffsPaginationButtonRight, tariffsPaginationButtonLeft);
});
tariffsSlider.on("reachBeginning", () => {
	changeButtons(tariffsPaginationButtonLeft, tariffsPaginationButtonRight);
});

function changeButtons(buttonAdd, buttonRemove) {
	buttonAdd.classList.add("tariffs__pagination-button_hidden");
	buttonRemove.classList.remove("tariffs__pagination-button_hidden");
}
