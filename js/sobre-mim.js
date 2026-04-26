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
		const thisPage = "sobreMim";

		siteHeader.createAll();
		build.mainContainer();
		sidebarMenu.createAll();

		greetings.createAll();
		buildQuote.createAll(thisPage, "first");
		buildTimeline.createAll(thisPage, "first");
		buildTimeline.createAll(thisPage, "second", true);
		buildTimeline.createAll(thisPage, "third");

		siteFooter.createAll();
	},
};

const greetings = {
	createAll() {
		this.createContainer();
		this.createTextContent();
		this.createButtons();
	},
	createContainer() {
		const container = sectionMethods.createSectionContainer("greetings");
		container.classList.add("aboutMeGreetings");
	},
	createTextContent() {
		const section = document.getElementById("greetings");

		buildImage();
		buildHeader();

		function buildImage() {
			const container = document.createElement("div");
			container.classList.add("polkaDotsPattern");
			const source = imageLibrary.sobreMim.greetings;
			const img = build.img(source);

			container.append(img);
			section.append(container);
		}
		function buildHeader() {
			const container = document.createElement("div");
			container.id = "greetingsContainer";
			const textObject = textLibrary.sobreMim.greetings;
			const preH2 = build.h4(textObject.preHeader);
			const h2 = build.h2(textObject.header);

			container.append(preH2, h2);
			section.append(container);
		}
	},
	createButtons() {
		const container = document.getElementById("greetingsContainer");
		const aContainer = document.createElement("nav");
		const textArray = textLibrary.sobreMim.greetings.buttons;
		const linkArray = [linkLibrary.lattes, linkLibrary.instagram];

		for (const [index, item] of textArray.entries()) {
			const a = build.a(item, linkArray[index], null, true);
			a.classList.add("accentA");
			aContainer.append(a);
		}

		container.append(aContainer);
	},
};
