const title = document.querySelector(".title");
const may = document.querySelector(".may");
const subtitle = document.querySelector(".subtitle");

setTimeout(() => {
	anim(may);
}, 400);
setTimeout(() => {
	anim(title);
}, 900);
setTimeout(() => {
	anim(subtitle);
}, 1200);

function anim(elem) {
	elem.classList.remove("anim");
}
