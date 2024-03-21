//const startQuiz = document.querySelector(".quiz-start-button");
const quiz = document.querySelector(".quiz-wrapper");
const questionsContainer = document.querySelector(".quiz__questions-container");
const questionsTemplates = document.querySelector("#quiz-templates").content;
const imageQuestion = questionsTemplates.querySelector("#question-image");
const textQuestion = questionsTemplates.querySelector("#question-usual");
const closeQuiz = quiz.querySelector(".quiz__close");

const quizData = {
	variants: {
		// Сюда пишем что должно происходить в результате после окончания квиза. Можно добавить дополнительные буквы.
		A: {
			score: 0,
			url: "https://free.skillfactory.ru/burnout_result_light",
		},
		B: {
			score: 0,
			url: "https://free.skillfactory.ru/burnout_result_medium",
		},
		C: {
			score: 0,
			url: "https://free.skillfactory.ru/burnout_result_high",
		},
	},
	validationToVariants: ["B", "C"], // Сюда пишем варианты которым показываем валидативные вопросы если они набрали большее количество баллов
	questions: [
		// Указываем вопросы в виде массива из объектов
		{
			question: "В конце рабочего дня я чувствую себя как выжатый лимон", // Сам вопрос
			type: "usual", // Тип вопроса. usual - обычный текстовый, image - с картинками, validation - валидативный, last - последний вопрос перед валидацией, lastUsual - последний вопрос не валидационный
			length: "short", // Указываем длину вариантов ответа. short - короткие, однословные, long - длинные многословные
			variation: "unset", // Указываем если этот вопрос появляется по условию. unset - не выставлено (обычный вопрос), цифра - порядковый номер ответа из предыдущего вопроса
			variable: "false", // Является ли вопрос вариативным (после него вопросы разные в зависимости от ответа). Может быть true или false
			variants: [
				// Указываем варианты в виде массива из объектов
				{
					scores: ["A"], // Какие буквы будут добавляться у этого ответа
					value: "Никогда", // Текст варианта
					image: "url", // Урл на изображение, добавляется если вопрос с изображением
				},
				{
					scores: ["A"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["C"],
					value: "Часто",
				},
				{
					scores: ["C"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "Ощущение, что я живу от выходных до выходных",
			type: "usual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["A"],
					value: "Никогда",
				},
				{
					scores: ["A"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["C"],
					value: "Часто",
				},
				{
					scores: ["C"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "Я могу эмоционально срываться на коллег в течение рабочего дня",
			type: "usual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["A"],
					value: "Никогда",
				},
				{
					scores: ["B"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["C"],
					value: "Часто",
				},
				{
					scores: ["C"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "Начался новый рабочий день. Мое состояние и эмоции:",
			type: "usual",
			length: "long",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["A"],
					value: "с легкостью и энергией приступаю к рабочим делам",
				},
				{
					scores: ["B"],
					value: "нужно время, чтобы прийти в себя и «загрузиться», но далее спокойно начинаю работать",
				},
				{
					scores: ["C"],
					value: "чувствую апатию и нежелание приступать даже к самой легкой задаче",
				},
			],
		},
		{
			question: "Мне хочется общаться с коллегами и делиться с ними новостями",
			type: "usual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["C"],
					value: "Никогда",
				},
				{
					scores: ["B"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["A"],
					value: "Часто",
				},
				{
					scores: ["A"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "После работы хочется посвятить время себе и ни с кем не разговаривать",
			type: "usual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["A"],
					value: "Никогда",
				},
				{
					scores: ["B"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["C"],
					value: "Часто",
				},
				{
					scores: ["C"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "Я могу разрешить конфликт в команде на работе",
			type: "usual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["C"],
					value: "Никогда",
				},
				{
					scores: ["C"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["A"],
					value: "Часто",
				},
				{
					scores: ["A"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "Если передо мной ставят кропотливую и требующую большого внимания задачу, я...",
			type: "usual",
			length: "long",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["A"],
					value: "уверенно начну выполнять задание, выключу рабочие чаты, чтобы полноценно погрузиться в работу",
				},
				{
					scores: ["B"],
					value: "сначала 2–3 раза прочитаю задание, налью себе чай, морально настроюсь и приступлю",
				},
				{
					scores: ["C"],
					value: "буду долго откладывать задачу, постоянно отвлекаться на что-то",
				},
			],
		},
		{
			question: "Мне говорят: «Я вижу искру в твоих глазах от работы»",
			type: "usual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["C"],
					value: "Никогда",
				},
				{
					scores: ["C"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["A"],
					value: "Часто",
				},
				{
					scores: ["A"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "Я раздражаюсь на коллег, которые медленно выполняют свою работу",
			type: "usual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["A"],
					value: "Никогда",
				},
				{
					scores: ["A"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["C"],
					value: "Часто",
				},
				{
					scores: ["C"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "Я чувствую эмоциональный подъем на работе",
			type: "usual",
			length: "long",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["A"],
					value: "Всегда, даже от самой маленькой выполненной задачи",
				},
				{
					scores: ["B"],
					value: "Только когда руководитель хвалит и отмечает ценность моей работы",
				},
				{
					scores: ["C"],
					value: "Никогда, эмоционально я воскресаю только после работы",
				},
			],
		},
		{
			question: "Я люблю свою работу и вижу ее ценность",
			type: "usual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["C"],
					value: "Никогда",
				},
				{
					scores: ["B"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["A"],
					value: "Часто",
				},
				{
					scores: ["A"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "У меня появляются мысли сменить работу или направление моей работы",
			type: "lastUsual",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					scores: ["A"],
					value: "Никогда",
				},
				{
					scores: ["B"],
					value: "Редко",
				},
				{
					scores: ["B"],
					value: "Иногда",
				},
				{
					scores: ["C"],
					value: "Часто",
				},
				{
					scores: ["C"],
					value: "Почти всегда",
				},
			],
		},
		{
			question: "Сколько вам лет?",
			type: "validation",
			length: "short",
			variation: "unset",
			variable: "false",
			variants: [
				{
					value: "Младше 18",
				},
				{
					value: "От 18 до 20",
				},
				{
					value: "От 21 до 25",
				},
				{
					value: "От 26 до 30",
				},
				{
					value: "От 31 до 40",
				},
				{
					value: "От 41 до 50",
				},
				{
					value: "Больше 50",
				},
			],
		},
		{
			question: "Где вы сейчас живете?",
			type: "validation",
			length: "long",
			variation: "unset",
			variable: "false",
			variants: [
				{
					value: "РФ: Москва или Санкт-Петербург",
				},
				{
					value: "РФ: город-миллионник",
				},
				{
					value: "РФ: город с населением от 100 000 до 1 млн человек",
				},
				{
					value: "РФ: город с населением до 100 000 человек",
				},
				{
					value: "РФ: село, станица, хутор, поселок городского типа",
				},
				{
					value: "Другая страна СНГ",
				},
				{
					value: "Зарубежная страна",
				},
			],
		},
		{
			question: "Чем вам интересна сфера IT или дизайна?",
			type: "validation",
			length: "long",
			variation: "unset",
			variable: "false",
			variants: [
				{
					value: "Больше перспектив, есть куда развиваться",
				},
				{
					value: "Хочу попробовать себя в новом направлении",
				},
				{
					value: "Не устраивает доход на текущей работе",
				},
				{
					value: "Не могу найти работу",
				},
				{
					value: "Ищу первую профессию",
				},
				{
					value: "Хочу работать из дома",
				},
				{
					value: "Хочу переехать в другую страну",
				},
				{
					value: "Хочу разобраться, потому что все о ней говорят",
				},
			],
		},
		{
			question: "Рассматриваете ли вы дополнительное обучение?",
			type: "validation",
			length: "long",
			variation: "unset",
			variable: "false",
			variants: [
				{
					value: "Готов приступить к обучению в течение недели",
				},
				{
					value: "Готов приступить к обучению в ближайший месяц",
				},
				{
					value: "Еще не определился",
				},
				{
					value: "Не планирую учиться",
				},
			],
		},
		{
			question: "Сколько вы готовы инвестировать в свое обучение в год, если решите начать учиться?",
			type: "validation",
			length: "long",
			variation: "unset",
			variable: "false",
			variants: [
				{
					value: "До 50 000 рублей",
				},
				{
					value: "От 50 000 до 100 000 рублей",
				},
				{
					value: "От 100 000 до 150 000 рублей",
				},
				{
					value: "Более 150 000 рублей",
				},
				{
					value: "Готов(а) учиться только бесплатно",
				},
			],
		},
		{
			question: "Что для вас наиболее важно при выборе обучения?",
			type: "last",
			length: "long",
			variation: "unset",
			variable: "false",
			variants: [
				{
					value: "Как устроен процесс обучения (формат, расписание, практика, обучающая платформа)",
				},
				{
					value: "Программа обучения (чему я научусь, конкретные модули, насколько это нужно в реальной жизни)",
				},
				{
					value: "Цены (какие есть варианты для меня, скидки, рассрочки, ежемесячный платеж)",
				},
				{
					value: "Гарантия трудоустройства (Центр карьеры, как мне помогут найти новую работу, как быстро смогу ее найти)",
				},
			],
		},
	],
};

createLayout();

const questions = quiz.querySelectorAll(".question");
const pageButton = quiz.querySelector(".quiz__button");
const pageCounter = quiz.querySelector(".quiz__counter").querySelector(".current");
const pagesTotal = quiz.querySelector(".quiz__counter").querySelector(".total");
pagesTotal.textContent = `${questions.length}`;
let quizPage = 1;
let resultUrl = "";

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

function createLayout() {
	quizData.questions.forEach((question) => {
		let newQuestion, variant;
		if (question.type === "usual" || question.type === "validation" || question.type === "last" || question.type === "lastUsual") {
			newQuestion = textQuestion.cloneNode(true);
			variant = questionsTemplates.querySelector("#variant-usual");
		}
		if (question.type === "image") {
			newQuestion = imageQuestion.cloneNode(true);
			variant = questionsTemplates.querySelector("#variant-image");
		}
		const questionTitle = newQuestion.querySelector(".h2-title");
		const variantsContainer = newQuestion.querySelector(".question__variants");

		question.variants.forEach((vrnt) => {
			const newVariant = variant.cloneNode(true);
			const variantTitle = newVariant.querySelector(".question__text").querySelector("p");

			if (question.type === "usual" || question.type === "lastUsual") {
				newVariant.dataset.scores = vrnt.scores.join(",");
			}
			if (question.type === "image") {
				const variantImage = newVariant.querySelector("img");
				variantImage.src = vrnt.image;
			}
			variantTitle.textContent = vrnt.value;
			variantsContainer.appendChild(newVariant);
		});

		questionTitle.textContent = question.question;
		newQuestion.dataset.type = question.type;
		newQuestion.dataset.page = `${quizData.questions.indexOf(question) + 1}`;
		newQuestion.dataset.length = question.length;
		newQuestion.dataset.variation = question.variation;
		newQuestion.dataset.variable = question.variable;

		if (question.length === "long") {
			newQuestion.classList.add("question_long-text");
		}

		if (newQuestion.dataset.page === "1") {
			newQuestion.classList.remove("question_deactive");
			newQuestion.classList.add("question_active");
		}

		questionsContainer.appendChild(newQuestion);
	});
}

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
	let scores, currentVariant, currentPage, nextPage, resultVariant;
	questions.forEach((question) => {
		if (question.classList.contains("question_active")) {
			currentVariant = question.querySelector(".question__variant_checked");
			currentPage = question;
			if (currentPage.dataset.type === "usual" || currentPage.dataset.type === "lastUsual") {
				scores = currentVariant.dataset.scores.split(",");
			}
		}
		if (Number(question.dataset.page) === page + 1 && quizPage < questions.length) {
			nextPage = question;
		}
	});

	if (currentPage.dataset.type === "usual" || currentPage.dataset.type === "lastUsual") {
		scores.forEach((score) => {
			quizData.variants[score]["score"] += 1;
		});
	}
	if (currentPage.dataset.variable === "true") {
		const variant = currentVariant.dataset.variation;
		nextPage = document.querySelector(`[data-variation='${quizPage + 1}.${variant}']`);
	}
	if (page === questions.length - 1) {
		pageButton.textContent = "К результату";
	}
	if (nextPage == undefined) {
		redirect(resultUrl, resultVariant);
		
		const openedPopUp = document.querySelector(".quiz-wrapper_opened");
		closePopup(openedPopUp);
	}
	if (currentPage.dataset.type === "lastUsual") {
		resultVariant = result(quizData.variants);
		if (!quizData.validationToVariants.find((el) => el === resultVariant)) {
			redirect(resultUrl, resultVariant);

			const openedPopUp = document.querySelector(".quiz-wrapper_opened");
			closePopup(openedPopUp);
		}
	}
	currentPage.classList.remove("question_active");
	currentPage.classList.add("question_deactive");

	nextPage.classList.remove("question_deactive");
	nextPage.classList.add("question_active");
	quiz.scrollIntoView(true);

	quizPage = quizPage += 1;
	pageCounter.textContent = quizPage;
}

function result(variants) {
	let maxNum = 0;
	let resultVariant = "";

	for (let key in variants) {
		if (variants[key]["score"] > maxNum) {
			maxNum = variants[key]["score"];
			resultVariant = key;
		}
	}

	resultUrl = quizData.variants[resultVariant]["url"];
	return resultVariant;
}

function redirect(url, res) {
	console.log(`Redirected to ${url} with winner ${res} on`, quizData.validationToVariants, quizData.variants);
	// window.location.replace(url);
}
