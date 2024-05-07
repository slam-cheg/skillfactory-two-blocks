const guy = document.querySelector(".guy");
const sale = document.querySelector(".sale");
const titleWrapper = document.querySelector(".title-wrapper");
const may = document.querySelector(".title-img");
const subtitleWrapper = document.querySelector(".subtitle-wrapper");
const disclamer = document.querySelector(".disclamer");

setTimeout(()=>{anim(guy); anim(sale)}, 400);
setTimeout(() => {anim(titleWrapper); anim(may)}, 900);
setTimeout(()=>{anim(subtitleWrapper)}, 1200);
setTimeout(()=>{anim(disclamer)}, 1900);


function anim(elem) {
    elem.classList.remove("anim")
}