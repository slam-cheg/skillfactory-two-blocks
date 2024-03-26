const autoPayments = document.querySelector(".autoPayments");
const tabs = autoPayments.querySelectorAll(".autoPayments__tab");
const contents = autoPayments.querySelectorAll(".autoPayments__card");
const forms = autoPayments.querySelectorAll(".autoPayments__form-variant")

tabs.forEach(tab => {
    tab.addEventListener("click", changeContent);
})

function changeContent(evt) {
    const pressedTab = evt.target;
    const neededID = pressedTab.id;

    tabs.forEach(tab => {
        if(tab.id === neededID) {
            tab.classList.add("autoPayments__tab_active");
        } else {
            tab.classList.remove("autoPayments__tab_active")
        }
    })
    contents.forEach(content => {
        if(content.id === neededID) {
            content.classList.add("autoPayments__card_active");
        } else {
            content.classList.remove("autoPayments__card_active")
        }
    })
    forms.forEach(form => {
        if(form.id === neededID) {
            form.classList.add("autoPayments__form-variant_active");
        } else {
            form.classList.remove("autoPayments__form-variant_active");
        }
    })
}