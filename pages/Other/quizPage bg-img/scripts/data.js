export const quizData = {
	variants: {
		// Сюда пишем что должно происходить в результате после окончания квиза. Можно добавить дополнительные буквы.
		A: {
			score: 0,
			url: "https://free.skillfactory.ru/proftest-result-fpw-new",
		}
	},
	validationToVariants: ["A"], // Сюда в виде массива пишем варианты которым показываем валидативные вопросы если они набрали большее количество баллов
    totalQuestions: 6,
	questions: [
		//Анкетирование
		//1
		{
			question: "Сколько вам лет?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 1,
			variants: [
				{
					value: "Меньше 18",
					nextQuestion: 2,
				},
				{
					value: "От 18 до 20",
					nextQuestion: 2,
				},
				{
					value: "От 21 до 25",
					nextQuestion: 2,
				},
				{
					value: "От 26 до 30",
					nextQuestion: 2,
				},
				{
					value: "От 31 до 40",
					nextQuestion: 2,
				},
				{
					value: "От 41 до 50",
					nextQuestion: 2,
				},
				{
					value: "Больше 50",
					nextQuestion: 2,
				},
			],
		},
        //2
		{
			question: "Где вы сейчас живете?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 2,
			variants: [
				{
					value: "РФ: Москва или Санкт-Петербург",
                    nextQuestion: 3,
				},
				{
					value: "РФ: город-миллионник",
                    nextQuestion: 3,
				},
				{
					value: "РФ: город с населением от 100 000 до 1 млн человек",
                    nextQuestion: 3,
				},
				{
					value: "РФ: город с населением до 100 000 человек",
                    nextQuestion: 3,
				},
				{
					value: "РФ: село, станица, хутор, поселок городского типа",
                    nextQuestion: 3,
				},
				{
					value: "Другая страна СНГ",
                    nextQuestion: 3,
				},
				{
					value: "Зарубежная страна",
                    nextQuestion: 3,
				},
			],
		},
        //3
		{
            question: "Чем вам интересна сфера IT?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 3,
			variants: [
				{
					value: "Нравятся перспективы",
                    nextQuestion: 4,
				},
				{
					value: "Пора попробовать что-то новое",
                    nextQuestion: 4,
				},
				{
					value: "Хочу больше зарабатывать",
                    nextQuestion: 4,
				},
				{
					value: "Мечтаю о гибком графике и работе из дома",
                    nextQuestion: 4,
				}
			],
		},
        //4
		{
            question: "Рассматриваете ли вы дополнительное обучение?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 4,
			variants: [
				{
					value: "Готов приступить к обучению в течение недели",
                    nextQuestion: 5,
				},
				{
					value: "Готов приступить к обучению в ближайший месяц",
                    nextQuestion: 5,
				},
				{
					value: "Еще не определился",
                    nextQuestion: 5,
				},
				{
					value: "Не планирую учиться",
                    nextQuestion: 5,
				},
			],
		},
        //5
		{
			question: "Сколько вы готовы потратить на профессиональное обучение в месяц, если решите учиться?",
			type: "usual",
			validation: "true",
			position: "normal",
			number: 5,
			variants: [
				{
					value: "Только бесплатно",
                    nextQuestion: 6,
				},
				{
					value: "До 5000 рублей",
                    nextQuestion: 6,
				},
				{
					value: "От 5000 до 7000 рублей",
                    nextQuestion: 6,
				},
				{
					value: "От 7000 до 10 000 рублей",
                    nextQuestion: 6,
				},
				{
					value: "От 10 000 до 15 000 рублей",
                    nextQuestion: 6,
				},
                {
					value: "Больше 15 000 рублей",
                    nextQuestion: 6,
				},
			],
		},
        //6
		{
			question: "Что для вас наиболее важно при выборе обучения?",
			type: "usual",
			validation: "true",
			position: "last",
			number: 6,
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
