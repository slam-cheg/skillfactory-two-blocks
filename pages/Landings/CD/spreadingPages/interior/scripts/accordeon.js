const faq = document.querySelector(".faq");
const accordeon = faq.querySelector(".accordeon");
const accordeonItems = accordeon.querySelectorAll(".accordeon__item");

accordeonItems.forEach((item) => {
	const accordeonHeader = item.querySelector(".accordeon__header");
	const bodyItem = item.querySelector(".accordeon__body");
	const bodyList = bodyItem.querySelector(".accordeon__list");
	bodyItem.style.maxHeight = `0px`;

	accordeonHeader.addEventListener("click", () => {
		openCloseAccordeon(item, bodyItem, bodyList);
	});
});

function openCloseAccordeon(item, body, list) {
	if (!item.classList.contains("accordeon__item_opened")) {
		body.style.maxHeight = `${list.getBoundingClientRect().height}px`;
		item.classList.add("accordeon__item_opened");
	} else {
		body.style.maxHeight = `0px`;
		item.classList.remove("accordeon__item_opened");
	}
}
