document.addEventListener("DOMContentLoaded", async () => {
	await loadData();
	buildTextLibrary();
	meta.onLoad();
	emailJS.init();
	emailJS.onLoad();
});

const emailJS = {
	api: {
		publicKey: "mDrWsV-2nlFChx4PF",
		service: "service_db484f8",
		template: "template_527dpn4",
	},
	init() {
		emailjs.init({publicKey: this.api.publicKey});
	},
	onLoad() {
		document.getElementById("contactForm").addEventListener("submit", function (event) {
			event.preventDefault();
			const {service, template} = emailJS.api;
			emailjs.sendForm(service, template, this).then(
				() => {
					faleConosco.emailSuccess();
				},
				(error) => {
					faleConosco.emailFailure();
					console.log(error);
				},
			);
		});
	},
};

const meta = {
	onLoad() {
		this.createAll();

		eventListeners.createInitial();
	},
	createAll() {
		const thisPage = "contato";

		siteHeader.createAll();
		build.mainContainer();
		sidebarMenu.createAll();

		faleConosco.createAll();

		siteFooter.createAll();
	},
};

const faleConosco = {
	createAll() {
		this.createSection();
		this.createInfo();
		this.createForm();
	},
	createSection() {
		const divId = "faleConoscoContainer";
		const div = build.sectionContainer(divId);
		div.classList.add(divId, "boxShadow");
	},
	createInfo() {
		const parent = document.getElementById("faleConoscoContainer");
		const container = document.createElement("div");
		container.classList.add("contact");
		const {header, text, content} = textLibrary.contato.faleConosco;

		const headerContainer = document.createElement("div");
		const h3 = build.h3(header);
		const p = build.p(text);
		headerContainer.classList.add("contactHeader");

		const frag = document.createDocumentFragment();
		for (const {header, subheader, text, link} of content) {
			const card = document.createElement("a");
			const h3 = build.h3(header);
			const p = build.p(text);
			card.href = linkLibrary[link];
			card.target = "_blank";
			card.append(h3, p);
			frag.append(card);
		}

		headerContainer.append(h3, p);
		container.append(headerContainer, frag);
		parent.append(container);
	},
	createForm() {
		const parent = document.getElementById("faleConoscoContainer");
		const container = document.createElement("form");
		const {header, text, campos, sendButton} = textLibrary.contato.formulário;
		container.id = "contactForm";
		container.classList.add("contactForm", "boxShadow");
		parent.append(container);

		createFormHeader();
		createFormContent();

		function createFormHeader() {
			const headerContainer = document.createElement("div");
			const h3 = build.h3(header);
			const p = build.p(text);
			headerContainer.classList.add("contactFormHeader");

			headerContainer.append(h3, p);
			container.append(headerContainer);
		}

		function createFormContent() {
			const frag = document.createDocumentFragment();
			for (const {label, id, name, placeholder, type, required, minLength, maxLength, pattern, title} of campos) {
				const labelContainer = document.createElement("div");
				labelContainer.classList.add("formGroup");
				const labelElement = build.label(label);

				const isInput = label !== "Mensagem *";

				const element = isInput ? build.input() : build.textArea();
				!isInput && element.classList.add("messageInput");
				const atributos = {id, name, placeholder, type, required, minLength, maxLength, pattern, title};
				Object.entries(atributos).forEach(([key, value]) => {
					if (!value) return;
					element[key] = value;
				});

				labelContainer.append(labelElement, element);
				frag.append(labelContainer);
			}

			const button = build.button(sendButton.text);
			button.classList.add("buttonStyleBlue");
			button.type = "submit";
			container.append(frag, button);
		}
	},
	emailSuccess() {
		this.createPopup();
		this.popupContent();
		this.clearFormContent();
	},
	emailFailure() {
		this.createPopup();
		this.popupContent(false);
	},
	clearFormContent() {
		document.querySelector("form").reset();
	},
	createPopup() {
		const parent = document.querySelector("body");
		const container = document.createElement("div");
		container.classList.add("emailPopup", "boxShadow");

		const closeButton = build.closeButton();
		closeButton.classList.add("closeButton");
		closeButton.addEventListener("click", () => faleConosco.removePopUp());

		container.append(closeButton);
		parent.append(container);

		this.toggleMainScreenFilter();
	},
	removePopUp() {
		const container = document.querySelector(".emailPopup");
		container.remove();
		this.toggleMainScreenFilter();
	},
	toggleMainScreenFilter() {
		const mainScreen = document.getElementById("body");
		mainScreen.classList.toggle("bodyBefore");
	},
	popupContent(submitSuccessful = true) {
		const container = document.querySelector(".emailPopup");
		const {success, failure} = textLibrary.contato.emailPopup;
		console.log(success, failure);

		const {header, text, icon} = submitSuccessful === true ? success : failure;
		const img = build.img(iconLibrary[icon]);
		const h2 = build.h2(header);
		const p = build.p(text);

		container.append(img, h2, p);
	},
};
