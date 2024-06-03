const title = document.querySelector(".title");
const logo = document.querySelector(".logo");
const frame = document.querySelector(".frame")
const wires = document.querySelector(".wires");

setTimeout(() => {
	anim(title);
}, 400);
setTimeout(() => {
	anim(logo);
	anim(frame)
}, 900);
setTimeout(() => {
	anim(wires);
}, 1200);

function anim(elem) {
	elem.classList.remove("anim");
}
