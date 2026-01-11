"use strict";

const helper = {
	isMobileScreen() {
		return window.matchMedia("(max-width: 1024px").matches;
	},
};

const build = {
	p(text, pClass = undefined) {
		const p = document.createElement("p");
		if (pClass) p.classList.add(pClass);

		const regex = /\[([a-zA-Z0-9-_]+)\](.+?)\[\/\1\]/g;
		let lastIndex = 0;
		let match;

		while ((match = regex.exec(text)) !== null) {
			appendBeforeMatch();
			appendStylizedSpan();
			lastIndex = regex.lastIndex;
		}
		appendAfterMatch();

		return p;

		function appendBeforeMatch() {
			if (match.index <= lastIndex) return;
			p.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
		}
		function appendStylizedSpan() {
			const [fullMatch, className, content] = match;
			const span = document.createElement("span");
			span.classList.add(className);
			span.textContent = content;
			p.appendChild(span);
		}
		function appendAfterMatch() {
			if (!text) return;
			if (lastIndex >= text?.length ?? 0) return;
			p.appendChild(document.createTextNode(text.slice(lastIndex)));
		}
	},
	h2(text) {
		const h2 = document.createElement("h2");
		h2.textContent = text;
		h2.classList.add("unselectable");
		return h2;
	},
	h3(text) {
		const h3 = document.createElement("h3");
		h3.textContent = text;
		h3.classList.add("unselectable");
		return h3;
	},
	h4(text) {
		const h4 = document.createElement("h4");
		h4.textContent = text;
		h4.classList.add("unselectable");
		return h4;
	},
	button(text, link = undefined, newTab = false) {
		const button = document.createElement("button");
		button.textContent = text;
		button.classList.add("unselectable");
		if (link) button.append(build.a(link, newTab));
		return button;
	},
	buttonScrollTo(text, scrollToDivId) {
		const errorText = `Incorrect function parameter: scrollToDivId = ${scrollToDivId}`;
		if (!scrollToDivId) throw new Error(errorText);

		const button = document.createElement("button");
		button.textContent = text;
		button.classList.add("unselectable");

		button.addEventListener("click", () => {
			if (sidebarMenu.isOpen()) sidebarMenu.close();
			const scrollToDiv = document.getElementById(scrollToDivId);
			scrollToDiv.scrollIntoView({behavior: "smooth"});
		});
		return button;
	},
	img({src, alt}, imgClass = undefined) {
		const img = document.createElement("img");
		img.src = src;
		img.alt = alt;
		img.classList.add("unselectable");
		img.loading = "lazy";
		if (imgClass) img.classList.add(imgClass);
		return img;
	},
	a(link, newTab = false) {
		const a = document.createElement("a");
		a.href = link;
		a.target = newTab ? "_blank" : "_self";
		a.classList.add("unselectable");
		return a;
	},
	labelRadio(text, index) {
		const label = document.createElement("label");
		const input = document.createElement("input");
		input.type = "radio";
		input.name = "choice";
		input.value = index + 1;
		const textNode = document.createTextNode(text);
		label.append(input, textNode);
		label.classList.add("unselectable");
		return label;
	},
};

const sectionMethods = {
	createMainContainer() {
		const mainScreen = document.getElementById("mainScreen");
		const div = document.createElement("main");
		mainScreen.append(div);

		div.id = "sections";
		div.classList.add("sections");
	},
	createSectionContainer(id) {
		if (!id) throw new Error("Please define an id.");

		const sectionDiv = document.createElement("section");
		sectionDiv.id = id;
		sectionDiv.classList.add("generalSectionLayout");
		append();

		return sectionDiv;

		function append() {
			const sections = document.getElementById("sections");
			sections.append(sectionDiv);
		}
	},
	createContent(contentObject) {
		const frag = document.createDocumentFragment();
		for (const text of contentObject) frag.append(build.p(text));
		return frag;
	},
	createContentIconLink(contentObject) {
		const frag = document.createDocumentFragment();
		for (const [text, icon = undefined, link = undefined, newTab = false] of contentObject) {
			const p = build.p(text);
			if (icon) p.prepend(build.img(icon, "icon"));
			if (link) p.append(build.a(link, newTab));
			frag.append(p);
		}
		return frag;
	},
	toggleDropdownText(id) {
		document.getElementById(id).classList.toggle("activeDropdown");
	},
	createDropdownText(contentObject, number) {
		const frag = document.createDocumentFragment();

		for (const [index, {header, content}] of Object.entries(contentObject)) {
			const container = document.createElement("div");
			const id = `dropdownContent_${index}_${number}`;

			buildHeader();
			buildContent();

			frag.append(container);

			function buildHeader() {
				const h4 = build.h4(header);
				h4.classList.add("dropdownHeader", "arrowBottom");
				container.append(h4);

				h4.addEventListener("click", () => {
					sectionMethods.toggleDropdownText(id);
					h4.classList.toggle("arrowBottom");
					h4.classList.toggle("arrowTop");
				});
			}
			function buildContent() {
				const p = build.p(content);
				p.classList.add("dropdownContent");
				p.id = id;
				container.append(p);
			}
		}
		return frag;
	},
};

