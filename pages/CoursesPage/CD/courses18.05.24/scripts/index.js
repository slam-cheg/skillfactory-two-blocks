const courses = document.querySelector(".courses");
const hideButton = courses.querySelector(".button");
const hiddenCardsWrapper = courses.querySelector(".cards_hidden");
const hiddenCards = courses.querySelectorAll(".card_hidden");

hideButton.addEventListener("click", hideUnhideCards);

function hideUnhideCards() {
	if (hideButton.dataset.hide === "hidden") {
		for (let i = 0; i < hiddenCards.length; i++) {
			hiddenCards[i].classList.remove("card_hidden");
		}
		hideButton.textContent = "свернуть"
		hideButton.dataset.hide = "visible";
		return;
	}

	if (hideButton.dataset.hide === "visible") {
		for (let i = hiddenCards.length - 1; i >= 0; i--) {
			hiddenCards[i].classList.add("card_hidden");
		}
		hideButton.textContent = "все курсы"
		hideButton.dataset.hide = "hidden";
		return;
	}
}
