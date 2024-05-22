const accordeonParent = document.querySelector(".how-to-learn");
const accordeon = accordeonParent.querySelector(".accordeon");
const accordeonItems = [...accordeon.querySelectorAll(".accordeon__item")];

accordeonItems.forEach((item) => {
	const accordeonHeader = item.querySelector(".accordeon__header");
	const bodyItem = item.querySelector(".accordeon__body");
	const bodyContent = bodyItem.querySelector(".accordeon__body-columns");
	let separatorsHeight = 0;
	let separators = null;

	if (accordeon.classList.contains("accordeon_separators")) {
		separators = item.querySelectorAll(".accordeon__separator");
		separators.forEach((separator) => {
			changeSeparators(separators, 0);
			separatorsHeight = separator.querySelector("div").getBoundingClientRect().height;
		});
	}
	bodyItem.style.maxHeight = `0px`;

	accordeonHeader.addEventListener("click", () => {
		closePrevOpenedAccordeonItem(item);
		openCloseAccordeon(item, bodyItem, bodyContent, separators, separatorsHeight);
	});
});

function openCloseAccordeon(item, body, content, separatorsArr, separatorsHeight) {
	if (!item.classList.contains("accordeon__item_opened")) {
		if (separatorsArr !== null) {
			changeSeparators(separatorsArr, separatorsHeight);
		}

		body.style.maxHeight = `${content.getBoundingClientRect().height}px`;
		item.classList.add("accordeon__item_opened");
	} else {
		if (separatorsArr !== null) {
			if (separatorsArr !== null) {
				changeSeparators(separatorsArr, 0);
			}
		}

		body.style.maxHeight = `0px`;
		item.classList.remove("accordeon__item_opened");
	}
}

function changeSeparators(separatorsArr, separatorsHeight) {
	separatorsArr.forEach((separator) => {
		separator.style.maxHeight = `${separatorsHeight}px`;
	});
}

function closePrevOpenedAccordeonItem(item) {
	const prevOpenedItem = accordeonItems.find((item) => item.classList.contains("accordeon__item_opened"));
	if (prevOpenedItem && item !== prevOpenedItem) {
		const prevOpenedBodyItem = prevOpenedItem.querySelector(".accordeon__body");
		const prevOpenedBodyContent = prevOpenedItem.querySelector(".accordeon__body-columns");
		let prevOpenedSeparatorsHeight = 0;
		let prevOpenedSeparators = null;
		prevOpenedSeparators = prevOpenedItem.querySelectorAll(".accordeon__separator");
		prevOpenedSeparators.forEach((separator) => {
			prevOpenedSeparatorsHeight = separator.querySelector("div").getBoundingClientRect().height;
		});

		openCloseAccordeon(prevOpenedItem, prevOpenedBodyItem, prevOpenedBodyContent, prevOpenedSeparators, prevOpenedSeparatorsHeight);
	}
}
