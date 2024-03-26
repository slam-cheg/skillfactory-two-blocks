const autoPayments = document.querySelector(".autoPayments");
const tabs = autoPayments.querySelectorAll(".autoPayments__tab");
const contents = autoPayments.querySelectorAll(".autoPayments__card");
const formsTabs = autoPayments.querySelectorAll(".autoPayments__form-tab");
const forms = autoPayments.querySelectorAll(".autoPayments__form-wrapper");

tabs.forEach((tab) => {
	tab.addEventListener("click", (evt) => {
		changeContent(evt, tabs, contents, "autoPayments__tab_active", "autoPayments__card_active");
	});
});

formsTabs.forEach(tab => {
    tab.addEventListener("click", (evt)=>{
        changeContent(evt, formsTabs, forms, "autoPayments__form-tab_active", "autoPayments__form-wrapper_active");
    })
});

function changeContent(evt, tabs, changing, activeTabClass, activeContentClass) {
	const pressedTab = evt.target;
	const neededID = pressedTab.id;

	tabs.forEach((tab) => {
		if (tab.id === neededID) {
			tab.classList.add(activeTabClass);
		} else {
			tab.classList.remove(activeTabClass);
		}
	});
	changing.forEach((content) => {
		if (content.id === neededID) {
			content.classList.add(activeContentClass);
		} else {
			content.classList.remove(activeContentClass);
		}
	});
}
