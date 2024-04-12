programAccordItems.forEach((element) => {
	if (!element.classList.contains("accord-inner__element_notopenable")) {
		const programAccordHeader = element.querySelector(".accord-header");
		programAccordHeader.addEventListener("click", () => {
			handlerAccordToggle(element);
		});
	}
});
