// Берем все куки из браузера и модифицируем их максимальный срок жизни на 365 дней

function changeCookies() {
	const cookiesContented = document.cookie.split(";");
	cookiesContented.forEach((cookie) => {
		const cookieName = cookie.split("=")[0];
		const cookieString = cookie.split("=")[1];

		setCookie(cookieName, cookieString);
	});
}

function setCookie(name, value) {
	options = {
		"max-age": 31536000,
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

function checkExpired() {
	const dateNow = new Date();
	const currentDate = dateNow.getTime();
	const expiresDate = dateNow.setTime(currentDate + 31536000000);

	if (localStorage.getItem("iso_code_expires")) {
		const isoCodeExpires = JSON.parse(localStorage.getItem("iso_code_expires"));

		if (isoCodeExpires > expiresDate) {
			localStorage.removeItem("iso_code");
			localStorage.removeItem("iso_code_expires");
			return;
		}
		return;
	}

	localStorage.setItem("iso_code_expires", `0|1709124258983`);
}

document.addEventListener("DOMContentLoaded", checkExpired);
document.addEventListener("DOMContentLoaded", changeCookies);
