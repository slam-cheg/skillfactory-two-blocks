import InitAccordeon from "./accordeon.js";

const programBlock = document.querySelector(".program");
const allAccordWrappers = programBlock.querySelectorAll(".acccord-wrapper");
const programTabs = programBlock.querySelectorAll(".program__tab");
const programTabsLeads = programBlock.querySelectorAll(".program__tab-lead");
let manualAccord, autoAccord;
const fakeSelect = programBlock.querySelector(".program__tabs-select");
const fakeOptions = programBlock.querySelector(".program__tabs-options");

allAccordWrappers.forEach((wrapper) => {
  if (wrapper.dataset.direction === "manual") {
    manualAccord = wrapper;
  }
  if (wrapper.dataset.direction === "auto") {
    autoAccord = wrapper;
  }
});

const programAccordManual = new InitAccordeon(manualAccord);
const programAccordAuto = new InitAccordeon(autoAccord);

programAccordManual.init();
programAccordAuto.init();

fakeSelect.addEventListener("click", openCloseFakeSelect)

programTabs.forEach(tab => {
	tab.addEventListener("click", ()=>{
		changeAccord(tab)
	})
})

allAccordWrappers[1].style.display = "none";
 
function changeAccord(tabClicked) {
	const clickedDirection = tabClicked.dataset.direction;
	allAccordWrappers.forEach(accord => {accord.style.display = "none"})
	programTabs.forEach(tab => {tab.classList.remove("program__tab_active")})
	programTabsLeads.forEach(lead => {lead.style.display = "none"})
	const clickedTabLead = [...programTabsLeads].find(item => item.dataset.direction === clickedDirection);
	const clickedAccord = [...allAccordWrappers].find(accord => accord.dataset.direction === clickedDirection);
	clickedTabLead.style.display = "block";
	clickedAccord.style.display = "block";
	tabClicked.classList.add("program__tab_active");
	openCloseFakeSelect();
	fakeSelect.querySelector("span").textContent = tabClicked.textContent;
}

function openCloseFakeSelect() {
	if(fakeSelect.classList.contains("program__tabs-select_opened")) {
		fakeSelect.classList.remove("program__tabs-select_opened");
		fakeOptions.classList.remove("program__tabs-options_visible");
	} else {
		fakeSelect.classList.add("program__tabs-select_opened");
		fakeOptions.classList.add("program__tabs-options_visible");
	}
}