const siteHeader = {
	createAll() {
		this.create();
		this.createContainers();
		this.createLogo();
		this.createButtons();
	},
	create() {
		const mainScreen = document.getElementById("mainScreen");
		const header = document.createElement("header");
		mainScreen.append(header);

		header.id = "header";
		header.classList.add("header");
	},
	createContainers() {
		const headerDiv = document.getElementById("header");
		const logoDiv = document.createElement("div");
		const buttonsDiv = document.createElement("nav");
		headerDiv.append(logoDiv, buttonsDiv);

		configureLogo();
		configureButtons();

		function configureLogo() {
			logoDiv.id = "headerLogo";
			logoDiv.classList.add("headerLogo");
		}
		function configureButtons() {
			buttonsDiv.id = "headerButtons";
			buttonsDiv.classList.add("headerButtons");
		}
	},
	createLogo() {
		const logoDiv = document.getElementById("headerLogo");
		const img = build.img(imageLibrary.header.logo);
		const a = build.a(linkLibrary.internal.home);
		logoDiv.append(img, a);
	},
	createButtons() {
		const buttonsDiv = document.getElementById("headerButtons");
		const textList = textLibrary.header.buttons;
		const frag = document.createDocumentFragment();
		for (const [text, link] of textList) {
			const isFooter = link === "footer";
			const button = isFooter ? build.buttonScrollTo(text, link) : build.button(text, link);
			frag.append(button);
		}
		buttonsDiv.append(frag);
	},
};

const siteFooter = {
	createAll() {
		this.createSectionContainer();
		this.createLeftSide();
		this.createCenterSide();
		this.createRightSide();
		this.createCredits();
	},
	createSectionContainer() {
		const mainScreen = document.getElementById("mainScreen");
		const footer = document.createElement("footer");
		mainScreen.append(footer);

		footer.id = "footer";
		footer.classList.add("footer");
	},
	createLeftSide() {
		const footer = document.getElementById("footer");
		const container = document.createElement("section");
		footer.append(container);
		const textObject = textLibrary.footer.left;

		buildHeader();
		buildContent();

		function buildHeader() {
			const h3 = build.h3(textObject.header);
			container.append(h3);
		}
		function buildContent() {
			const p = sectionMethods.createContentIconLink(textObject.content);
			container.append(p);
		}
	},
	createCenterSide() {
		const footer = document.getElementById("footer");
		const container = document.createElement("section");
		footer.append(container);

		const textObject = textLibrary.footer;

		buildHeaderTop();
		buildContentTop();
		buildHeaderBottom();
		buildContentBottom();

		function buildHeaderTop() {
			const h3 = build.h3(textObject.centerTop.header);
			container.append(h3);
		}
		function buildContentTop() {
			const p = sectionMethods.createContentIconLink(textObject.centerTop.content);
			container.append(p);
		}
		function buildHeaderBottom() {
			const h3 = build.h3(textObject.centerBottom.header);
			container.append(h3);
		}
		function buildContentBottom() {
			const p = sectionMethods.createContentIconLink(textObject.centerBottom.content);
			container.append(p);
		}
	},
	createRightSide() {
		const footer = document.getElementById("footer");
		const container = document.createElement("section");
		footer.append(container);

		const textObject = textLibrary.footer.right;

		buildHeader();
		buildContent();

		function buildHeader() {
			const h3 = build.h3(textObject.header);
			container.append(h3);
		}
		function buildContent() {
			const p = sectionMethods.createContentIconLink(textObject.content);
			container.append(p);
		}
	},
	createCredits() {
		const footer = document.getElementById("mainScreen");
		const credits = document.createElement("aside");
		credits.classList.add("credits");

		const p = build.p(textLibrary.footer.credits);
		credits.append(p);
		footer.append(credits);
	},
};

