// Берем все куки из браузера и модифицируем их максимальный срок жизни на 365 дней
const cookiesContented = document.cookie.split(";");
cookiesContented.forEach((cookie) => {
	document.cookie = `${cookie}; domain=.contented.team; max-age=31536000`;
});

const isoCode = localStorage.getItem("iso_code");
// visited - хранится только одну сессию

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

    localStorage.setItem("iso_code_expires", `${expiresDate}`)
}

checkExpired();