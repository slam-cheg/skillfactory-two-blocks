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
	validationToVariants: ["B", "C"], // Сюда в виде массива пишем варианты которым показываем валидативные вопросы если они набрали большее количество баллов
	questions: [
		// Указываем вопросы в виде массива из объектов
		{
			question: "В конце рабочего дня я чувствую себя как выжатый лимон", // Сам вопрос
			type: "usual", // Тип вопроса. usual - обычный текстовый, image - с картинками
			validation: "false", // Вопрос для валидации, true/false
			position: "normal", // Тип позиции вопроса в тесте. normal - обычный порядковый вопрос, last - последний вопрос всего теста, lastUsual - последний вопрос не валидационный
			length: "short", // Указываем длину вариантов ответа. short - короткие, однословные, long - длинные многословные
			variation: "unset", // Указываем если этот вопрос появляется по условию. unset - не выставлено (обычный вопрос), цифра - порядковый номер ответа из предыдущего вопроса (начиная с 1)
			variable: "true", // Является ли вопрос вариативным (после него вопросы разные в зависимости от ответа). Может быть true или false
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
			question: "Var 1",
			type: "usual",
			validation: "false",
			position: "normal",
			length: "short",
			variation: "1",
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
			question: "Var 2",
			type: "usual",
			validation: "false",
			position: "normal",
			length: "short",
			variation: "2",
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
			question: "Var 3",
			type: "usual",
			validation: "false",
			position: "normal",
			length: "long",
			variation: "3",
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
			question: "Var 4",
			type: "usual",
			validation: "false",
			position: "normal",
			length: "short",
			variation: "4",
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
			question: "Var 5",
			type: "usual",
			validation: "false",
			position: "normal",
			length: "short",
			variation: "5",
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
			validation: "false",
			position: "normal",
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
			validation: "false",
			position: "normal",
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
			validation: "false",
			position: "normal",
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
			validation: "false",
			position: "normal",
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
			validation: "false",
			position: "normal",
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
			validation: "false",
			position: "normal",
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
			type: "usual",
			validation: "false",
			position: "lastUsual",
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
			type: "usual",
			validation: "true",
			position: "normal",
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
			type: "usual",
			validation: "true",
			position: "normal",
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
			type: "usual",
			validation: "true",
			position: "normal",
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
			type: "usual",
			validation: "true",
			position: "normal",
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
			type: "usual",
			validation: "true",
			position: "normal",
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
			type: "usual",
			validation: "true",
			position: "last",
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
	let variationPage;
	let page = 1;
	quizData.questions.forEach((question) => {
		let newQuestion, variant;
		if (question.type === "usual") {
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

			if (question.validation === "false") {
				newVariant.dataset.scores = vrnt.scores.join(",");

				if (question.type === "image") {
					const variantImage = newVariant.querySelector("img");
					variantImage.src = vrnt.image;
				}
			}

			variantTitle.textContent = vrnt.value;
			variantsContainer.appendChild(newVariant);
		});

		questionTitle.textContent = question.question;
		newQuestion.dataset.type = question.type;
		newQuestion.dataset.page = page;
		newQuestion.dataset.length = question.length;
		newQuestion.dataset.variation = question.variation;
		newQuestion.dataset.variable = question.variable;
		newQuestion.dataset.position = question.position;
		newQuestion.dataset.validation = question.validation;

		if(question.variable === "true") {
			variationPage = newQuestion.dataset.page;
			page++
		}

		if(question.variation !== "unset") {
			newQuestion.classList.add(`question-${variationPage}_variation`)
			newQuestion.dataset.page = Number(variationPage) + 1
		} else {
			page++
		}

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
	const openedPopUp = document.querySelector(".quiz-wrapper_opened");
	let scores, currentVariant, currentPage, nextPage, resultVariant, currentVariantIndex;

	questions.forEach((question) => {
		if (question.classList.contains("question_active")) {
			const allVariants = question.querySelectorAll(".question__variant");
			currentVariant = question.querySelector(".question__variant_checked");
			currentPage = question;
			if (currentPage.dataset.validation === "false") {
				scores = currentVariant.dataset.scores.split(",");
			}
			
			for(let i = 0; i < allVariants.length; i++) {
				if(allVariants[i] === currentVariant) {
					currentVariantIndex = i + 1;
					break;
				}
			}
		}

		if (Number(question.dataset.page) === page + 1 && quizPage < questions.length) {
			nextPage = question;
		}
	});

	if (currentPage.dataset.validation === "false") {
		scores.forEach((score) => {
			quizData.variants[score]["score"] += 1;
		});
	}

	if (currentPage.dataset.variable === "true") {
		const allVariations = document.querySelectorAll(`.question-${page}_variation`);
		allVariations.forEach(variation => {
			if(variation.dataset.variation === `${currentVariantIndex}`) {
				nextPage = variation;
			}
		})
	}

	if (page === questions.length - 1) {
		pageButton.textContent = "К результату";
	}

	if (nextPage == undefined) {
		resultVariant = result(quizData.variants);
		redirect(resultUrl, resultVariant);
		closePopup(openedPopUp);
		return;
	}

	if (currentPage.dataset.position === "lastUsual") {
		resultVariant = result(quizData.variants);
		if (!quizData.validationToVariants.find((el) => el === resultVariant)) {
			redirect(resultUrl, resultVariant);
			closePopup(openedPopUp);
			return;
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