const sidebarMenu = {
	isOpen() {
		if (document.getElementsByClassName("activeSidebar").length > 0) return true;
		return false;
	},
	open() {
		document.getElementById("sidebar").classList.add("activeSidebar");
		this.disableSwipeY();
	},
	close() {
		document.getElementById("sidebar").classList.remove("activeSidebar");
		this.enableSwipeY();
	},
	toggle() {
		document.getElementById("sidebar").classList.toggle("activeSidebar");
		if (this.isOpen()) return this.disableSwipeY();
		this.enableSwipeY();
	},
	disableSwipeY() {
		document.body.style.overflowY = "hidden";
		document.documentElement.style.overflow = "hidden";
	},
	enableSwipeY() {
		document.body.style.removeProperty("overflow-y");
		document.documentElement.style.removeProperty("overflow-y");
	},
	createAll() {
		this.createSidebarButton();
		this.createSidebarHeader();
		this.createSidebarBody();
		this.swipeToOpen();
	},
	createSidebarButton() {
		const width = window.getComputedStyle(document.getElementById("body")).width;
		if (parseFloat(width) > 768) return;

		const header = document.getElementById("header");
		const sidebarButton = document.createElement("button");
		const img = document.createElement("img");
		sidebarButton.append(img);
		header.append(sidebarButton);

		sidebarButton.classList.add("sidebarButton", "unselectable");
		sidebarButton.addEventListener("click", () => sidebarMenu.toggle());
		img.src = iconLibrary.sidebarButton.src;
		img.id = "openMenuImg";
		sidebarButton.id = "openMenuButton";
	},
	createSidebarHeader() {
		const sidebar = document.getElementById("sidebar");
		const header = document.createElement("div");
		sidebar.append(header);
	},
	createSidebarBody() {
		const sidebar = document.getElementById("sidebar");
		const container = document.createElement("nav");
		sidebar.append(container);

		container.classList.add("sidebarBody");

		buildButtons();

		function buildButtons() {
			const frag = document.createDocumentFragment();

			const buttonsList = textLibrary.header.buttons;
			for (const [text, link] of buttonsList) {
				const isFooter = link === "footer";
				const button = isFooter ? build.buttonScrollTo(text, link) : build.button(text, link);
				frag.append(button);
			}

			container.append(frag);
		}
	},
	swipeToOpen() {
		eventListeners.horizontalSwipe("body", undefined, () => this.close());
	},
};

const eventListeners = {
	createInitial() {
		this.preventRightClickOnImg();
		this.closeSidebarOnTapOutside();
		this.escape();
		this.setupBackButtonHandler();
	},
	preventRightClickOnImg() {
		document.addEventListener("contextmenu", (element) => {
			if (element.target.matches("img")) element.preventDefault();
		});
	},
	closeSidebarOnTapOutside() {
		const sidebar = document.getElementById("sidebar");
		const openButton = document.getElementById("openMenuButton");
		const openImg = document.getElementById("openMenuImg");

		document.addEventListener("click", (event) => {
			if (!sidebar.classList.contains("activeSidebar")) return;
			if (sidebar.contains(event.target)) return;
			if (event.target === openButton) return;
			if (event.target === openImg) return;

			sidebar.classList.remove("activeSidebar");
		});
	},
	escape() {
		document.addEventListener("keydown", (e) => {
			if (e.key !== "Escape") return;
			fixedScreen.close();
		});
	},
	horizontalSwipe(nodeId, leftToRight, rightToLeft) {
		const node = document.getElementById(nodeId);
		let start = {};

		node.addEventListener("touchstart", (event) => {
			start.x = event.touches[0].clientX;
			start.y = event.touches[0].clientY;
		});
		node.addEventListener("touchend", (event) => {
			const endX = event.changedTouches[0].clientX;
			const differenceX = endX - start.x;
			const thresholdX = 100;

			const swipeLeft = differenceX > thresholdX;
			if (swipeLeft) return rightToLeft();
			if (leftToRight) leftToRight();
		});
		node.addEventListener("touchmove", (event) => {
			const endY = event.changedTouches[0].clientY;
			const differenceY = endY - start.y;
			const thresholdY = 10;

			const largeVerticalSwipe = Math.abs(differenceY) > thresholdY;
			if (largeVerticalSwipe) return;

			event.preventDefault(), {passive: false, capture: true};
		});
	},
	setupBackButtonHandler() {
		if (!helper.isMobileScreen()) return;
		window.addEventListener("popstate", () => {
			fixedScreen.close();
		});
	},
};

