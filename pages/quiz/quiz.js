const startQuiz = document.querySelector(".quiz-start-button");
const quiz = document.querySelector(".quiz-wrapper");
const closeQuiz = quiz.querySelector(".quiz__close");
const questions = quiz.querySelectorAll(".question");
const pageButton = quiz.querySelector(".quiz__button");
const pageCounter = quiz.querySelector(".quiz__counter").querySelector(".current");
let quizPage = 1;

const variants = {
	A: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-fpw",
	},
	B: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-pdev",
	},
	C: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-frpro",
	},
	D: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-dspr",
	},
	E: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-dapr",
	},
	F: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-qap",
	},
	G: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-muim",
	},
	H: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-graphpro",
	},
	I: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-uxspro",
	},
	J: {
		score: 0,
		url: "https://free.skillfactory.ru/proftest-result-intnew",
	},
};

startQuiz.addEventListener("click", () => {
	openPopup(quiz);
});
closeQuiz.addEventListener("click", () => {
	closePopup(quiz);
});
questions.forEach((question) => {
	const pageAnswers = question.querySelectorAll(".question__variant");
	pageAnswers.forEach((answer) => {
		answer.addEventListener("click", () => {
			setActive(pageAnswers, answer);
		});
	});
});

pageButton.addEventListener("click", () => {
	countPageAnswers(quizPage);
});

function openPopup(currentPopup) {
	currentPopup.classList.add("quiz-wrapper_opened");
	currentPopup.addEventListener("click", handleOverlayClick);
	window.addEventListener("keydown", closeByEscape);
}

function closePopup(currentPopup) {
	currentPopup.classList.remove("quiz-wrapper_opened");
	window.removeEventListener("keydown", closeByEscape);
}

function handleOverlayClick(event) {
	if (event.type === "click") {
		if (event.target === event.currentTarget) {
			closePopup(event.target);
		}
	}
}

function closeByEscape(event) {
	if (event.key === "Escape") {
		const openedPopUp = document.querySelector(".quiz-wrapper_opened");
		closePopup(openedPopUp);
	}
}

function setActive(pageAnswers, currentAnswer) {
	pageAnswers.forEach((answer) => {
		if (answer !== currentAnswer) {
			answer.classList.remove("question__variant_checked");
		} else {
			answer.classList.add("question__variant_checked");
		}
	});
}

function countPageAnswers(page) {
	let scores, currentVariant, currentPage, nextPage;
	questions.forEach((question) => {
		//if (Number(question.dataset.page) === page) {
		if (question.classList.contains("question_active")) {
			currentVariant = question.querySelector(".question__variant_checked");
			scores = currentVariant.dataset.scores.split(",");
			currentPage = question;
		}
		if (Number(question.dataset.page) === page + 1 && quizPage < 16) {
			nextPage = question;
		}
	});
	if (page < 13) {
		scores.forEach((score) => {
			variants[score]["score"] += 1;
		});
	}
	if (page === 4 || page === 8) {
		const variant = currentVariant.dataset.variation;
		nextPage = document.querySelector(`[data-variation='${quizPage + 1}.${variant}']`);
	}
	if (quizPage === 15) {
		pageButton.textContent = "К результату";
	}
	if (quizPage === 16) {
		result(variants);
	} else {
		currentPage.classList.remove("question_active");
		currentPage.classList.add("question_deactive");

		nextPage.classList.remove("question_deactive");
		nextPage.classList.add("question_active");

		quizPage++;

		pageCounter.textContent = quizPage;
		quiz.scrollIntoView(true);
	}
}

function result(variants) {
	let maxNum = 0;
	let resultVariant = "";

	for (let key in variants) {
		console.log(variants[key]["score"]);

		if (variants[key]["score"] > maxNum) {
			maxNum = variants[key]["score"];
			resultVariant = key;
		}
	}

	// console.log(variants[resultVariant]["url"]);

	window.location.href = variants[resultVariant]["url"];
}
