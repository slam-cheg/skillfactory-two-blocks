const faq = document.querySelector(".faq");
const accordeon = faq.querySelector(".accordeon");
const accordeonItems = accordeon.querySelectorAll(".accordeon__item");

accordeonItems.forEach((item) => {
	const accordeonHeader = item.querySelector(".accordeon__header");

	accordeonHeader.addEventListener("click", () => {
		openCloseAccordeon(item);
	});
});

function openCloseAccordeon(accordeonItem) {
	accordeonItem.classList.toggle("accordeon__item_opened");
}