// Build specific sections:
const buildPageTitle = {
	createAll(page) {
		this.createContainer();
		this.createHeaderContent(page);
		this.createSubheaderContent(page);
		this.createButton(page);
	},
	createContainer() {
		const id = "pageTitle";
		const containerClass = "pageTitle";
		const container = sectionMethods.createSectionContainer(id);
		container.classList.add(containerClass);
	},
	createHeaderContent(page) {
		const id = "pageTitle";
		const container = document.getElementById(id);
		const text = textLibrary[page].pageTitle.header;
		const h2 = build.h2(text);

		container.append(h2);
	},
	createSubheaderContent(page) {
		const id = "pageTitle";
		const container = document.getElementById(id);
		const text = textLibrary[page].pageTitle.subheader;
		const h4 = build.h4(text);

		container.append(h4);
	},
	createButton(page) {
		const id = "pageTitle";
		const container = document.getElementById(id);

		const text = textLibrary[page].pageTitle.button;
		if (!text) return;
		const link = linkLibrary.external.whatsapp;
		const button = build.button(text, link, true);
		container.append(button);
	},
};

const buildInformationCard = {
	createAll(page, id, headerSide) {
		const errorText = `Incorrect function parameter: textSide = ${headerSide}`;
		if (!["left", "right"].includes(headerSide)) throw new Error(errorText);

		this.createSectionContainer(id, headerSide);
		this.createTitleContainer(id, headerSide);
		this.createTitle(page, id, headerSide);
		this.createContentContainer(id, headerSide);
		this.createContent(page, id, headerSide);
	},
	createSectionContainer(id, side) {
		const div = sectionMethods.createSectionContainer(id);
		div.classList.add("informationCard", `${side}HeaderInformationCard`);
	},
	createTitleContainer(id, side) {
		const container = document.getElementById(id);
		const sideDiv = document.createElement("div");
		container.append(sideDiv);

		sideDiv.id = `${id}_${side}`;
		sideDiv.classList.add(`headerInformationCard`);
	},
	createTitle(page, id, side) {
		const container = document.getElementById(`${id}_${side}`);
		const text = textLibrary[page][id].header;
		const h2 = build.h2(text);
		container.append(h2);
	},
	createContentContainer(id, side) {
		side = side === "left" ? "right" : "left";

		const container = document.getElementById(id);
		const sideDiv = document.createElement("div");
		container.append(sideDiv);

		sideDiv.id = `${id}_${side}`;
		sideDiv.classList.add("contentInformationCard");
	},
	createContent(page, id, side) {
		side = side === "left" ? "right" : "left";

		const container = document.getElementById(`${id}_${side}`);

		buildText();
		buildButtons();

		function buildText() {
			const textList = textLibrary[page][id].content;
			if (!textList) return;

			const frag = document.createDocumentFragment();
			for (const {subheader, text} of textList) {
				const block = document.createElement("div");
				const h4 = build.h4(subheader);
				const p = build.p(text);
				block.append(h4, p);
				frag.append(block);
			}
			container.append(frag);
		}
		function buildButtons() {
			const textList = textLibrary[page][id].button;
			if (!textList) return;

			const buttonsContainer = document.createElement("div");
			if (textList.length === 1) buttonsContainer.style.gridTemplateColumns = "unset";
			const frag = document.createDocumentFragment();
			for (const [text, link] of textList) {
				const button = build.button(text, link);
				frag.append(button);
			}
			buttonsContainer.append(frag);
			container.append(buttonsContainer);
		}
	},
};

