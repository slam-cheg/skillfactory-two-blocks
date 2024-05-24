export default class InitAccordeon {
	constructor(parent) {
		this._parent = parent;
		this._accordeon = parent.querySelector(".accordeon");
		this._accordeonItems = [...this._accordeon.querySelectorAll(".accordeon__item")];
	}

	init() {
		this._accordeonItems.forEach((item) => {
			const accordeonHeader = item.querySelector(".accordeon__header");
			const bodyItem = item.querySelector(".accordeon__body");
			const bodyContent = bodyItem.querySelector(".accordeon__body-columns");
			let itemOpened = false;
			let separatorsHeight = 0;
			let separators = null;

			item.classList.contains("accordeon__item_opened") ? (itemOpened = true) : (itemOpened = false);

			if (this._accordeon.classList.contains("accordeon_separators")) {
				separators = item.querySelectorAll(".accordeon__separator");
				separators.forEach((separator) => {
					separatorsHeight = separator.querySelector("div").getBoundingClientRect().height;
				});
				if (itemOpened) {
					this.__changeSeparators(separators, separatorsHeight);
				} else {
					this.__changeSeparators(separators, 0);
				}
			}
			if (itemOpened) {
				bodyItem.style.maxHeight = `${bodyContent.getBoundingClientRect().height}px`;
			} else {
				bodyItem.style.maxHeight = `0px`;
			}

			accordeonHeader.addEventListener("click", () => {
				this.__closePrevOpenedAccordeonItem(item);
				this.__openCloseAccordeon(item, bodyItem, bodyContent, separators, separatorsHeight);
			});
		});
	}

	initVideos() {
		const parentClass = this._parent.className;
		const videos = [...this._parent.querySelectorAll(`.${parentClass}__video-container`)];

		this._accordeonItems.forEach((accordWithVideoItem) => {
			accordWithVideoItem.querySelector(".accordeon__header").addEventListener("click", () => {
				this.__changeVideo(parentClass, videos, accordWithVideoItem);
			});
			const videoContainer = videos.find(video => video.id === accordWithVideoItem.id)
			const playButton = videoContainer.querySelector(`.${parentClass}__playbutton`)
			playButton.addEventListener("click", () => {
				this.__playPause(videoContainer, parentClass);
			});
		});
	}

	__playPause(videoContainer, parentClass) {
		const playButton = videoContainer.querySelector(`.${parentClass}__playbutton`)
		const videoCover = videoContainer.querySelector(`.${parentClass}__video-cover`);
		const video = videoContainer.querySelector(`#video`);

		if (video.paused && videoContainer.classList.contains(`${parentClass}__video-container_opened`)) {
			video.play();
			videoCover.classList.add(`${parentClass}__video-cover_hidden`);
			playButton.classList.add(`${parentClass}__playbutton_active`);
		} else {
			video.pause();
			videoCover.classList.remove(`${parentClass}__video-cover_hidden`);
			playButton.classList.remove(`${parentClass}__playbutton_active`);
		}
	}

	__changeVideo(parentClass, videos, currentAccordItem) {
		const neededVideoContainer = videos.find((video) => video.id === currentAccordItem.id);
		const openedVideoContainer = videos.find((video) => video.classList.contains(`${parentClass}__video-container_opened`));

		if (this.__countOpenedAccordItems() !== 0) {
			if (openedVideoContainer) {
				openedVideoContainer.classList.remove(`${parentClass}__video-container_opened`);
				this.__playPause(openedVideoContainer, parentClass)
			}

			if (currentAccordItem.classList.contains("accordeon__item_opened")) {
				neededVideoContainer.classList.add(`${parentClass}__video-container_opened`);
				return;
			} else {
				neededVideoContainer.classList.remove(`${parentClass}__video-container_opened`);
				return;
			}
		}
	}

	__countOpenedAccordItems() {
		let openedNum = 0;
		this._accordeonItems.forEach((item) => {
			if (item.classList.contains("accordeon__item_opened")) {
				openedNum += 1;
			}
		});
		return openedNum;
	}

	__openCloseAccordeon(item, body, content, separatorsArr, separatorsHeight) {
		if (!item.classList.contains("accordeon__item_opened")) {
			if (separatorsArr !== null) {
				this.__changeSeparators(separatorsArr, separatorsHeight);
			}

			body.style.maxHeight = `${content.getBoundingClientRect().height}px`;
			item.classList.add("accordeon__item_opened");
			return item;
		} else {
			if (separatorsArr !== null) {
				if (separatorsArr !== null) {
					this.__changeSeparators(separatorsArr, 0);
				}
			}

			body.style.maxHeight = `0px`;
			item.classList.remove("accordeon__item_opened");
		}
	}

	__changeSeparators(separatorsArr, separatorsHeight) {
		separatorsArr.forEach((separator) => {
			separator.style.maxHeight = `${separatorsHeight}px`;
		});
	}

	__closePrevOpenedAccordeonItem(item) {
		const prevOpenedItem = this._accordeonItems.find((item) => item.classList.contains("accordeon__item_opened"));
		if (prevOpenedItem && item !== prevOpenedItem) {
			const prevOpenedBodyItem = prevOpenedItem.querySelector(".accordeon__body");
			const prevOpenedBodyContent = prevOpenedItem.querySelector(".accordeon__body-columns");
			let prevOpenedSeparatorsHeight = 0;
			let prevOpenedSeparators = null;
			prevOpenedSeparators = prevOpenedItem.querySelectorAll(".accordeon__separator");
			prevOpenedSeparators.forEach((separator) => {
				prevOpenedSeparatorsHeight = separator.querySelector("div").getBoundingClientRect().height;
			});

			this.__openCloseAccordeon(prevOpenedItem, prevOpenedBodyItem, prevOpenedBodyContent, prevOpenedSeparators, prevOpenedSeparatorsHeight);
		}
	}
}
