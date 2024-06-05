export const quizData = {
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