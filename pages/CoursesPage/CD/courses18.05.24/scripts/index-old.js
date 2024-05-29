const courses = document.querySelector(".courses");
const hideButton = courses.querySelector(".button");
const hiddenCardsWrapper = courses.querySelector(".cards_hidden");
const hiddenCards = courses.querySelectorAll(".card_hidden");

hideButton.addEventListener("click", hideUnhideCards);

function hideUnhideCards() {
	let timeout = 0;

	if (hideButton.dataset.hide === "hidden") {
		for (let i = 0; i < hiddenCards.length; i++) {
			setTimeout(() => {
				hiddenCards[i].style.display = null;
				setTimeout(() => {
					hiddenCards[i].classList.remove("card_hidden");
				}, 100);
			}, timeout);
			timeout += 100;
		}
		hideButton.dataset.hide = "visible";
		return;
	}

	if (hideButton.dataset.hide === "visible") {

		for (let i = hiddenCards.length - 1; i >= 0; i--) {
			setTimeout(() => {
				hiddenCards[i].classList.add("card_hidden");
				setTimeout(() => {
					hiddenCards[i].style.display = "none";
				}, 500);
			}, timeout);
			timeout += 100;
		}

		hideButton.dataset.hide = "hidden";
		return;
	}
}
