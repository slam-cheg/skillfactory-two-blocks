import { quizData } from "./data.js";

const quizBlock = document.querySelector(".quiz");
const gridCells = quizBlock.querySelectorAll(".grid__cell");
const quizContainer = quizBlock.querySelector("#quizContainer");
const textQuestionTemplate = document.querySelector("#text-question").content.querySelector(".question");
const imageQuestionTemplate = document.querySelector("#image-question").content.querySelector(".question");
const textAnswerTemplate = document.querySelector("#text-answer").content.querySelector(".answer");
const imageAnswerTemplate = document.querySelector("#image-answer").content.querySelector(".answer");
const results = {}

createQuestion(quizData.questions[0].number);

function createQuestion(questionNumber) {
	let questionData = quizData.questions.find((question) => question.number === questionNumber);
	if (!questionData) {
		questionData = quizData.questions.find((question) => Math.floor(question.number) === Math.floor(questionNumber));
	}

	let newQuestion;
	questionData.type === "usual" ? (newQuestion = textQuestionTemplate.cloneNode(true)) : (newQuestion = imageQuestionTemplate.cloneNode(true));
	const title = newQuestion.querySelector(".question__title");
	const progressCurrent = newQuestion.querySelector(".quiz__progress").querySelector("#progress-current");
	const progressTotal = newQuestion.querySelector(".quiz__progress").querySelector("#progress-total");
	const nextButton = newQuestion.querySelector(".quiz__button");
	const answersContainer = newQuestion.querySelector(".question__answers");

	nextButton.addEventListener("click", () => {
		nextQuestion(questionNumber + 1, questionData.position);
	});

	title.textContent = questionData.question;
	progressCurrent.textContent = questionNumber;
	progressTotal.textContent = quizData.totalQuestions;
	newQuestion.classList.add("question_active");

	if(questionNumber === quizData.totalQuestions) {
		nextButton.textContent = "Начать учиться";
	}

	questionData.variants.forEach((answer) => {
		const newAnswer = createAnswer(answer, questionData.type, questionData.validation, questionNumber);
		newAnswer.dataset.question = questionData.question;
		newAnswer.addEventListener("click", () => {
			clickAnswer(newAnswer, newQuestion);
		})
		append(answersContainer, newAnswer);
	});
	append(quizContainer, newQuestion);
}

function createAnswer(answer, type, validation, questionNumber) {
	let newAnswer;
	if (type === "usual") {
		newAnswer = textAnswerTemplate.cloneNode(true);
		const answerText = newAnswer.querySelector(".answer__text");
		answerText.textContent = answer.value;
		if (answer.value === "Меньше 18") {
			newAnswer.addEventListener("click", younger);
		}
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

	return newAnswer;
}

function append(container, element) {
	container.appendChild(element);
}

function nextQuestion(nextQuestionNumber, position) {
	if (position === "last") {
		hideTest();
		return;
	}

	if (nextQuestionNumber !== "null") {
		removePrevQuestion();
		createQuestion(Number(nextQuestionNumber));
		return;
	}
	progressCurrent.textContent = Number(progressCurrent.textContent) + 1;
}

function clickAnswer(answer, container) {
	const answerList = container.querySelectorAll(".answer");
	answerList.forEach((answer) => {
		answer.classList.remove("answer_active");
	})
	answer.classList.add("answer_active")
}

function removePrevQuestion() {
	const currentAnswer = quizBlock.querySelector(".answer_active");
	results[currentAnswer.dataset.question] = currentAnswer.querySelector(".answer__text").textContent;
	quizBlock.querySelector(".question_active").remove();
	console.log(results)
}

function younger() {
	window.location.hash = "younger18yo";
}

function hideTest() {
	location.href = "https://free.skillfactory.ru/free-it-thanks"
}
