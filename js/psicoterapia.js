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
		const thisPage = "psicoterapia";

		siteHeader.createAll();
		build.mainContainer();
		sidebarMenu.createAll();

		buildPageTitle.createAll(thisPage);
		buildQuote.createAll(thisPage);
		buildSpecialButtons.createAll(thisPage, "ageRange");
		buildFaq.createAll(thisPage, true);

		siteFooter.createAll();
	},
};
