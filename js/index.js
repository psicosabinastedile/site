"use strict";

document.addEventListener("DOMContentLoaded", async () => {
	await loadData();
	buildTextLibrary();
	meta.onLoad();
});

const meta = {
	onLoad() {
		this.createAll();

		eventListeners.createInitial();
	},
	createAll() {
		const thisPage = "home";

		siteHeader.createAll();
		build.mainContainer();
		sidebarMenu.createAll();

		welcome.createAll();
		wellBeing.createAll();
		greetings.createAll();
		buildSpecialButtons.createAll(thisPage, "services");
		buildInformationCard.createAll(thisPage, "avaliacaoNeuropsicologica", "left");
		buildInformationCard.createAll(thisPage, "reabilitacao", "right");
		buildInformationCard.createAll(thisPage, "estimulacao", "left");
		buildInformationCard.createAll(thisPage, "psicoterapia", "right");
		buildInformationCard.createAll(thisPage, "palestras", "left");
		buildInformationCard.createAll(thisPage, "aconselhamento", "right");

		siteFooter.createAll();
	},
};

const welcome = {
	createAll() {
		this.createSectionContainer();
		this.createLeftSide();
		this.createRightSide();
		this.createRightSideContainer();
	},
	createSectionContainer() {
		const div = build.sectionContainer("welcome");
		div.classList.add("welcome");
	},
	createLeftSide() {
		const container = document.getElementById("welcome");
		const leftSide = document.createElement("div");
		leftSide.classList.add("welcomeLeft");
		container.append(leftSide);

		createImage();

		function createImage() {
			const source = imageLibrary.home.welcome;
			const img = build.img(source);
			img.classList.add("gradientBorder");
			leftSide.append(img);
		}
	},
	createRightSide() {
		const container = document.getElementById("welcome");
		const rightSide = document.createElement("div");
		container.append(rightSide);

		rightSide.id = "welcomeRight";
		rightSide.classList.add("welcomeRight");
	},
	createRightSideContainer() {
		const rightSide = document.getElementById("welcomeRight");

		buildHeader();
		buildTextContent();
		buildButtons();

		function buildHeader() {
			const text = textLibrary.home.welcome;
			const h2 = build.h2(text.header);
			const h4 = build.h4(text.subheader);
			rightSide.append(h2, h4);
		}
		function buildTextContent() {
			const p = build.p(textLibrary.home.welcome.content);
			rightSide.append(p);
		}
		function buildButtons() {
			const buttonContainer = document.createElement("div");

			const [text, link] = textLibrary.home.welcome.button;
			const a = build.a(text, link);
			a.classList.add("accentA");
			buttonContainer.append(a);
			rightSide.append(buttonContainer);
		}
	},
};

const wellBeing = {
	createAll() {
		this.createSectionContainer();
		this.createLeftSide();
		this.createRightSide();
	},
	createSectionContainer() {
		const div = build.sectionContainer("wellBeing");
		div.classList.add("wellBeing");
	},
	createLeftSide() {
		const parentDiv = document.getElementById("wellBeing");
		const container = document.createElement("div");
		parentDiv.append(container);

		container.classList.add("wellBeingLeft");

		const {header, text} = textLibrary.home.wellBeing;
		const h3 = build.h3(header);
		const p = build.p(text);
		container.append(h3, p);
	},
	createRightSide() {
		const parentDiv = document.getElementById("wellBeing");
		const container = document.createElement("div");
		parentDiv.append(container);

		container.classList.add("wellBeingRight", "dottedPattern");

		buildContent();

		function buildContent() {
			const {
				subheader,
				button: [buttonText, link],
			} = textLibrary.home.wellBeing;
			const h3 = build.h3(subheader);
			const a = build.a(buttonText, link);
			a.classList.add("accentA");

			container.append(h3, a);
		}
	},
};

const greetings = {
	createAll() {
		this.createSectionContainer();
		this.createLeftSide();
		this.createRightSide();
	},
	createSectionContainer() {
		const div = build.sectionContainer("greetings");
		div.classList.add("greetings");
	},
	createLeftSide() {
		const container = document.getElementById("greetings");
		const leftSide = document.createElement("div");
		container.append(leftSide);

		leftSide.classList.add("greetingsLeft");

		buildImage();

		function buildImage() {
			const source = imageLibrary.home.greetings;
			const img = build.img(source);
			leftSide.append(img);
		}
	},
	createRightSide() {
		const container = document.getElementById("greetings");
		const rightSide = document.createElement("div");
		container.append(rightSide);

		rightSide.classList.add("greetingsRight");

		const {header, subHeader, content} = textLibrary.home.greetings;
		buildHeader();
		buildTextContent();
		buildButton();

		function buildHeader() {
			const h2 = build.h2(header);
			const h4 = build.h4(subHeader);
			rightSide.append(h2, h4);
		}
		function buildTextContent() {
			const p = build.p(content);
			rightSide.append(p);
		}
		function buildButton() {
			const buttonContainer = document.createElement("div");
			const [text, link] = textLibrary.home.greetings.button;
			const a = build.a(text, link);
			a.classList.add("accentA");

			buttonContainer.append(a);
			rightSide.append(buttonContainer);
		}
	},
};
