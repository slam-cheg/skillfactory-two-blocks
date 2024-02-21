import handlerAccordToggle from "./faq.js"

const programAccord = document.querySelector(".program__accord-wrapper");
const programAccordItems = programAccord.querySelectorAll(".accord-inner__element");

programAccordItems.forEach((element) => {
	if (!element.classList.contains("accord-inner__element_notopenable")) {
		const programAccordHeader = element.querySelector(".accord-header");
		programAccordHeader.addEventListener("click", () => {
			handlerAccordToggle(element);
		});
	}
});
