"use strict";

window.imageLibrary = {};
window.linkLibrary = {};
window.iconLibrary = {};
window.textData = {};

async function loadData(lang = "pt-BR") {
	const [images, links, icons, text] = await Promise.all([
		fetch("data/images.json").then((r) => r.json()),
		fetch("data/links.json").then((r) => r.json()),
		fetch("data/icons.json").then((r) => r.json()),
		fetch(`data/${lang}.json`).then((r) => r.json()),
	]);

	imageLibrary = images;
	linkLibrary = links;
	iconLibrary = icons;

	textData = text;
}

const resolve = {
	wrapper(data, fn) {
		return Array.isArray(data) ? data.map(fn) : fn(data);
	},
	labelLink(data) {
		const {label, linkKey, linkType} = data;
		const link = linkType === "hash" ? linkKey : linkLibrary[linkKey];
		return [label, link];
	},
	labelIconLink(data) {
		const {label, iconKey, linkKey} = data;
		return [label, iconLibrary[iconKey], linkLibrary[linkKey]];
	},
	labelActionParameters(data) {
		const {label, action, parameters} = data;
		const actions = {
			fixedScreen: (...args) => fixedScreen.createAll(...args),
			buildTest: (...args) => buildTest[args[0]](...args.slice(1)),
		};
		return [label, () => actions[action](...parameters)];
	},
	quizItem(data) {
		const {question, answerKey, category} = data;
		return {question, answer: textData.quizAnswer[answerKey], category};
	},
};

resolve.config = {
	"header.buttons": resolve.labelLink,
	"footer.left.content": resolve.labelIconLink,
	"footer.centerTop.content": resolve.labelIconLink,
	"footer.centerBottom.content": resolve.labelIconLink,
	"footer.right.content": resolve.labelIconLink,
	"home.welcome.button": resolve.labelLink,
	"home.wellBeing.button": resolve.labelLink,
	"home.greetings.button": resolve.labelLink,
	"home.services.buttons": resolve.labelLink,
	"home.avaliacaoNeuropsicologica.button": resolve.labelLink,
	"home.reabilitacao.button": resolve.labelLink,
	"home.estimulacao.button": resolve.labelLink,
	"home.psicoterapia.button": resolve.labelLink,
	"home.palestras.button": resolve.labelLink,
	"home.aconselhamento.button": resolve.labelLink,
	"avaliacaoNeuropsicologica.ageRange.buttons": resolve.labelActionParameters,
	"psicoterapia.ageRange.buttons": resolve.labelActionParameters,
	"testeRapido.intro.button": resolve.labelActionParameters,
	"testeRapido.personSelection.buttons": resolve.labelActionParameters,
	"testeRapido.quiz.self": resolve.quizItem,
	"testeRapido.quiz.other": resolve.quizItem,
	"testeRapido.quiz.buttons": resolve.labelActionParameters,
	"testeRapido.result.button": resolve.labelLink,
	"404.button": resolve.labelLink,
};

function buildTextLibrary() {
	function build(data, path = "") {
		const isArray = Array.isArray(data);
		const isObject = data && typeof data === "object";

		if (isArray) return data.map((value, i) => build(value, `${path}[${i}]`));

		if (isObject) {
			const entries = Object.entries(data).map(([key, value]) => {
				const currentPath = path ? `${path}.${key}` : key;
				const resolveFn = resolve.config[currentPath];
				const resolved = resolveFn ? resolve.wrapper(value, resolveFn) : build(value, currentPath);
				return [key, resolved];
			});
			return Object.fromEntries(entries);
		}

		return data;
	}

	window.textLibrary = build(textData);
}
