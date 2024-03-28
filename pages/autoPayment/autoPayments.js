const autoPayments = document.querySelector(".autoPayments");
const tabs = autoPayments.querySelectorAll(".autoPayments__tab");
const contents = autoPayments.querySelectorAll(".autoPayments__card");

try {
const formsTabs = autoPayments.querySelectorAll(".autoPayments__form-tab");
const forms = autoPayments.querySelectorAll(".autoPayments__form-wrapper");

formsTabs.forEach(tab => {
    tab.addEventListener("click", (evt)=>{
        changeContent(evt, formsTabs, forms, "autoPayments__form-tab_active", "autoPayments__form-wrapper_active");
    })
});
} catch {
	console.log("Changing forms disabled")
}

try {
	const saleCorners = autoPayments.querySelectorAll(".autoPayments__sale-corner");

	function changeCorner () {
		saleCorners.forEach(corner => {
			corner.classList.toggle("autoPayments__sale-corner_active");
		})
	}
	tabs.forEach((tab) => {
		tab.addEventListener("click", (evt) => {
			changeContent(evt, tabs, contents, "autoPayments__tab_active", "autoPayments__card_active");
			changeCorner();
		});
	});
	console.log("Contented AutoPayments")
} catch {
	tabs.forEach((tab) => {
		tab.addEventListener("click", (evt) => {
			changeContent(evt, tabs, contents, "autoPayments__tab_active", "autoPayments__card_active");
		});
	});
	console.log("Skillfactory AutoPayments")
}





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
