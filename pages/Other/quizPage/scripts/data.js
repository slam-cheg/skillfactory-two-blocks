export const quizData = {
	variants: {
		// Сюда пишем что должно происходить в результате после окончания квиза. Можно добавить дополнительные буквы.
		A: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-fpw-new",
		},
		B: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-pdev-new",
		},
		C: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-frpro-new",
		},
		D: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-dspr-new",
		},
		E: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-dapr-new",
		},
		F: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-qap-new",
		},
		G: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-muim-new",
		},
		H: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-graphpro-new",
		},
		I: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-uxspro-new",
		},
		J: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-intnew-new",
		},
	},
	validationToVariants: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], // Сюда в виде массива пишем варианты которым показываем валидативные вопросы если они набрали большее количество баллов
    totalQuestions: 18,
	questions: [
		//1
		{
			question: "Какой предмет был вам наиболее интересен в школе или университете?", // Сам вопрос
			type: "usual", // Тип вопроса. usual - обычный текстовый, image - с картинками
			validation: "false", // Вопрос для анкеты, true/false
			position: "normal", // Тип позиции вопроса в тесте. normal - обычный вопрос, last - последний вопрос всего теста, lastUsual - последний вопрос не анкетный
			number: 1,
			variants: [
				{
					scores: ["D", "E"],
					value: "Математика",
					nextQuestion: 2,
				},
				{
					scores: ["H", "I", "J"],
					value: "Гуманитарные науки",
					nextQuestion: 2,
				},
				{
					scores: ["A", "B", "C", "F"],
					value: "Информатика",
					nextQuestion: 2,
				},
				{
					scores: ["G"],
					value: "Обществознание и менеджмент",
					nextQuestion: 2,
				},
			],
		},
		//2
		{
			question: "Вам проще справляться с задачами на работе",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 2,
			variants: [
				{
					scores: ["A", "B", "C", "D", "E", "F"],
					value: "В одиночку",
					nextQuestion: 3,
				},
				{
					scores: ["G", "H", "I", "J"],
					value: "Вместе с коллегами",
					nextQuestion: 3,
				},
			],
		},
		//3
		{
			question: "Если бы не нужно было работать, вы бы",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 3,
			variants: [
				{
					scores: ["H", "I", "J"],
					value: "Занимались творчеством",
					nextQuestion: 4,
				},
				{
					scores: ["D", "E"],
					value: "Путешествовали и изучали мир",
					nextQuestion: 4,
				},
				{
					scores: ["A", "B", "C", "F"],
					value: "Создавали новые технологии",
					nextQuestion: 4,
				},
				{
					scores: ["G"],
					value: "Много общались с людьми и помогали им",
					nextQuestion: 4,
				},
			],
		},
		//4
		{
			question: "Какое изображение вам больше всего откликается?",
			type: "image",
			validation: "false",
			position: "normal",
			number: 4,
			variants: [
				{
					scores: ["A", "B", "C", "F"],
					value: "1",
					url: "https://storage.yandexcloud.net/sf-wallaper-bucket/images/quiz/A.webp",
					nextQuestion: 5.1,
				},
				{
					scores: ["D", "E", "G"],
					value: "2",
					url: "https://storage.yandexcloud.net/sf-wallaper-bucket/images/quiz/B.webp",
					nextQuestion: 5.2,
				},
				{
					scores: ["H", "I", "J"],
					value: "3",
					url: "https://storage.yandexcloud.net/sf-wallaper-bucket/images/quiz/C.webp",
					nextQuestion: 5.3,
				},
			],
		},
		//5.1
		{
			question: "Ваша сильная черта характера",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 5.1,
			variants: [
				{
					scores: ["D"],
					value: "Прагматичность",
					nextQuestion: 6,
				},
				{
					scores: ["A"],
					value: "Независимость",
					nextQuestion: 6,
				},
				{
					scores: ["C"],
					value: "Креативность",
					nextQuestion: 6,
				},
				{
					scores: ["B"],
					value: "Логика",
					nextQuestion: 6,
				},
			],
		},
		//5.2
		{
			question: "Какое качество помогает вам в жизни больше всего?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 5.2,
			variants: [
				{
					scores: ["G"],
					value: "Проактивность",
					nextQuestion: 6,
				},
				{
					scores: ["F"],
					value: "Внимательность к деталям",
					nextQuestion: 6,
				},
				{
					scores: ["E"],
					value: "Аналитический склад ума",
					nextQuestion: 6,
				},
			],
		},
		//5.3
		{
			question: "Что вы цените в себе больше всего?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 5.3,
			variants: [
				{
					scores: ["I"],
					value: "Целеустремленность",
					nextQuestion: 6,
				},
				{
					scores: ["H"],
					value: "Мечтательность",
					nextQuestion: 6,
				},
				{
					scores: ["J"],
					value: "Стремление к знаниям",
					nextQuestion: 6,
				},
			],
		},
		//6
		{
			question: "Вы быстро разбираетесь в новых приложениях без инструкций?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 6,
			variants: [
				{
					scores: ["A", "B", "C", "D", "E", "F"],
					value: "Да",
					nextQuestion: 7,
				},
				{
					scores: ["G", "H", "I", "J"],
					value: "Нет",
					nextQuestion: 7,
				},
			],
		},
		//7
		{
			question: "Предпочитаете мыслить образами и картинками?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 7,
			variants: [
				{
					scores: ["H", "J", "I", "C"],
					value: "Да",
					nextQuestion: 8,
				},
				{
					scores: ["A", "B", "D", "E", "F", "G"],
					value: "Нет",
					nextQuestion: 8,
				},
			],
		},
		//8
		{
			question: "Как вы лучше всего запоминаете информацию?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 8,
			variants: [
				{
					scores: ["G", "E", "D"],
					value: "Через логические схемы",
					nextQuestion: 9.1,
				},
				{
					scores: ["A", "B", "C", "F"],
					value: "Через тексты и книги",
					nextQuestion: 9.2,
				},
				{
					scores: ["H", "I", "J"],
					value: "Через рисунки и изображения",
					nextQuestion: 9.3,
				},
			],
		},
		//9.1
		{
			question: "Какое приложение вам больше всего пригодилось бы?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 9.1,
			variants: [
				{
					scores: ["G"],
					value: "Генератор текстов и идей",
					nextQuestion: 10,
				},
				{
					scores: ["E"],
					value: "Калькулятор личного бюджета",
					nextQuestion: 10,
				},
				{
					scores: ["D"],
					value: "Нейросеть для прогнозов будущего",
					nextQuestion: 10,
				},
			],
		},
		//9.2
		{
			question: "Вы заходите на сайт. На что обратите внимание в первую очередь?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 9.2,
			variants: [
				{
					scores: ["A"],
					value: "Удобство и простота",
					nextQuestion: 10,
				},
				{
					scores: ["C"],
					value: "Красивый дизайн",
					nextQuestion: 10,
				},
				{
					scores: ["B"],
					value: "Быстрая работа",
					nextQuestion: 10,
				},
				{
					scores: ["F"],
					value: "Отсутствие ляпов и багов",
					nextQuestion: 10,
				},
			],
		},
		//9.3
		{
			question: "Что вы замечаете, гуляя по городу?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 9.3,
			variants: [
				{
					scores: ["I"],
					value: "Людей и их стиль",
					nextQuestion: 10,
				},
				{
					scores: ["H"],
					value: "Граффити и мелкие детали",
					nextQuestion: 10,
				},
				{
					scores: ["J"],
					value: "Архитектуру зданий",
					nextQuestion: 10,
				},
			],
		},
		//10
		{
			question: "Какие видео предпочитаете смотреть?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 10,
			variants: [
				{
					scores: ["A", "B", "C", "F"],
					value: "Обучающие и развивающие",
					nextQuestion: 11,
				},
				{
					scores: ["D", "E"],
					value: "Про путешествия и природу",
					nextQuestion: 11,
				},
				{
					scores: ["H", "J", "I"],
					value: "Музыкальные — клипы и концерты",
					nextQuestion: 11,
				},
				{
					scores: ["G"],
					value: "О жизни других людей: интервью, подкасты",
					nextQuestion: 11,
				},
			],
		},
		//11
		{
			question: "Как планируете встречи с друзьями?",
			type: "usual",
			validation: "false",
			position: "normal",
			number: 11,
			variants: [
				{
					scores: ["D", "E"],
					value: "Сначала продумываю маршрут",
					nextQuestion: 12,
				},
				{
					scores: ["G"],
					value: "Главное — темы для разговоров",
					nextQuestion: 12,
				},
				{
					scores: ["H", "J", "I"],
					value: "Ищу новые места, где еще не были",
					nextQuestion: 12,
				},
				{
					scores: ["A", "B", "C", "F"],
					value: "Начинаю с бюджета",
					nextQuestion: 12,
				},
			],
		},
		//12
		{
			question: "Что бы вы предпочли делать на работе?",
			type: "usual",
			validation: "false",
			position: "lastUsual",
			number: 12,
			variants: [
				{
					scores: ["D", "E"],
					value: "Анализировать данные",
					nextQuestion: 13,
				},
				{
					scores: ["G"],
					value: "Общаться и делать проекты в команде",
					nextQuestion: 13,
				},
				{
					scores: ["H", "J", "I"],
					value: "Генерировать идеи и придумывать новое",
					nextQuestion: 13,
				},
				{
					scores: ["A", "B", "C", "F"],
					value: "Решать сложные задачи",
					nextQuestion: 13,
				},
			],
		},
		//Анкетирование
		//13
		{
			question: "Сколько вам лет?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 13,
			variants: [
				{
					value: "Меньше 18",
					nextQuestion: 14,
				},
				{
					value: "От 18 до 20",
					nextQuestion: 14,
				},
				{
					value: "От 21 до 25",
					nextQuestion: 14,
				},
				{
					value: "От 26 до 30",
					nextQuestion: 14,
				},
				{
					value: "От 31 до 40",
					nextQuestion: 14,
				},
				{
					value: "От 41 до 50",
					nextQuestion: 14,
				},
				{
					value: "Больше 50",
					nextQuestion: 14,
				},
			],
		},
        //14
		{
			question: "Что бы вы предпочли делать на работе?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 14,
			variants: [
				{
					value: "РФ: Москва или Санкт-Петербург",
                    nextQuestion: 15,
				},
				{
					value: "РФ: город-миллионник",
                    nextQuestion: 15,
				},
				{
					value: "РФ: город с населением от 100 000 до 1 млн человек",
                    nextQuestion: 15,
				},
				{
					value: "РФ: город с населением до 100 000 человек",
                    nextQuestion: 15,
				},
				{
					value: "РФ: село, станица, хутор, поселок городского типа",
                    nextQuestion: 15,
				},
				{
					value: "Другая страна СНГ",
                    nextQuestion: 15,
				},
				{
					value: "Зарубежная страна",
                    nextQuestion: 15,
				},
			],
		},
        //15
		{
            question: "Чем вам интересна сфера IT и дизайна?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 15,
			variants: [
				{
					value: "Нравятся перспективы",
                    nextQuestion: 16,
				},
				{
					value: "Пора попробовать что-то новое",
                    nextQuestion: 16,
				},
				{
					value: "Хочу больше зарабатывать",
                    nextQuestion: 16,
				},
				{
					value: "Мечтаю о гибком графике и работе из дома",
                    nextQuestion: 16,
				}
			],
		},
        //16
		{
            question: "Рассматриваете ли вы дополнительное обучение?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 16,
			variants: [
				{
					value: "Готов приступить к обучению в течение недели",
                    nextQuestion: 17,
				},
				{
					value: "Готов приступить к обучению в ближайший месяц",
                    nextQuestion: 17,
				},
				{
					value: "Еще не определился",
                    nextQuestion: 17,
				},
				{
					value: "Не планирую учиться",
                    nextQuestion: 17,
				},
			],
		},
        //17
		{
			question: "Сколько вы готовы потратить на профессиональное обучение в месяц, если решите учиться?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 17,
			variants: [
				{
					value: "Только бесплатно",
                    nextQuestion: 18,
				},
				{
					value: "До 5000 рублей",
                    nextQuestion: 18,
				},
				{
					value: "От 5000 до 7000 рублей",
                    nextQuestion: 18,
				},
				{
					value: "От 7000 до 10 000 рублей",
                    nextQuestion: 18,
				},
				{
					value: "От 10 000 до 15 000 рублей",
                    nextQuestion: 18,
				},
                {
					value: "Больше 15 000 рублей",
                    nextQuestion: 18,
				},
			],
		},
        //18
		{
			question: "Что для вас наиболее важно при выборе обучения?",
			type: "usual",
			validation: "true",
			position: "last",
			number: 18,
			variants: [
				{
					value: "Формат и сам процесс",
                    nextQuestion: null,
				},
				{
					value: "Программа и навыки",
                    nextQuestion: null,
				},
				{
					value: "Цена, конечно!",
                    nextQuestion: null,
				},
				{
					value: "Мне нужна гарантия трудоустройства",
                    nextQuestion: null,
				},
			],
		},
	],
};
