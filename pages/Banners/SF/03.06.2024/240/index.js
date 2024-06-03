const title = document.querySelector(".title");
const description = document.querySelector(".description");
const logo = document.querySelector(".logo");
const frame = document.querySelector(".frame");
const image = document.querySelector(".image");

setTimeout(() => {
	anim(title);
	anim(logo);
}, 300);
setTimeout(() => {
	anim(description);
}, 700);
setTimeout(() => {
	anim(frame);
	anim(image);
}, 1100);

function anim(elem) {
	elem.classList.remove("anim");
}