const buildTimeline = {
	createAll(page, number, mirrored = false) {
		if (!["sobreMim"].includes(page)) throw new Error(`Incorrect function parameter: page = ${page}`);

		this.createContainer(number);
		this.createTextContent(page, number, mirrored);
		this.createImages(number, mirrored);
	},
	createContainer(number) {
		const id = `${number}TimelineSection`;
		const container = sectionMethods.createSectionContainer(id);
		container.classList.add("timeline");
	},
	createTextContent(page, number, mirrored) {
		const id = `${number}TimelineSection`;
		const section = document.getElementById(id);
		const textObject = textLibrary[page][id];

		buildHeader();
		buildText();

		function buildHeader() {
			if (!textObject.header) return;
			const h2 = build.h2(textObject.header);
			section.append(h2);
		}
		function buildText() {
			const generalContainer = document.createElement("div");
			generalContainer.id = `${number}GeneralContainer`;
			generalContainer.classList.add("timelineGeneralContainer");
			if (mirrored) generalContainer.classList.add("mirrored");

			const leftContainer = document.createElement("div");
			const frag = sectionMethods.createContent(textObject.content);

			leftContainer.append(frag);
			generalContainer.append(leftContainer);
			section.append(generalContainer);
		}
	},
	createImages(number, mirrored) {
		const id = `${number}TimelineSection`;
		const generalContainer = document.getElementById(`${number}GeneralContainer`);
		const container = document.createElement("div");
		const containerClass = "imageContainerTimeline";
		container.classList.add(containerClass);
		if (mirrored) container.classList.add("rightMirrored");

		const frag = document.createDocumentFragment();
		for (const source of imageLibrary.sobreMim[id]) {
			const img = build.img(source);
			frag.append(img);
		}

		container.append(frag);
		generalContainer.append(container);
	},
};

const buildCarousel = {
	createAll(page, id) {
		if (!["home", "avaliacaoNeuropsicologica"].includes(page))
			throw new Error(`Incorrect function parameter: page = ${page}`);

		this.createContainer();
		this.createHeader(page, id);
		this.createStepsContainer(page, id);
		this.createIndicator(page, id);
	},
	createContainer() {
		const container = sectionMethods.createSectionContainer("carousel");
		container.classList.add("carousel");
	},
	createHeader(page, id) {
		const section = document.getElementById("carousel");
		const text = textLibrary[page][id].header;
		const h3 = build.h3(text);
		section.append(h3);
	},
	createStepsContainer(page, id) {
		const section = document.getElementById("carousel");
		const container = document.createElement("div");
		section.append(container);

		container.classList.add("carouselContainer");

		createButton("left");
		createStep();
		createButton("right");

		function createButton(side) {
			const img = document.createElement("img");
			const {leftCarouselButton, rightCarouselButton} = iconLibrary;
			const buttonImage = side === "left" ? leftCarouselButton : rightCarouselButton;
			img.src = buttonImage.src;
			img.addEventListener("click", () => buildCarousel.toggleNext(side));
			container.append(img);
		}
		function createStep() {
			const cardId = "carouselCard";
			const innerContainer = document.createElement("div");
			container.append(innerContainer);
			innerContainer.id = cardId;
			innerContainer.classList.add(cardId);
			eventListeners.horizontalSwipe(
				cardId,
				() => buildCarousel.toggleNext("right"),
				() => buildCarousel.toggleNext("left")
			);

			const textContent = textLibrary[page][id].carousel;
			for (const {header: headerText, content} of textContent) {
				const stepCard = document.createElement("div");
				const header = build.h4(headerText);
				const p = build.p(content);
				stepCard.append(header, p);
				innerContainer.append(stepCard);
			}
		}
	},
	createIndicator(page, id) {
		const section = document.getElementById("carousel");
		const div = document.createElement("div");
		section.append(div);

		div.classList.add("indicator", "unselectable");

		const length = textLibrary[page][id].carousel.length;
		const frag = document.createDocumentFragment();
		for (let i = 0; i < length; i++) {
			const indicator = document.createElement("div");
			indicator.id = `indicator${i}`;
			indicator.addEventListener("click", () => buildCarousel.goToIndex(i));
			if (i === 0) indicator.classList.add("indicatorActive");
			frag.append(indicator);
		}
		div.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
		div.append(frag);
	},
	goToIndex(index) {
		const oldDiv = document.getElementsByClassName("indicatorActive")[0];
		oldDiv.classList.toggle("indicatorActive");

		this.toggleIndicator(index);
		this.setIndex(index);
	},
	setIndex(index) {
		const containerDiv = document.getElementById("carouselCard");

		this.toggleNext.index = index;

		Array.from(containerDiv.children).forEach((child) => {
			const percentage = -125;
			child.style.transform = `translateX(${this.toggleNext.index * percentage}%)`;
		});
	},
	toggleNext(side) {
		const containerDiv = document.getElementById("carouselCard");
		if (typeof this.toggleNext.index !== "number") this.toggleNext.index = 0;

		const newIndex = getIndex();
		this.toggleIndicator(this.toggleNext.index);
		this.toggleIndicator(newIndex);
		this.toggleNext.index = newIndex;

		Array.from(containerDiv.children).forEach((child) => {
			const percentage = -125;
			child.style.transform = `translateX(${this.toggleNext.index * percentage}%)`;
		});

		function getIndex() {
			const sign = side === "right" ? 1 : -1;
			const newValue = buildCarousel.toggleNext.index + sign;

			const numberOfElements = containerDiv.children.length;
			const range = {min: 0, max: numberOfElements - 1};

			if (newValue > range.max) return range.min;
			if (newValue < range.min) return range.max;
			return newValue;
		}
	},
	toggleIndicator(index) {
		const div = document.getElementById(`indicator${index}`);
		div.classList.toggle("indicatorActive");
	},
};

