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
		const thisPage = "testeRapido";

		siteHeader.createAll();
		build.mainContainer();
		sidebarMenu.createAll();

		buildPageTitle.createAll(thisPage);
		buildQuote.createAll(thisPage, "first");
		buildTest.createAll();

		siteFooter.createAll();
	},
};

const buildTest = {
	variables: {
		currentQuestion: 0,
		answerKey: {},
		targetPerson: undefined,

		results: {
			therapy: {
				minimum: 0,
				maximum: 0,
				result: 0,
			},
			assessment: {
				minimum: 0,
				maximum: 0,
				result: 0,
			},
		},
	},
	defineRandomArray() {
		const arr = Array.from({length: 20}, (_, i) => i + 1); // Create an array [1, 2, ..., 20]

		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
			[arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
		}

		return arr;
	},
	resetVariables() {
		const testVar = this.variables;
		testVar.currentQuestion = 0;
		testVar.answerKey = {};
		testVar.targetPerson = undefined;
		this.resetResults();
	},
	resetResults() {
		const testVar = this.variables;
		for (const value of Object.keys(testVar.results.therapy)) testVar.results.therapy[value] = 0;
		for (const value of Object.keys(testVar.results.assessment)) testVar.results.assessment[value] = 0;
	},
	createAll() {
		this.createContainer();
		this.createIntro();
	},
	createContainer() {
		const section = sectionMethods.createSectionContainer("quickTest");
		section.classList.add("quickTest");
	},
	createIntro() {
		const section = document.getElementById("quickTest");
		const container = document.createElement("div");
		const id = "quickTestContainer";
		container.id = id;
		container.classList.add(id);
		section.append(container);

		const {header, description, disclaimer, button: buttonObject} = textLibrary.testeRapido.intro;
		const h3 = buildHeader();
		const pDescription = buildDescription();
		const pDisclaimer = buildDisclaimer();
		const button = buildButton();
		container.append(h3, pDescription, pDisclaimer, button);

		function buildHeader() {
			const h3 = build.h3(header);
			return h3;
		}
		function buildDescription() {
			const p = build.p(description);
			return p;
		}
		function buildDisclaimer() {
			const pClass = "displayBlock";
			const p = build.p(disclaimer, pClass);
			return p;
		}
		function buildButton() {
			const [buttonText, callback] = buttonObject;
			const button = build.button(buttonText);
			button.addEventListener("click", callback);
			return button;
		}
	},
	createPersonSelection() {
		this.resetVariables();

		const container = document.getElementById("quickTestContainer");
		const textObject = textLibrary.testeRapido.personSelection;

		const [h3, h4] = createHeaders();
		const frag = createButtons();
		container.append(h3, h4, frag);

		function createHeaders() {
			const header = build.h3(textObject.header);
			header.classList.add("quickTestAlt");
			const subheader = build.h3(textObject.subheader);
			return [header, subheader];
		}
		function createButtons() {
			const container = document.createElement("div");
			container.classList.add("quickTestButtonsContainer");
			const frag = document.createDocumentFragment();
			textObject.buttons.forEach(([buttonText, callback]) => {
				const button = build.button(buttonText);
				button.addEventListener("click", () => {
					buildTest.eraseAllNodes();
					callback();
					buildTest.createQuestionNode();
				});
				frag.append(button);
			});
			container.append(frag);
			return container;
		}
	},
	createQuestionNode() {
		const target = this.variables.targetPerson;
		const container = document.getElementById("quickTestContainer");
		const currentQuestion = buildTest.variables.currentQuestion;
		const textObject = textLibrary.testeRapido.quiz;
		const textBlock = textObject[target][currentQuestion];

		const header = buildSubheader();
		const question = buildQuestion();
		const answers = buildAnswers();
		const buttons = buildButtons();
		const progressBar = buildProgressBar();
		const counter = build.p(`${currentQuestion + 1} / ${textObject[target].length}`, "justifyCenter");
		container.append(header, question, answers, buttons, progressBar, counter);

		markSelected();

		function buildSubheader() {
			const headerType = target === "self" ? "selfHeader" : "otherHeader";
			const text = textObject[headerType];
			const h4 = build.h4(text);
			return h4;
		}
		function buildQuestion() {
			const text = textBlock.question;
			const h3 = build.h3(text);
			return h3;
		}
		function buildAnswers() {
			const answers = textBlock.answer;
			const frag = document.createDocumentFragment();
			answers.forEach((answer, index) => {
				const text = `${index + 1}. ${answer}`;
				const label = build.labelRadio(text, index);
				frag.append(label);
			});
			return frag;
		}
		function buildButtons() {
			const buttonsText = textObject.buttons;
			const container = document.createElement("div");
			container.classList.add("quickTestButtonsContainer");
			const frag = document.createDocumentFragment();
			buttonsText.forEach(([buttonText, callback], index) => {
				const isLast = currentQuestion + 1 === textObject[target].length;
				if (index === 1 && isLast) return;
				if (index === 2 && !isLast) return;
				const button = build.button(buttonText);
				button.addEventListener("click", callback);
				frag.append(button);
			});
			container.append(frag);
			return container;
		}
		function buildProgressBar() {
			const percentage = ((currentQuestion + 1) / textObject[target].length) * 100;
			const div = document.createElement("div");
			div.classList.add("progressBar");
			div.style.setProperty("--pseudo-width", `${percentage}%`);

			return div;
		}
		function markSelected() {
			const previousAnswer = buildTest.variables.answerKey[`question${currentQuestion + 1}`];
			if (!previousAnswer) return;
			document.querySelector(`input[name="choice"][value="${previousAnswer.value}"]`).checked = true;
		}
	},
	createResults() {
		const container = document.getElementById("quickTestContainer");
		const textObject = textLibrary.testeRapido.result;
		const header = buildHeader();
		const text = buildContent();
		const buttons = buildButton();

		container.append(header, text, buttons);

		function buildHeader() {
			const header = build.h3(textObject.header);
			return header;
		}
		function buildContent() {
			const resultText = buildTest.evaluateResults();
			const pClass = "displayBlock";
			const p = build.p(resultText, pClass);
			return p;
		}
		function buildButton() {
			const [text, link] = textObject.button;
			const a = build.a(text, link, true);
			a.classList.add(accentA);
			return a;
		}
	},
	startTest() {
		this.eraseAllNodes();
		this.createPersonSelection();
	},
	selectTarget(target) {
		if (!["self", "other"].includes(target)) throw new Error(`Invalid function parameter "target": ${target}`);
		this.variables.targetPerson = target;
	},
	return() {
		this.eraseAllNodes();
		if (this.variables.currentQuestion === 0) return this.createPersonSelection();

		this.variables.currentQuestion--;
		this.createQuestionNode();
	},
	advance() {
		const radio = document.querySelector('input[name="choice"]:checked');
		if (!radio) return alert("Por favor, selecione uma opção.");

		this.saveAnswer();
		this.eraseAllNodes();

		this.variables.currentQuestion++;
		this.createQuestionNode();
	},
	finish() {
		this.saveAnswer();
		this.eraseAllNodes();
		this.calculateResults();
		this.createResults();
	},
	saveAnswer() {
		const {currentQuestion, targetPerson} = buildTest.variables;
		const radio = document.querySelector('input[name="choice"]:checked');
		if (!radio) return;

		this.variables.answerKey[`question${currentQuestion + 1}`] = {
			value: radio.value,
			category: textLibrary.testeRapido.quiz[targetPerson][currentQuestion].category,
		};
	},
	eraseAllNodes() {
		const container = document.getElementById("quickTestContainer");
		while (container.firstChild) container.firstChild.remove();
	},
	calculateResults() {
		this.resetResults();
		const {answerKey, results} = this.variables;

		Object.keys(answerKey).forEach((answer) => {
			const {category, value} = answerKey[answer];
			const valueNumber = Number(value);
			const answersPerQuestion = 5;

			category.forEach((element) => {
				results[element].minimum++;
				results[element].maximum += answersPerQuestion;
				results[element].result += valueNumber;
			});
		});
	},
	evaluateResults() {
		const resultsArray = ["notNeeded", "lowNeed", "moderateNeed", "highNeed"];
		const resultPerCategory = defineResultPerCategory();

		const {targetPerson} = buildTest.variables;
		const [textCategory, resultIndex] = defineTextCategory();
		const testResult = resultsArray[resultIndex];
		const text = textLibrary.testeRapido.result[targetPerson][textCategory][testResult];
		return text;

		function defineResultPerCategory() {
			const object = {};
			for (const category of Object.keys(buildTest.variables.results)) {
				const {minimum, result} = buildTest.variables.results[category];
				const lowest = result <= minimum * 2;
				const low = result <= minimum * 3;
				const mid = result <= minimum * 4;

				object[category] = defineResult();

				function defineResult() {
					if (lowest) return 0;
					if (low) return 1;
					if (mid) return 2;
					return 3;
				}
			}
			return object;
		}
		function defineTextCategory() {
			const {therapy, assessment} = resultPerCategory;
			const margin = 5;
			if (therapy > assessment + margin) return ["therapy", therapy];
			if (assessment > therapy + margin) return ["assessment", assessment];

			const higherCategory = therapy > assessment ? therapy : assessment;
			return ["both", higherCategory];
		}
	},
};
