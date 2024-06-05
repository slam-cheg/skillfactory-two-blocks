import { quizData } from "./data.js";

const quizBlock = document.querySelector(".quiz");
const grid = quizBlock.querySelector(".grid");
const resultBlock = quizBlock.querySelector(".result");
const resultPercent = quizBlock.querySelector(".result__percent");
const quizContainer = quizBlock.querySelector("#quizContainer");
const prevButton = quizBlock.querySelector(".question__prev-button");
const progress = quizBlock.querySelector(".quiz__progress").querySelector("span");
const textQuestionTemplate = document.querySelector("#text-question").content.querySelector(".question");
const imageQuestionTemplate = document.querySelector("#image-question").content.querySelector(".question");
const textAnswerTemplate = document.querySelector("#text-answer").content.querySelector(".answer");
const imageAnswerTemplate = document.querySelector("#image-answer").content.querySelector(".answer");

prevButton.addEventListener("click", setPrevQuestion);

createQuestion(quizData.questions[0].number);

function countResult() {
	console.log(quizData.variants);
}

function createQuestion(questionNumber) {
	let questionData = quizData.questions.find((question) => question.number === questionNumber);
	if (!questionData) {
		questionData = quizData.questions.find((question) => Math.floor(question.number) === Math.floor(questionNumber));
	}

	let newQuestion;
	questionData.type === "usual" ? (newQuestion = textQuestionTemplate.cloneNode(true)) : (newQuestion = imageQuestionTemplate.cloneNode(true));
	const title = newQuestion.querySelector(".question__title");
	title.textContent = questionData.question;
	questionData.number > 1 ? (newQuestion.dataset.prevQuestion = `${questionData.number - 1}`) : (newQuestion.dataset.prevQuestion = "null");
	newQuestion.classList.add("question_active");
	const answersContainer = newQuestion.querySelector(".question__answers");
	questionData.variants.forEach((answer) => {
		const newAnswer = createAnswer(answer, questionData.type, questionData.validation, questionNumber);
		append(answersContainer, newAnswer);
	});
	append(quizContainer, newQuestion);
	viewProgress(questionData.number);
}

function createAnswer(answer, type, validation, questionNumber) {
	let newAnswer;
	if (type === "usual") {
		newAnswer = textAnswerTemplate.cloneNode(true);
		const answerText = newAnswer.querySelector(".answer__text");
		answerText.textContent = answer.value;
	} else {
		newAnswer = imageAnswerTemplate.cloneNode(true);
		const answerImage = newAnswer.querySelector(".answer__image");
		answerImage.src = answer.url;
		answerImage.alt = answer.value;
	}
	newAnswer.dataset.nextQuestion = answer.nextQuestion;
	if (validation !== "true") {
		newAnswer.dataset.scores = answer.scores.join(",");
	}
	newAnswer.addEventListener("click", () => {
		clickAnswer(newAnswer, validation, questionNumber);
	});

	return newAnswer;
}

function append(container, element) {
	container.appendChild(element);
}

function clickAnswer(answer, validation, questionNumber) {
	let last = false;
	if (answer.dataset.nextQuestion === "null") {
		last = true;
	}
	if (validation !== "true") {
		incrementScores(answer, questionNumber);
	}
	flipQuestions(answer.dataset.nextQuestion, last);
}

function incrementScores(answer, questionNum) {
	let questionNumber = questionNum;
	if (questionNum.toString().length > 1) {
		questionNumber = Math.floor(questionNumber);
	}
	const scores = answer.dataset.scores;
	scores.split(",").forEach((score) => {
		quizData.variants[`${score}`]["score"] += 1;
		if (answer.classList.contains("answer_image")) {
			quizData.questions[`${questionNumber - 1}`]["clickedVariant"] = `${answer.querySelector("img").src}`;
		} else {
			quizData.questions[`${questionNumber - 1}`]["clickedVariant"] = `${answer.querySelector("p").textContent}`;
		}
	});
}

function decrementScores(variants, questionNum) {
	let questionNumber = questionNum;
	if (questionNum.toString().length > 1) {
		questionNumber = Math.floor(questionNumber);
	}
	const neededVariant = variants.find((variant) => variant.value === quizData.questions[`${questionNumber}`]["clickedVariant"]);
	const scores = neededVariant.scores;
	scores.forEach((score) => {
		quizData.variants[`${score}`]["score"] -= 1;
		if (quizData.variants[`${score}`]["score"] < 0) {
			quizData.variants[`${score}`]["score"] = 0;
		}
	});
}

function setPrevQuestion() {
	debugger
	const currentQuestion = quizBlock.querySelector(".question_active");
	let questionNumber = Number(currentQuestion.dataset.prevQuestion) - 1;
	if (questionNumber.toString().length > 1) {
		questionNumber = Math.floor(Number(currentQuestion.dataset.prevQuestion));
	}
	const questionData = quizData.questions[`${questionNumber}`]["variants"];
	decrementScores(questionData, questionNumber);
	flipQuestions(currentQuestion.dataset.prevQuestion);
}

function removePrevQuestion() {
	quizBlock.querySelector(".question_active").remove();
}

function flipQuestions(nextQuestionNumber, last) {
	if (last) {
		countResult();
		grid.style.display = "none";
		resultBlock.style.display = "block";
		resultPercent.textContent = Math.floor(Math.random() * (98 - 92 + 1)) + 92;
		return;
	}

	if (nextQuestionNumber !== "null") {
		removePrevQuestion();
		createQuestion(Number(nextQuestionNumber));
		return;
	}
}

function viewProgress(currentQuestionNumber) {
	progress.textContent = Math.round((100 * currentQuestionNumber) / quizData.totalQuestions);
}