const buildQuote = {
	createAll(page, number = "first", alternate = false) {
		if (!number) throw new Error("Please define an id.");

		this.createContainer(number, alternate);
		this.createTextContent(page, number);
	},
	createContainer(number, alternate) {
		const id = `${number}QuoteSection`;
		const containerClass = alternate ? "alternateQuoteContainer" : "quoteContainer";
		const container = sectionMethods.createSectionContainer(id);
		container.classList.add(containerClass);
	},
	createTextContent(page, number) {
		const id = `${number}QuoteSection`;
		const container = document.getElementById(id);

		const text = textLibrary[page][id].content;
		const style = "quoteText";
		const p = build.p(text, style);

		container.append(p);
	},
};

const buildSpecialButtons = {
	createAll(page, sectionId) {
		this.createSectionContainer(sectionId);
		this.createHeader(page, sectionId);
		this.createButtonsContainer(page, sectionId);
		this.createButtons(page, sectionId);
	},
	createSectionContainer(sectionId) {
		const div = sectionMethods.createSectionContainer(sectionId);
		div.classList.add("specialButtonsSection");
	},
	createHeader(page, sectionId) {
		const container = document.getElementById(sectionId);
		const text = textLibrary[page][sectionId].header;
		const header = build.h3(text);
		container.append(header);
	},
	createButtonsContainer(page, sectionId) {
		const sectionDiv = document.getElementById(sectionId);
		const container = document.createElement("div");
		container.id = `${sectionId}ButtonsContainer`;
		container.classList.add(`specialButtonsContainer`, "scrollableX");
		if (page === "psicoterapia") container.style.gridTemplateColumns = "repeat(5, 15rem)";

		sectionDiv.append(container);
	},
	createButtons(page, sectionId) {
		const container = document.getElementById(`${sectionId}ButtonsContainer`);
		const textList = textLibrary[page][sectionId].buttons;
		const isHome = page === "home";

		const frag = document.createDocumentFragment();
		buttonProcedure();

		container.append(frag);

		function buttonProcedure() {
			for (const [index, [text, callback]] of textList.entries()) {
				const button = isHome ? build.buttonScrollTo(text, callback) : build.button(text, undefined, false);
				button.classList.add("specialButton");
				button.style.backgroundColor = colorLibrary.buttons[index];

				const imageSource = imageLibrary[page][sectionId][index].src;
				button.addEventListener("mouseover", () => {
					button.style.setProperty("--button-background-image", `url(${imageSource})`);
				});
				if (!isHome) button.addEventListener("click", callback);

				frag.append(button);
			}
		}
	},
};

