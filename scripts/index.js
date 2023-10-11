const outerAccords = document.querySelectorAll(".accord-outer");
const programAccord = document.querySelector(".program__accord-wrapper");
const programAccordItems = programAccord.querySelectorAll(".accord-inner__element");
const timer = document.querySelector(".takeit-timer");
const timerDaysValue = timer.querySelector(".takeit-timer__days-value");
const timerHoursValue = timer.querySelector(".takeit-timer__hours-value");
const timerMinutesValue = timer.querySelector(".takeit-timer__minutes-value");
const timerSecondsValue = timer.querySelector(".takeit-timer__seconds-value");
let endDate = 0;

outerAccords.forEach((accord) => {
	const outerAccordElement = accord.querySelector(".accord-outer__element");
	const outerAccordHeader = outerAccordElement.querySelector(".accord-header_outer");
	const innerAccords = outerAccordElement.querySelectorAll(".accord-inner");

	outerAccordHeader.addEventListener("click", () => {
		handlerAccordToggle(outerAccordElement);
	});
	innerAccords.forEach((innerAccord) => {
		const innerAccordElements = innerAccord.querySelectorAll(".accord-inner__element");
		innerAccordElements.forEach((element) => {
			element.addEventListener("click", () => {
				handlerAccordToggle(element);
			});
		});
	});
});

programAccordItems.forEach((element) => {
	const programAccordHeader = element.querySelector(".accord-header");
	programAccordHeader.addEventListener("click", () => {
		handlerAccordToggle(element);
	});
});

function handlerAccordToggle(accord) {
	accord.classList.toggle("accord-opened");
	accord.classList.toggle("accord-closed");
}

setTimeout(() => {
	endDate = window.SFData["https://skillfactory.ru/python-fullstack-web-developer-b/"]["75"];
	// endDate = document.querySelector(".takeit__timerEndTime").textContent;
}, 500);

function updateTimerClock() {
	var t = getRemainingTime(endDate);

	if (t.days < 10) {
		t.days = ("0" + t.days).slice(-2);
	}
	t.hours = ("0" + t.hours).slice(-2);
	t.minutes = ("0" + t.minutes).slice(-2);
	t.seconds = ("0" + t.seconds).slice(-2);
	if (t.total <= 0) {
		clearInterval(timerinterval);
	}
	timerDaysValue.textContent = t.days;
	timerHoursValue.textContent = t.hours;
	timerMinutesValue.textContent = t.minutes;
	timerSecondsValue.textContent = t.seconds;
}
updateTimerClock();
var timerinterval = setInterval(updateTimerClock, 1000);

function getRemainingTime(endtime) {
	const t = Date.parse(endtime) - Date.parse(new Date());
	const seconds = t < 0 ? 0 : Math.floor((t / 1000) % 60);
	const minutes = t < 0 ? 0 : Math.floor((t / 1000 / 60) % 60);
	const hours = t < 0 ? 0 : Math.floor((t / (1000 * 60 * 60)) % 24);
	const days = t < 0 ? 0 : Math.floor(t / (1000 * 60 * 60 * 24));

	return {
		total: t,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	};
}

const ratesSlider = new Swiper(".takeit__slider", {
	loop: false,
	navigation: {
		nextEl: "#rates-prev-btn",
		prevEl: "#rates-next-btn",
	},
	spaceBetween: 25,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		960: {
			slidesPerView: 2,
		},
		1199: {
			slidesPerView: 3,
		},
	},
});
