const outerAccordsFaq = document.querySelectorAll(".accord-outer");

outerAccordsFaq.forEach((accord) => {
	const outerAccordElement = accord.querySelector(".accord-outer__element");
	const outerAccordHeader = outerAccordElement.querySelector(".accord-header_outer");
	const innerAccords = outerAccordElement.querySelectorAll(".accord-inner");

	outerAccordHeader.addEventListener("click", () => {
		handlerAccordToggle(outerAccordElement);
	});
	innerAccords.forEach((innerAccord) => {
		const innerAccordElements = innerAccord.querySelectorAll(".accord-inner__element");
		innerAccordElements.forEach((element) => {
			element.addEventListener("click", () => {
				handlerAccordToggle(element);
			});
		});
	});
});

export default function handlerAccordToggle(accord) {
	accord.classList.toggle("accord-opened");
	accord.classList.toggle("accord-closed");
}