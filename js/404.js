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
		const thisPage = "404";

		siteHeader.createAll();
		build.mainContainer();
		sidebarMenu.createAll();

		buildPageTitle.createAll(thisPage);
		buildButton.addButtonToTitle();

		siteFooter.createAll();
	},
};

const buildButton = {
	addButtonToTitle() {
		const section = document.getElementById("pageTitle");
		const [text, link] = textLibrary[404].button;
		const a = build.a(text, link);
		section.append(a);
	},
};