const fixedScreen = {
	open() {
		const div = document.getElementById("fixedScreen");
		while (div.firstChild) div.firstChild.remove();

		div.classList.remove("displayNone");

		const isMobile = helper.isMobileScreen();
		addBlur();
		disallowScroll();
		backButton();
		setScrollPosition();

		function addBlur() {
			if (isMobile) return;
			const mainScreen = document.getElementById("mainScreen");
			mainScreen.style.filter = "blur(3px)";
		}
		function disallowScroll() {
			if (!isMobile) return;
			const body = document.body;
			body.style.overflow = "hidden";
		}
		function backButton() {
			if (!isMobile) return;
			history.pushState({isFixedScreenOpen: true}, "", location.href);
		}
		function setScrollPosition() {
			div.scrollTop = "0px";
		}
	},
	close() {
		const div = document.getElementById("fixedScreen");
		div.classList.add("displayNone");

		const isMobile = helper.isMobileScreen();
		removeBlur();
		allowScroll();
		backButton();

		function removeBlur() {
			if (isMobile) return;
			const mainScreen = document.getElementById("mainScreen");
			mainScreen.style.filter = "blur(0)";
		}
		function allowScroll() {
			if (!isMobile) return;
			const body = document.body;
			body.style.overflow = "unset";
		}
		function backButton() {
			if (!isMobile) return;
			if (history.state?.isFixedScreenOpen) history.back();
		}
	},
	createAll(pageId, ageRange) {
		this.open();
		this.createHeader(pageId, ageRange);
		this.createLeftDiv(pageId, ageRange);
		this.createRightDiv(pageId, ageRange);
	},
	createHeader(pageId, ageRange) {
		const fixedScreen = document.getElementById("fixedScreen");
		const container = document.createElement("div");

		const text = textLibrary[pageId].fixedScreen[ageRange].header;
		const header = build.h3(text);
		const closeButton = build.button("");
		closeButton.classList.add("xShape");
		if (helper.isMobileScreen()) closeButton.textContent = "Voltar";

		closeButton.addEventListener("click", () => this.close());
		container.append(header, closeButton);
		fixedScreen.append(container);
	},
	createLeftDiv(pageId, ageRange) {
		const fixedScreen = document.getElementById("fixedScreen");
		const container = document.createElement("div");
		const leftDiv = document.createElement("div");
		container.append(leftDiv);
		fixedScreen.append(container);

		const [subheader, text] = createContent();

		leftDiv.append(subheader, text);

		config();

		function config() {
			container.id = "fixedScreenContentContainer";
			leftDiv.classList.add("fixedScreenLeft", "dottedPattern");
		}
		function createContent() {
			const container = document.createElement("div");
			const textObject = textLibrary[pageId].fixedScreen[ageRange];
			const subheader = build.h4(textObject.subheader);

			const frag = sectionMethods.createContent(textObject.content);
			container.append(frag);
			return [subheader, container];
		}
	},
	createRightDiv(pageId, ageRange) {
		const container = document.getElementById("fixedScreenContentContainer");
		const rightDiv = document.createElement("div");
		rightDiv.classList.add("fixedScreenRight");
		container.append(rightDiv);

		const source = imageLibrary[pageId].fixedScreen[ageRange];
		const img = build.img(source);
		rightDiv.append(img);
	},
};

const buildFaq = {
	createAll(page, mirrored = false, number = "first") {
		this.createContainer(number);
		this.createHeader(page, mirrored, number);
		this.createContentDiv(page, number);
		this.createImageDiv(page, mirrored, number);
	},
	createContainer(number) {
		const container = sectionMethods.createSectionContainer(`${number}Faq`);
		container.classList.add("faq");
	},
	createHeader(page, mirrored, number) {
		const section = document.getElementById(`${number}Faq`);
		const textObject = textLibrary[page][`${number}Faq`];
		const header = build.h3(textObject.header);

		const contentContainer = document.createElement("div");
		contentContainer.id = `${number}FaqContentContainer`;
		contentContainer.classList.add("faqContentContainer");
		if (mirrored) contentContainer.classList.add("mirrored");
		section.append(header, contentContainer);
	},
	createContentDiv(page, number) {
		const section = document.getElementById(`${number}FaqContentContainer`);
		const container = document.createElement("div");
		container.classList.add("faqLeft");

		const textObject = textLibrary[page][`${number}Faq`];
		const contentObject = textObject.dropdown;
		const dropdownDiv = sectionMethods.createDropdownText(contentObject, number);

		container.append(dropdownDiv);
		section.append(container);
	},
	createImageDiv(page, mirrored, number) {
		const section = document.getElementById(`${number}FaqContentContainer`);
		const container = document.createElement("div");
		container.classList.add("faqRight");

		const mobileSize = 1024;
		const pageWidth = getComputedStyle(document.getElementById("mainScreen")).width;
		const parsedWidth = parseFloat(pageWidth);

		const exceptionPsicoterapiaMobile = page === "psicoterapia" && parsedWidth <= mobileSize;
		if (!exceptionPsicoterapiaMobile && mirrored) container.classList.add("rightMirrored");

		const imageList = imageLibrary[page][`${number}Faq`];
		const frag = document.createDocumentFragment();
		for (const image of imageList) {
			const img = build.img(image);
			frag.append(img);
		}

		container.append(frag);
		section.append(container);
	},
};
