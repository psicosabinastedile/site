"use strict";

const colorLibrary = {
	buttons: ["#d4e2e7", "#c8a8b9", "#c8cdcb", "#cbb8dc"],
};

const imageLibrary = {
	header: {
		logo: {src: "assets/icons/logo.webp", alt: "Logo Sabina M. Stedile, psicóloga clínica, CRP: 07/40927."},
	},
	home: {
		welcome: {
			src: "assets/images/internal/home_2023_welcome.webp",
			alt: "Psicóloga Sabina Stedile sorrindo, com olhar tranquilo.",
		},
		greetings: {
			src: "assets/images/internal/home_2023_salãoDeBeleza.webp",
			alt: "Sabina Stedile sorrindo de lado, com expressão serena.",
		},
		services: [
			{
				src: "../assets/images/external/home_avaliacaoNeuropsicologica.jpg",
				alt: "Mulher segurando caneta e prancheta, vista por trás da avaliadora.",
			},
			{
				src: "../assets/images/external/home_psicoterapia.jpg",
				alt: "Mulher angustiada em sessão de psicoterapia, pela visão da psicóloga.",
			},
			{
				src: "../assets/images/external/home_palestra.webp",
				alt: "Múltiplas pessoas sentadas em cadeiras assistindo a uma palestra, pela visão do palestrante.",
			},
			{
				src: "../assets/images/external/home_aconselhamentoDePais.jpg",
				alt: "Uma criança com expressão emburrada sentada no chão com um brinquedo na mão, em um consultório.",
			},
		],
	},
	sobreMim: {
		greetings: {src: "assets/images/internal/sobreMim_header.webp", alt: "Sabina sorrindo para a câmera."},
		firstTimelineSection: [
			{
				src: "assets/images/internal/sobreMim_inovamundi_2019.jpg",
				alt: "Sabina apresentando um trabalho em slides sobre envelhecimento bem-sucedido no Inovamundi.",
			},
			{
				src: "assets/images/internal/sobreMim_estagio_feevale.jpg",
				alt: "Sabina ao lado do logo do Centro Integrado de Psicologia da Universidade Feevale.",
			},
		],
		secondTimelineSection: [
			{
				src: "assets/images/internal/sobreMim_ultimoSemestre.jpg",
				alt: "Sabina segurando livros sorrindo para a câmera, sentada na grama em frente ao logo da Universidade Feevale.",
			},
			{
				src: "assets/images/internal/sobreMim_chimarrao.webp",
				alt: `Chimarrão em foco e, ao fundo, o livro "Fadas no Divã".`,
			},
		],
		today: [
			{
				src: "assets/images/internal/sobreMim_atendimentoOnline.jpg",
				alt: "Sabina trabalhando atenta no computador.",
			},
			{
				src: "assets/images/internal/sobreMim_atendimentoPresencial.webp",
				alt: "Consultório clínico, na visão da psicóloga.",
			},
			{
				src: "assets/images/internal/sobreMim_livroInfancia.webp",
				alt: `Livro "A Infância Através do Espelho", em cima de uma mesa.`,
			},
		],
	},
	avaliacaoNeuropsicologica: {
		ageRange: [
			{
				src: "../assets/images/external/avaliacaoNeuropsicologica_preEscolar.jpg",
				alt: "Criança no chão, de bruços brincando com cubos de montar.",
			},
			{
				src: "../assets/images/external/avaliacaoNeuropsicologica_escolar.jpg",
				alt: "Criança desenhando em uma oficina de desenhos.",
			},
			{
				src: "../assets/images/external/avaliacaoNeuropsicologica_adultez.jpg",
				alt: "Jovem lendo um livro sentada em uma cadeira, em frente a uma escrivaninha.",
			},
			{
				src: "../assets/images/external/avaliacaoNeuropsicologica_envelhecimento.webp",
				alt: "Dois idosos felizes, sorrindo para a câmera.",
			},
		],
		firstFaq: [
			{
				src: "assets/images/external/avaliacaoNeuropsicologica_teenager.webp",
				alt: "Adolescente angustiada em sessão de psicoterapia, visão da psicóloga.",
			},
			{
				src: "assets/images/external/avaliacaoNeuropsicologica_happyChild.webp",
				alt: "Criança brincando com blocos de montar sendo avaliada pela neuropsicóloga.",
			},
		],
		fixedScreen: {
			preEscolar: {
				src: "assets/images/external/avaliacaoNeuropsicologica_preEscolar_popup.jpg",
				alt: "Criança escondendo-se parcialmente atrás de um sofá.",
			},
			escolar: {
				src: "assets/images/external/avaliacaoNeuropsicologica_escolar_popup.jpg",
				alt: "Duas crianças com livros na cabeça sentadas em um muro, sorrindo uma para a outra.",
			},
			adultez: {
				src: "assets/images/external/avaliacaoNeuropsicologica_adultez_popup.jpg",
				alt: "Adolescente lendo um livro, olhando para a câmera.",
			},
			envelhecimento: {
				src: "assets/images/external/avaliacaoNeuropsicologica_envelhecimento_popup.jpg",
				alt: "Idosos abraçados em uma sacada de um prédio, olhando pela janela.",
			},
		},
		secondFaq: [
			{
				src: "assets/images/external/avaliacaoNeuropsicologica_benefits.webp",
				alt: "Adolescente angustiada em sessão de psicoterapia, visão da psicóloga.",
			},
		],
	},
	psicoterapia: {
		ageRange: [
			{
				src: "../assets/images/external/psicoterapia_infancia.jpg",
				alt: "Criança feliz correndo sobre a grama em direção à câmera.",
			},
			{
				src: "../assets/images/external/psicoterapia_adolescencia.jpg",
				alt: "Adolescente atentiva mexendo no celular.",
			},
			{
				src: "../assets/images/external/psicoterapia_jovemAdultez.jpg",
				alt: "Jovem em cima do muro observando a paisagem.",
			},
			{
				src: "../assets/images/external/psicoterapia_adultezMadura.jpg",
				alt: "Senhora sorrindo para a câmera.",
			},
			{
				src: "../assets/images/external/psicoterapia_adultezTardia.jpg",
				alt: "Senhora sorrindo de lado.",
			},
		],
		fixedScreen: {
			infancia: {
				src: "assets/images/external/psicoterapia_infancia_popup.jpg",
				alt: "Três crianças sorrindo felizes.",
			},
			adolescencia: {
				src: "assets/images/external/psicoterapia_adolescencia_popup.jpg",
				alt: "Adolescente feliz de boné escutando música.",
			},
			jovemAdultez: {
				src: "assets/images/external/psicoterapia_jovemAdultez_popup.jpg",
				alt: "Jovem sorridente com beca de formatura.",
			},
			adultezMadura: {
				src: "assets/images/external/psicoterapia_adultezMadura_popup.jpg",
				alt: "Casal de adultos fazendo piquenique no parque.",
			},
			adultezTardia: {
				src: "assets/images/external/psicoterapia_adultezTardia_popup.jpg",
				alt: "Idosa com expressão ponderativa.",
			},
		},
		firstFaq: [
			{
				src: "assets/images/external/psicoterapia_sofrimento.jpg",
				alt: "Mulher em sofrimento com as mãos sobre o rosto.",
			},
			{
				src: "assets/images/external/psicoterapia_consultaJovem.webp",
				alt: "Adolescente sentada em uma poltrona com expressão preocupada durante uma sessão de psicoterapia.",
			},
		],
	},
};

const iconLibrary = {
	sidebarButton: {src: "assets/icons/menu.png"},
	leftCarouselButton: {src: "assets/icons/leftCarouselButton.svg"},
	rightCarouselButton: {src: "assets/icons/rightCarouselButton.svg"},
	email: {src: "assets/icons/email.png", alt: "Ícone de e-mail"},
	instagram: {src: "assets/icons/instagram.png", alt: "Ícone do Instagram"},
	linkedin: {src: "assets/icons/linkedin.png", alt: "Ícone do LinkedIn"},
	menu: {src: "assets/icons/menu.png", alt: "Ícone de menu"},
	phone: {src: "assets/icons/phone.png", alt: "Ícone de telefone"},
	pin: {src: "assets/icons/pin.png", alt: "Ícone de pin"},
	smallLogo: {src: "assets/icons/smallLogo.webp", alt: "Logotipo"},
	whatsapp: {src: "assets/icons/whatsapp.png", alt: "Ícone do Whatsapp"},
	world: {src: "assets/icons/world.png", alt: "Ícone do planeta Terra"},
	youtube: {src: "assets/icons/youtube.png", alt: "Ícone do Youtube"},
};

const linkLibrary = {
	internal: {
		home: "/",
		sobreMim: "sobre-mim.html",
		avaliacaoNeuropsicologica: "avaliacao-neuropsicologica.html",
		psicoterapia: "psicoterapia.html",
		testeRapido: "teste-rapido.html",
		email: "mailto:psicosabinastedile@gmail.com",
	},
	external: {
		instagram: "https://www.instagram.com/psicosabinastedile",
		linkedin: "https://www.linkedin.com/in/sabina-stedile-73b738167/",
		whatsapp: "https://wa.me/5551998990016",
		youtube: "https://youtube.com/@psicosabinastedile?si=SDraORFM41unz0n2",
	},
};

const quizAnswerLibrary = {
	frequencySelf: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
	frequencyOther: [
		"Nunca observei",
		"Raramente observo",
		"Às vezes observo",
		"Frequentemente observo",
		"Sempre observo",
	],
};

const textLibrary = {
	header: {
		buttons: [
			["Home", linkLibrary.internal.home],
			["Sobre mim", linkLibrary.internal.sobreMim],
			["Avaliação Neuropsicológica", linkLibrary.internal.avaliacaoNeuropsicologica],
			["Psicoterapia", linkLibrary.internal.psicoterapia],
			["Contato", "footer"],
		],
	},
	footer: {
		left: {
			header: "Redes Sociais",
			content: [
				["@psicosabinastedile", iconLibrary.instagram, linkLibrary.external.instagram],
				["Sabina Stedile", iconLibrary.linkedin, linkLibrary.external.linkedin],
				["Psicóloga Sabina Stedile", iconLibrary.youtube, linkLibrary.external.youtube],
			],
		},
		centerTop: {
			header: "Atendimentos Presenciais",
			content: [
				["Novo Hamburgo - Centro", iconLibrary.pin],
				["Ivoti - Centro", iconLibrary.pin],
			],
		},
		centerBottom: {
			header: "Online",
			content: [["Qualquer lugar do mundo!", iconLibrary.world]],
		},
		right: {
			header: "Contato",
			content: [
				["+55 (51) 99899-0016", iconLibrary.phone],
				["psicosabinastedile@gmail.com", iconLibrary.email, linkLibrary.internal.email],
			],
		},
		credits: "©2025 por Wagner Thiele Fracassi\nTodos direitos reservados",
	},
	home: {
		welcome: {
			header: "Seja bem-vindo(a)!",
			subheader: "Sou Sabina Maria Stedile, psicóloga clínica, pesquisadora e especialista em neuropsicologia",
			/* content:
				"Trabalho com avaliação neuropsicológica de pacientes a partir dos dois anos de idade, e com psicoterapia individual de orientação psicanalítica.", */
			button: ["Agende sua consulta!", linkLibrary.external.whatsapp],
		},
		wellBeing: {
			header: "Sua saúde e bem-estar são importantes",
			text: [
				"Acredito que cada pessoa carrega uma história única, e meu compromisso é acolher essa história com respeito, escuta atenta e um olhar curioso, sem julgamentos. Seja na psicoterapia ou na avaliação neuropsicológica, busco criar um espaço seguro em que você possa expressar-se livremente e encontrar clareza sobre si mesmo.",
				/* "Enquanto a avaliação neuropsicológica tem o objetivo de mapear o funcionamento cognitivo de uma pessoa, ajudando a compreender se suas características estão alinhadas a um diagnóstico, a psicoterapia oferece um espaço para explorar suas emoções, pensamentos e comportamentos, auxiliando na construção de um funcionamento mais saudável no mundo.", */
				"Caso você tem dúvidas sobre qual serviço pode ser mais benéfico para você neste momento, disponibilizei um teste rápido e gratuito que pode te ajudar a encontrar um caminho mais claro para sua necessidade.",
			],
			subheader: "O que é mais indicado para mim neste momento?",
			button: ["Faça um teste gratuito!", linkLibrary.internal.testeRapido],
		},
		greetings: {
			header: "Sobre a minha pessoa",
			/* 	subHeader: "Sou psicóloga clínica, neuropsicóloga e pesquisadora",*/ content: [
				"Desde pequena, sempre fui apaixonada por histórias, sejam elas de ficção, como livros, filmes e séries, ou da vida real, contadas pelos meus familiares sobre tempos passados. Acho que sempre me fascinou o que essas histórias me faziam sentir. Também sempre gostei de registrar momentos através da fotografia e de conhecer diferentes culturas e formas de ver o mundo.",
				"Durante minha infância e adolescência, sonhava em escrever e contar histórias. Hoje, percebo que minha atuação como psicóloga me permite fazer isso de uma maneira muito especial: ajudando pessoas a reconstruírem suas próprias narrativas. Me sinto honrada em acompanhar cada jornada, testemunhar processos de transformação e ver alguém redescobrir o amor por si mesmo.",
				/* "Trabalhar com a mente humana significa estar em contato direto com vulnerabilidades profundas — e sei o quão difícil é para alguém se permitir estar nesse lugar. Por isso, encaro como um verdadeiro tesouro cada história que me é confiada.", */
			],
			button: ["Saiba mais sobre mim!", linkLibrary.internal.sobreMim],
		},
		services: {
			header: "Serviços Oferecidos",
			buttons: [
				["Avaliação\nNeuropsicológica", "avaliacaoNeuropsicologica"],
				["Psicoterapia", "psicoterapia"],
				["Palestras", "outrosServicos"],
				["Aconselhamento\nde Pais", "outrosServicos"],
			],
		},
		avaliacaoNeuropsicologica: {
			header: "Avaliação\nNeuropsicológica",
			content: [
				{
					subheader: "O que é?",
					text: "Trata-se de um processo avaliativo que tem como objetivo descrever e avaliar o perfil cognitivo, comportamental e emocional de pacientes que estejam apresentando dificuldades em suas atividades de vida diária. Através da avaliação é possível detectar a presença de prejuízos cognitivos e, assim, estabelecer um protocolo de tratamento personalizado, com base nas características de cada paciente.",
				},
				/* {
					subheader: "Para quem é?",
					text: "É indicada para crianças, adolescentes, adultos e idosos que apresentam dificuldades cognitivas, comportamentais ou emocionais. O processo não apenas auxilia no diagnóstico de transtornos do neurodesenvolvimento (ex. TDAH, TEAp, TEA) e transtornos neurocognitivos (ex. Alzheimer), como também possibilita uma compreensão detalhada do funcionamento cerebral e suas implicações no dia a dia.",
				},
				{
					subheader: "Por que é importante?",
					text: "O processo avaliativo orienta intervenções personalizadas, promove estratégias para superar desafios e auxilia no planejamento educacional, profissional ou terapêutico. Além disso, oferece suporte valioso para familiares e profissionais envolvidos, ajudando a criar ambientes e abordagens mais adequados às necessidades do indivíduo.",
				},*/
			],
			button: [
				["Mais informações", linkLibrary.internal.avaliacaoNeuropsicologica],
				["Agende sua consulta!", linkLibrary.external.whatsapp],
			],
		},
		psicoterapia: {
			header: "Psicoterapia\nIndividual",
			content: [
				{
					subheader: "O que é?",
					text: "Trata-se de um processo terapêutico no qual o paciente, junto com um profissional qualificado, explora seus pensamentos, sentimentos e comportamentos para compreender e lidar com desafios emocionais, relacionais ou psicológicos.",
				},
				{
					subheader: "Sobre a abordagem teórica: Psicoterapia de Orientação Psicanalítica",
					text: "Esta é uma das muitas abordagens existentes dentro da psicologia. Utiliza métodos terapêuticos, como a associação livre, em que o paciente fala abertamente sobre seus pensamentos e sentimentos, e a análise da transferência, que examina as emoções e expectativas projetadas no terapeuta.",
				},
				/* {
					subheader: "Quando a psicoterapia é indicada e como ela pode te auxiliar?",
					text: "É indicada em momentos de sofrimento emocional, dificuldades nos relacionamentos, crises pessoais ou busca por autoconhecimento. Ela auxilia ao oferecer um espaço seguro para explorar emoções, identificar padrões de comportamento, compreender conflitos internos e desenvolver estratégias para lidar com desafios, promovendo equilíbrio emocional e bem-estar.",
				}, */
			],
			button: [
				["Mais informações", linkLibrary.internal.psicoterapia],
				["Agende sua consulta!", linkLibrary.external.whatsapp],
			],
		},
		outrosServicos: {
			header: "Outros Serviços",
			content: [
				{
					subheader: "Palestras",
					text: "Ofereço palestras voltadas para escolas, empresas e comunidades, abordando temas relacionados à saúde mental, desenvolvimento cognitivo e emocional, transtornos do neurodesenvolvimento e estratégias de enfrentamento para o dia a dia. Elas são personalizadas para atender às necessidades e interesses específicos de cada público, promovendo conhecimento e sensibilização para questões importantes na vida pessoal e profissional.",
				},
				{
					subheader: "Aconselhamento para Pais",
					text: "Normalmente indicado após a avaliação psicológica, o aconselhamento para pais é um espaço dedicado a orientá-los sobre os desafios relacionados ao desenvolvimento cognitivo, emocional e comportamental de seus filhos. Com base nas particularidades de cada família, ofereço estratégias práticas e informações embasadas para lidar com dificuldades como ansiedade, manejo de comportamentos desafiadores, e apoio ao aprendizado e à socialização. O objetivo é fortalecer o vínculo familiar e capacitar os pais para promover o bem-estar e o desenvolvimento saudável de seus filhos.",
				},
			],
			button: [["Entre em contato!", linkLibrary.external.whatsapp]],
		},
		comments: {
			header: "Depoimentos",
			carousel: [
				{
					header: "A.B.C.",
					content: "A Sabina é uma excelente profissional, recomendo muito!",
				},
				{
					header: "D.E.",
					content: "A Sabina é uma profissional incrível!",
				},
				{
					header: "W.T.F.",
					content:
						"Além de uma profissional com muito conhecimento técnico e experiência, é uma ótima pessoa, me deixando confortável em todos os momentos.",
				},
				{
					header: "M.G.A.",
					content:
						"Fui muito bem atendida durante todos os momentos. Tive uma excelente experiência! Recomendo 10/10!",
				},
			],
		},
	},
	sobreMim: {
		greetings: {
			preHeader: "Muito prazer, sou",
			header: "Sabina Maria Stedile!",
		},
		firstQuoteSection: {
			content: `"Considero as memórias a maior riqueza que um ser humano pode acumular ao longo da vida;\npor esse motivo, dou muito valor às narrativas trazidas para mim."`,
		},
		firstTimelineSection: {
			header: "Como tudo começou...",
			content: [
				"Em 2016 ingressei no curso de psicologia sem saber ao certo o que esperar. Afinal, aos 18 anos, é normal termos mais dúvidas do que certezas quanto ao nosso futuro.",
				"Entre 2016 e 2017 estagiei como apoio à inclusão em uma escola municipal da minha cidade. Foi uma experiência muito enriquecedora pois me fez compreender como a neurodiversidade é fascinante. Cada pessoa sente e percebe o mundo de formas distintas!",
				"Em 2017 ingressei em um grupo de pesquisa, que foi um verdadeiro divisor de águas na minha profissão, pois foi através dele que conheci a neuropsicologia e descobri a minha melhor versão.",
				"Desde então, participei de muitos eventos científicos, apresentei trabalhos e conheci pessoas incríveis que mudaram a forma com a qual eu vejo o mundo.",
				"Uma dessas pessoas foi a Profa. Dra. Geraldine Alves dos Santos, que, muito mais do que minha orientadora de TCC, tem sido o exemplo da pesquisadora que quero me tornar.",
			],
		},
		secondTimelineSection: {
			content: [
				"Em 2019 tive o privilégio de me tornar bolsista remunerada pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq).",
				"Em 2020 estava me preparando para adentrar a reta final da graduação. Contudo, a pandemia do Covid-19 frustrou meus planos.",
				`Jamais me esquecerei da sensação de eu - e toda a população - ter sido forçada a "pisar no freio", em um período que parecia nos reservar vivências incríveis. Sem dúvida, foi um ano em que amadureci muito.`,
				"No ano de 2022, realizei minhas primeiras avaliações neuropsicológicas durante o período de estágio profissionalizante. Foi e tem sido uma experiência incrível, pois cada paciente é um universo diferente do outro. Dessa forma, sempre me surpreendo com a capacidade do ser humano de se reinventar perante adversidades.",
			],
		},
		today: {
			header: "Minhas narrativas atuais...",
			content: [
				"Sigo atuando como pesquisadora no Centro Interdisciplinar de Pesquisas em Gerontologia da Universidade Feevale, dando continuidade ao meu compromisso com a ciência e o conhecimento.",
				"Concluí minha especialização em Neuropsicologia pela Faculdade Líbano, ampliando ainda mais minha compreensão sobre o funcionamento da mente humana.",
				"Realizei um sonho que nasceu ainda na iniciação científica da graduação: ingressar no mestrado em Psicologia como bolsista CAPES, um passo importante na minha trajetória acadêmica e profissional.",
				"Atualmente, atendo presencialmente em Ivoti, na Clínica Desenvolver, e em Novo Hamburgo, na Rua Bento Gonçalves — ambas no Rio Grande do Sul — oferecendo um espaço acolhedor para aqueles que buscam apoio psicológico e neuropsicológico",
			],
		},
	},
	avaliacaoNeuropsicologica: {
		pageTitle: {
			header: "Avaliação Neuropsicológica",
			subheader: "Entenda mais sobre o processo avaliativo e como ele pode te ajudar!",
			button: "Agende sua consulta!",
		},
		firstFaq: {
			header: "Perguntas Frequentes",
			dropdown: [
				{
					header: "O que é uma avaliação neuropsicológica?",
					content:
						"A avaliação neuropsicológica é um processo detalhado que investiga o funcionamento cognitivo, emocional e comportamental de um indivíduo, com o objetivo de compreender suas potencialidades e dificuldades.\n\nPor meio de entrevistas, testes padronizados e observações clínicas, são analisadas funções como memória, atenção, linguagem, raciocínio, habilidades motoras e sociais.\n\nO processo fornece informações essenciais para diagnósticos, planejamento de intervenções e orientações personalizadas para melhorar a qualidade de vida em diferentes contextos, como escolar, familiar, profissional e de saúde.",
				},
				{
					header: "A partir de qual idade pode ser feita uma avaliação neuropsicológica?",
					content:
						"Um paciente pode ser submetido ao processo de avaliação neuropsicológica desde os primeiros anos de vida, geralmente a partir dos 2 anos de idade, dependendo da demanda clínica e das condições do desenvolvimento da criança.",
				},
				{
					header: "Qual é a faixa etária que eu atendo?",
					content: "Atendo pacientes a partir dos dois anos de idade.",
				},
				{
					header: "Qual é a duração total do processo avaliativo?",
					content:
						"Isso dependerá do nível de complexidade de cada caso, mas, normalmente, uma avaliação neuropsicológica leva entre 7 e 10 atendimentos, pois além da aplicação de testagens no paciente, busca-se ampliar as informações sobre o avaliado através de entrevistas com fontes subsidiárias (escola, familiar, outros profissionais). Por esse motivo, o número de sessões pode variar.",
				},
				{
					header: `Qual é a diferença da avaliação "neuropsicológica" para "neurológica"?`,
					content:
						"A diferença está no foco, nos métodos e nos objetivos de cada processo, embora ambas sejam importantes para compreender o funcionamento do sistema nervoso.\n\nA avaliação neuropsicológica foca no impacto funcional e comportamental de alterações cerebrais, enquanto a avaliação neurológica é direcionada à detecção de causas orgânicas dessas alterações.\n\nAmbas podem ser complementares: o neurologista pode identificar uma lesão cerebral, e o neuropsicólogo avalia como essa lesão afeta as funções cognitivas e o comportamento.",
				},
				{
					header: `Qual é a diferença da avaliação "neuropsicológica" para "neuropsicopedagógica"?`,
					content:
						"A principal diferença está no foco e no objetivo de cada abordagem, embora ambas analisem aspectos relacionados ao desenvolvimento cognitivo e comportamental.\n\nEnquanto a avaliação neuropsicológica tem um foco clínico mais amplo, incluindo questões médicas e cognitivas gerais, a neuropsicopedagógica está direcionada ao ambiente educacional e à relação entre o aprendizado e o funcionamento cognitivo.\n\nAmbas podem ser complementares, dependendo das necessidades do paciente.",
				},
				{
					header: "Psicólogos podem dar diagnóstico?",
					content:
						"Sim! Um profissional da psicologia é capacitado para fornecer diagnósticos psicológicos, principalmente com base em avaliações clínicas e testes psicológicos e cognitivos. Na área da saúde mental, pode identificar transtornos mentais e cognitivos, compreender o impacto no funcionamento do indivíduo e propor intervenções adequadas.\n\nO diagnóstico de transtornos mentais e cognitivos geralmente é mais preciso quando realizado de forma interdisciplinar, integrando avaliações de psicólogos, médicos (psiquiatras, neurologistas), fonoaudiólogos (em casos de linguagem), terapeutas ocupacionais e outros profissionais da saúde. Isso garante uma visão ampla das necessidades do paciente e das melhores estratégias de intervenção.",
				},
				{
					header: "Psicólogos podem receitar medicamentos?",
					content:
						"Não, psicólogos não podem receitar medicamentos. Essa é uma atribuição exclusiva de médicos, como psiquiatras, neurologistas e outros profissionais com formação em medicina.",
				},
				{
					header:
						"Pessoas com dificuldades auditivas e visuais podem ser submetidas à avaliação neuropsicológica?",
					content:
						"Sim, desde que sejam feitas adaptações adequadas às suas necessidades. O neuropsicólogo deve considerar as limitações sensoriais ao selecionar os instrumentos de avaliação, garantindo que eles sejam válidos e acessíveis para o paciente.\n\nA avaliação nessas condições foca em identificar as capacidades cognitivas preservadas e as dificuldades associadas, considerando o impacto das limitações sensoriais no funcionamento global.",
				},
				{
					header: "Pessoas analfabetas podem ser submetidas à avaliação neuropsicológica?",
					content:
						"Sim, desde que o neuropsicólogo adapte os instrumentos e métodos para respeitar a escolaridade e o nível cultural do indivíduo. Como o analfabetismo pode influenciar o desempenho em algumas tarefas cognitivas, é essencial utilizar testes apropriados para evitar interpretações equivocadas.",
				},
			],
		},
		step: {
			header: "Etapas de uma Avaliação Neuropsicológica",
			carousel: [
				{
					header: "Etapa 1: Entrevistas iniciais",
					content:
						"Nesse primeiro contato com o caso do paciente, busco compreender um pouco de sua história de vida, histórico de sintomas, qual será a finalidade do processo avaliativo (diagnóstico e/ou descritivo). Trata-se de um momento muito importante para conhecer alguns aspectos da rotina e da saúde.\n\nObjetivos: Quais são as principais dificuldades? Em que contexto elas aparecem? Desde quando elas existem?",
				},
				{
					header: "Etapa 2: Aplicação de testes e escalas",
					content:
						"Uma vez compreendida qual será a finalidade da avaliação e quais são as principais dificuldades apresentadas pelo paciente, decido quais instrumentos e atividades clínicas utilizarei durante o processo avaliativo.",
				},
				{
					header: "Etapa 3: Correção e Análise",
					content:
						"Provavelmente é uma das etapas mais importantes de todo processo avaliativo, pois exige muita atenção e empenho da minha parte. Trata-se do momento em que corrijo cada instrumento que utilizei e interpreto seus resultados de modo a compreender como estes refletem o seu dia-a-dia",
				},
				{
					header: "Etapa 4: Elaboração do Laudo",
					content:
						"Uma vez que as aplicações estejam encerradas, as informações corrigidas e contextualizadas, inicia-se a etapa de elaboração do laudo neuropsicológico. Trata-se de um documento técnico e detalhado que reúne não apenas os resultados do processo avaliativo, como também informações valiosas sobre o desempenho do paciente em diferentes funções cognitivas como: atenção, memória, linguagem, funções executivas e habilidades sociais.",
				},
				{
					header: "Etapa 5: Devolutiva e Orientação",
					content:
						"Por fim, realiza-se uma entrevista devolutiva para explicar os resultados ao paciente e/ou responsáveis, oferecendo orientações claras sobre próximos passos e estratégias de apoio.",
				},
			],
		},
		firstQuoteSection: {
			content: `"Nós somos todos habitantes neurodiversos do planeta, porque não há duas mentes nesse mundo que possam ser exatamente iguais" -- Judy Singer, 1990`,
		},
		secondFaq: {
			header: "Benefícios da Avaliação Neuropsicológica",
			dropdown: [
				{
					header: "Identificação de Forças e Desafios Cognitivos",
					content:
						"A avaliação neuropsicológica permite compreender de forma detalhada as habilidades cognitivas de uma pessoa, como memória, atenção, linguagem e funções executivas. Isso ajuda a identificar pontos fortes que podem ser potencializados e dificuldades que necessitam de suporte, fornecendo uma visão abrangente do funcionamento mental.\n\n[bold]Exemplo:[/bold] Em uma criança em idade escolar, a avaliação pode revelar dificuldades específicas de atenção que impactam o desempenho acadêmico, orientando estratégias personalizadas para melhorar o aprendizado.",
				},
				{
					header: "Clareza no Diagnóstico",
					content:
						"Quando há dúvidas sobre transtornos do neurodesenvolvimento, neurocognitivos ou emocionais, a avaliação oferece uma base científica para confirmar ou descartar condições específicas. Isso reduz a incerteza e permite direcionar o tratamento mais adequado.\n\n[bold]Exemplo:[/bold] Em adolescentes, pode ajudar a diagnosticar TDAH ou transtornos de aprendizagem, diferenciando essas condições de questões emocionais como ansiedade ou desmotivação.",
				},
				{
					header: "Planejamento Personalizado de Intervenções",
					content:
						"Com os resultados obtidos, é possível traçar estratégias de intervenção personalizadas, seja por meio de terapias, ajustes no ambiente de trabalho ou escolar, ou até mesmo orientações médicas. Isso garante que o suporte seja focado nas necessidades reais de cada indivíduo.\n\n[bold]Exemplo:[/bold] Para um adulto que enfrenta dificuldades de memória no trabalho, a avaliação pode indicar técnicas de organização e manejo do tempo que aumentem a produtividade.",
				},
				{
					header: "Suporte para Decisões Educacionais ou Terapêuticas",
					content:
						"A avaliação fornece informações valiosas para escolas, famílias e profissionais de saúde. Por exemplo, no contexto escolar, pode indicar adaptações no ensino ou suporte especializado, enquanto em adultos e idosos pode auxiliar na escolha de tratamentos ou terapias.\n\n[bold]Exemplo:[/bold] No envelhecimento, pode ajudar a diferenciar sinais normais de esquecimento associados à idade de possíveis condições como Alzheimer, guiando intervenções médicas e familiares.",
				},
				{
					header: "Prevenção e Qualidade de Vida",
					content:
						"Para pessoas em diferentes fases da vida, a avaliação é uma ferramenta preventiva. Em crianças, pode detectar dificuldades de aprendizado precocemente. Em adultos, ajuda a lidar com desafios emocionais e cognitivos, e no envelhecimento, identifica alterações que podem ser tratadas para melhorar a qualidade de vida e prolongar a autonomia.\n\n[bold]Exemplo:[/bold] Em crianças pré-escolares, pode identificar atrasos no desenvolvimento da linguagem e orientar a inclusão de terapias fonoaudiológicas para otimizar a comunicação.",
				},
				{
					header: "Acompanhamento de Mudanças ao Longo do Tempo",
					content:
						"Além do diagnóstico inicial, a avaliação é útil para monitorar a progressão de condições neuropsicológicas e o impacto das intervenções ao longo do tempo. Isso ajuda a ajustar abordagens e garantir que os resultados sejam otimizados.\n\n[bold]Exemplo:[/bold] Para um adolescente em acompanhamento por dificuldades emocionais e sociais, a reavaliação periódica pode mostrar o impacto positivo da psicoterapia e guiar novos objetivos terapêuticos.",
				},
			],
		},
		benefits: {
			header: "Benefícios deste Processo",
			content: [
				"Maior compreensão das potencialidades e limitações cognitivas",
				"Tratamento personalizado conforme a necessidade do paciente",
				"Diagnóstico preciso",
				"Planejamento e acompanhamento",
				"Qualidade de vida",
			],
		},
		ageRange: {
			header: "Principais Demandas por Faixa Etária",
			buttons: [
				["Idade Pré-Escolar\n2 a 5 anos", () => fixedScreen.createAll("avaliacaoNeuropsicologica", "preEscolar")],
				["Idade Escolar\n6 a 12 anos", () => fixedScreen.createAll("avaliacaoNeuropsicologica", "escolar")],
				["Adolescentes\ne Adultos", () => fixedScreen.createAll("avaliacaoNeuropsicologica", "adultez")],
				["Contexto do\nEnvelhecimento", () => fixedScreen.createAll("avaliacaoNeuropsicologica", "envelhecimento")],
			],
		},
		fixedScreen: {
			preEscolar: {
				header: "Idade Pré-Escolar (2 a 5 anos)",
				subheader:
					"Além de descrever o perfil cognitivo e mensurar sinais de atrasos do desenvolvimento, a avaliação possibilita a investigação de diagnósticos como:",
				content: [
					"TEA: Transtorno do Espectro Autista",
					"ADG: Atraso Global do Desenvolvimento",
					"TDAH: Transtorno do Déficit de Atenção e Hiperatividade / Impulsividade",
					"TEAp: Transtornos Específicos de Aprendizagem",
					"TOD: Transtorno Opositor Desafiante",
					"Transtornos da Comunicação (linguagem, fala, cognição social)",
					"Transtornos Motores (movimento esteoritipado, desenvolvimento motor, tique)",
				],
			},
			escolar: {
				header: "Idade Escolar (6 a 12 anos)",
				subheader:
					"Além de descrever o perfil cognitivo, emocional e comportamental, a avaliação possibilita a investigação de diagnósticos como:",
				content: [
					"TEA: Transtorno do Espectro Autista",
					"TDAH: Transtorno do Déficit de Atenção e Hiperatividade / Impulsividade",
					"TDI: Transtorno do Desenvolvimento Intelectual",
					"TEAp: Transtornos Específicos de Aprendizagem",
					"TOD: Transtorno Opositor Desafiante",
					"Transtornos da Comunicação (linguagem, fala, cognição social)",
					"Transtornos Motores (movimento esteoritipado, desenvolvimento motor, tique)",
				],
			},
			adultez: {
				header: "Adolescência e Adultez",
				subheader:
					"Além de descrever o perfil cognitivo, emocional e comportamental, a avaliação possibilita a investigação de diagnósticos como:",
				content: [
					"TEA: Transtorno do Espectro Autista",
					"TDAH: Transtorno do Déficit de Atenção e Hiperatividade / Impulsividade",
					"TDI: Transtorno do Desenvolvimento Intelectual",
					"TEAp: Transtornos Específicos de Aprendizagem",
					"Transtornos da Comunicação (linguagem, fala, cognição social)",
					"Transtornos Motores (movimento esteoritipado, desenvolvimento motor)",
					"Transtornos Depressivos e de Ansiedade",
				],
			},
			envelhecimento: {
				header: "Contexto do Envelhecimento",
				subheader:
					"Além de descrever o perfil cognitivo, emocional e comportamental, a avaliação possibilita a investigação de declínios cognitivos suspeitos, capacidade funcional e diagnósticos como:",
				content: [
					"TNC: Transtornos Neurocognitivos",
					"TEA: Transtorno do Espectro Autista",
					"TDAH: Transtorno do Déficit de Atenção e Hiperatividade / Impulsividade",
					"TDI: Transtorno do Desenvolvimento Intelectual",
					"TEAp: Transtornos Específicos de Aprendizagem",
					"Transtornos da Comunicação (linguagem, fala, cognição social)",
					"Transtornos Motores (movimento esteoritipado, desenvolvimento motor)",
					"Transtornos Depressivos e de Ansiedade",
				],
			},
		},
	},
	psicoterapia: {
		pageTitle: {
			header: "Psicoterapia",
			subheader: "Cada trajetória é única, e será uma grande honra se me deres a oportunidade de conhecer a tua",
			button: "Agende sua consulta!",
		},
		firstQuoteSection: {
			content: `"A vida só pode ser compreendida olhando-se para trás; mas só pode ser vivida olhando-se para frente." -- Søren Kierkegaard (1813-1855)`,
		},
		ageRange: {
			header: "Temas recorrentes na psicoterapia",
			buttons: [
				["Infância", () => fixedScreen.createAll("psicoterapia", "infancia")],
				["Adolescência", () => fixedScreen.createAll("psicoterapia", "adolescencia")],
				["Jovem Adultez", () => fixedScreen.createAll("psicoterapia", "jovemAdultez")],
				["Adultez Madura", () => fixedScreen.createAll("psicoterapia", "adultezMadura")],
				["Adultez Tardia", () => fixedScreen.createAll("psicoterapia", "adultezTardia")],
			],
		},
		fixedScreen: {
			infancia: {
				header: "Infância",
				subheader: `"Para um bebê, não existe essa coisa de um bebê — existe um bebê e alguém." - D.W. Winnicott\n\nAs primeiras experiências emocionais moldam a forma como nos relacionamos com o mundo. Na infância, a psicoterapia pode ajudar a compreender e elaborar:`,
				content: [
					"Dificuldades emocionais e comportamentais: Por exemplo, uma criança que tem explosões de raiva frequentes ou que evita interações sociais.",
					"Angústias diante da separação ou mudanças significativas na rotina: Como uma criança que passa a ter medo intenso de ir à escola ou dificuldades após a chegada de um irmão.",
					"Desafios na construção da autonomia e autoestima: Crianças que sentem muita insegurança para realizar atividades sozinhas ou medo excessivo de errar.",
					"Relações com pares e primeiros conflitos sociais: Dificuldade em fazer amigos, sofrer ou praticar bullying, sentir-se excluído em ambientes sociais.",
				],
			},
			adolescencia: {
				header: "Adolescência",
				subheader: `"A grande tragédia do mundo é que não cultivamos a capacidade de estar sozinhos, o que nos permitiria verdadeiramente estar com o outro." - D.W. Winnicott,\n\nA adolescência é um período de intensas transformações, onde emergem questões como:"`,
				content: [
					"Construção da identidade e busca por pertencimento: Como um adolescente que sente que não se encaixa em nenhum grupo ou que esconde partes de sua personalidade por medo da rejeição.",
					"Conflitos familiares e desafios na comunicação: Discussões frequentes com os pais, sensação de não ser compreendido ou de não conseguir expressar suas emoções.",
					"Ansiedade social e autoestima: Medo intenso de interações sociais, sensação de inadequação ou preocupação excessiva com a aparência.",
					"Primeiras experiências amorosas e sexuais: Medo da rejeição, insegurança nos relacionamentos ou dificuldades para entender a própria sexualidade.",
				],
			},
			jovemAdultez: {
				header: "Jovem Adultez",
				subheader: `"A coragem de ser é a coragem de aceitar a si mesmo, apesar de ser inaceitável." - D. W. Winnicottz\n\nA transição para a vida adulta traz desafios que frequentemente aparecem na terapia:`,
				content: [
					"Incertezas sobre o futuro acadêmico e profissional: Um jovem adulto que sente que escolheu a profissão errada ou que não sabe qual caminho seguir.",
					"Relacionamentos amorosos e dinâmicas interpessoais: Dificuldades em estabelecer relações saudáveis, padrões repetitivos em relacionamentos ou medo da solidão.",
					"Dificuldade para lidar com expectativas externas: Sensação de estar sempre aquém do esperado, medo de decepcionar os outros ou de não alcançar determinados padrões de sucesso.",
					"Sentimentos de inadequação ou impasse diante das escolhas da vida: Questionamentos sobre identidade, propósito e sentido da vida, sensação de estagnação.",
				],
			},
			adultezMadura: {
				header: "Adultez Madura",
				subheader: `O luto não é um estado, mas um processo." - S. Freud\n\nCom o passar do tempo, novas questões se impõem, e a psicoterapia pode ser um espaço para refletir sobre:`,
				content: [
					"Estresse, burnout e exaustão emocional: Profissionais que se sentem sobrecarregados no trabalho, esgotados emocionalmente e sem motivação.",
					"Maternidade, paternidade e transformações na identidade: Mães e pais que sentem culpa ao equilibrar vida profissional e familiar ou que enfrentam desafios na criação dos filhos.",
					"Perdas e luto em suas diversas formas: Enfrentar o luto por um ente querido, o fim de um relacionamento ou mudanças que exigem readaptação emocional.",
					"Relações conjugais e redescoberta da individualidade: Casais que enfrentam crises na relação, pessoas que questionam se ainda estão felizes em seu casamento ou que buscam resgatar sua individualidade após anos dedicados à família.",
				],
			},
			adultezTardia: {
				header: "Adultez Tardia",
				subheader: `"Cada um de nós morre apenas uma vez, mas a cada dia pode sofrer perdas e renascimentos." - S. Ferenczi\n\nO processo de envelhecimento traz desafios e reflexões que podem ser trabalhadas na psicoterapia:`,
				content: [
					"Mudanças na identidade e no papel social: Pessoas que se aposentam e sentem que perderam uma parte importante de sua identidade profissional.",
					"Solidão e redes de apoio: Afastamento dos filhos, perda de amigos ou dificuldade em criar novos vínculos sociais.",
					"Enfrentamento de perdas e luto: Lidar com a perda do cônjuge, de amigos ou da própria autonomia em algumas áreas da vida.",
					"Reflexões sobre legado e propósito: Revisão da trajetória de vida, necessidade de ressignificar conquistas e desafios vividos.",
					"Adaptação a mudanças físicas e emocionais: Processos naturais do envelhecimento que podem gerar angústias, como mudanças no corpo, na saúde e na cognição.",
				],
			},
		},
		firstFaq: {
			header: "Perguntas Frequentes",
			dropdown: [
				{
					header: "O que é psicoterapia?",
					content:
						"Trata-se de um processo terapêutico em que o paciente explora pensamentos, sentimentos e comportamentos de modo que, através do autoconhecimento, se implique em suas mudanças de vida.\n\nExistem diversas abordagens teóricas, como psicanálise, cognitivo-comportamental, humanista e sistêmica, cada uma com métodos específicos para entender o ser humano e atender suas necessidades individuais.",
				},
				{
					header: "Quais tipos de problemáticas podem ser tratadas?",
					content:
						"A psicoterapia pode tratar uma ampla gama de problemáticas relacionadas à saúde mental, emocional e comportamental, incluindo:\n\n1. Transtornos de humor: Depressão, distimia, transtorno bipolar.\n\n2. Transtornos de ansiedade: Ansiedade generalizada, fobias, ataques de pânico, transtorno obsessivo-compulsivo (TOC) e transtorno de estresse pós-traumático (TEPT).\n\n3. Transtornos relacionados ao estresse: Burnout, dificuldades em lidar com situações de vida desafiadoras ou mudanças significativas.\n\n4. Problemas de relacionamento: Dificuldades em relações familiares, amorosas ou profissionais, conflitos interpessoais e questões de codependência.\n\n5. Transtornos alimentares: Anorexia, bulimia, compulsão alimentar.\n\n6. Luto e perdas: Processamento da perda de um ente querido ou de outras perdas significativas.\n\n7. Autoconhecimento e crescimento pessoal: Exploração de valores, objetivos, traumas passados e padrões de comportamento.\n\n8. Transtornos do neurodesenvolvimento: TDAH, TEA, dificuldades de aprendizagem.\n\n9. Transtornos de personalidade: Como transtorno borderline, narcisista ou esquizoide.\n\n10. Dificuldades emocionais: Sentimentos persistentes de vazio, baixa autoestima, raiva ou culpa excessiva.\n\n11. Questões relacionadas à sexualidade: Dificuldades de aceitação, disfunções sexuais ou conflitos sobre orientação sexual.\n\nA psicoterapia é adaptável a cada indivíduo, o que permite abordar desde questões cotidianas até transtornos mentais mais complexos, promovendo bem-estar e qualidade de vida.",
				},
				{
					header: "Como funciona a abordagem teórica de orientação psicanalítica?",
					content:
						"A psicoterapia de orientação psicanalítica baseia-se nos conceitos fundamentais da psicanálise, desenvolvidos por Sigmund Freud e ampliados por outros teóricos, como Melanie Klein, Donald Winnicott e Wilfred Bion.\n\nSeu objetivo central é explorar os conteúdos inconscientes que influenciam pensamentos, emoções e comportamentos, ajudando o paciente a compreender e transformar padrões psicológicos que causam sofrimento.",
				},
				{
					header: "Quais são as técnicas utilizadas no processo terapêutico?",
					content:
						"A psicoterapia de orientação psicanalítica busca acessar conflitos e desejos inconscientes do paciente que muitas vezes se manifestam por meio de sonhos, lapsos de linguagem e padrões repetitivos de comportamento.\n\nRevisitando o passado e conhecendo as narrativas do paciente: Investiga-se a história de vida e as experiências precoces para compreender como relações passadas moldaram a forma como o paciente se relaciona consigo mesmo e com os outros.\n\nEspaço seguro, sigiloso e sem julgamentos: para que o paciente fale livremente sobre seus pensamentos e sentimentos, sem censura, permitindo que conteúdos inconscientes possam emergir em seu discurso.\n\nCompreensão dos padrões emocionais do paciente: Durante as sessões, o paciente pode transferir emoções e expectativas de relacionamentos passados para o terapeuta, que usa essas interações para compreender melhor o funcionamento emocional do paciente.\n\nEscuta ativa e analítica: O psicoterapeuta oferece interpretações que ajudam o paciente a identificar e elaborar questões subjacentes ao seu sofrimento emocional.\n\nA psicoterapia psicanalítica é um processo profundo e contínuo que exige dedicação, promovendo mudanças que não são apenas sintomáticas, mas estruturais, permitindo ao paciente viver de forma mais livre e integrada.",
				},
				{
					header: "Qual faixa etária eu atendo?",
					content: "Pacientes a partir dos sete anos de idade.",
				},
				{
					header: "Qual a duração do processo?",
					content:
						"Como cada pessoa é única, o mesmo não poderia ser diferente em relação a duração de um processo de psicoterapia, trata-se de uma questão muito particular de cada paciente!\n\nTrabalho com atendimentos semanais nas modalidades presencial (Novo Hamburgo e Ivoti) e on-line.",
				},
				{
					header: "Como eu trabalho?",
					content:
						"Uma das implicações da técnica psicanalítica com pacientes adultos refere-se à importância de criar um espaço terapêutico seguro, no qual o paciente possa expressar livremente seus pensamentos e emoções, permitindo que conteúdos inconscientes venham à tona para serem compreendidos e elaborados no contexto da relação transferencial com o psicoterapeuta.\n\nPaciente menores de idade: Embora eu considere que o protagonista dos atendimentos seja a criança ou adolescente, a primeira sessão será com algum de seus responsáveis, pois conhecer a fundo sua história gestacional, assim como seus primeiros anos de vida são aspectos muito importantes para inicio de tratamento. Além disso, é no primeiro atendimento que combinamos alguns pontos mais burocráticos, como modalidade de pagamento e frequência dos atendimentos. Periodicamente, um atendimento é realizado apenas com os responsáveis para conferir progressos e sugerir ajustes na rotina familiar que podem contribuir com os atendimentos.",
				},
			],
		},
	},
	testeRapido: {
		pageTitle: {
			header: "Teste Rápido",
			subheader: "O que pode ser melhor para mim nesse momento?",
		},
		firstQuoteSection: {
			content: `"Sua visão se tornará clara apenas quando você puder olhar para dentro de seu coração. Quem olha para fora, sonha; quem olha para dentro, desperta." -- Carl Jung, 1961`,
		},
		intro: {
			header: "Seja bem-vindo(a) ao teste rápido!",
			description:
				"Esse teste foi desenvolvido para te auxiliar no entendimento de qual dos serviços aqui oferecidos é o mais indicado nesse momento.\n\nTrata-se de um questionário composto por 20 questões que têm como objetivo a identificação da frequência com que você ou um ente querido é acometido por sintomas emocionais, cognitivos e comportamentais.\n\nPara cada item que lhe será apresentado à seguir, você deverá escolherer a opção que, na sua percepção, melhor corresponde à presença desses sintomas nos últimos três meses.",
			disclaimer:
				"[bold]Importante: [/bold]Nenhum dado será coletado durante este teste, pois ele será realizado de forma anônima.\n\n[bold]Importante: [/bold]Este teste tem caráter informativo e não substitui a avaliação ou acompanhamento por um profissional qualificado.",
			button: ["Iniciar", () => buildTest.startTest()],
		},
		personSelection: {
			header: "Antes de começarmos...",
			subheader:
				"Por favor, informe se você está procurando um serviço para um ente querido (filhos, irmãos, pais, avós, etc.), ou para você mesmo(a)",
			buttons: [
				["Para mim mesmo(a)", () => buildTest.selectTarget("self")],
				["Para um ente querido", () => buildTest.selectTarget("other")],
			],
		},
		quiz: {
			selfHeader: "Responda com base na frequência que você sente ou percebe as seguintes situações:",
			self: [
				{
					question:
						"Você sente que não sabe lidar com algumas emoções e sentimentos? Por exemplo: quando sente-se triste ou com raiva, é muito difícil se desvincular dessas emoções, podendo passar muito tempo remoendo o motivo que as despertou.",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy"],
				},
				{
					question:
						"Você sente que tem dificuldade para entender o porquê de sentir-se de determinada forma? Por exemplo: quando alguém que você ama demora para lhe responder, você sente um sofrimento intenso, podendo até mesmo chegar a conclusões precipitadas.",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy"],
				},
				{
					question:
						"Você sente que é muito difícil agir ou pensar de forma diferente da qual normalmente faz? Pode ser que você já tenha escutado de algumas pessoas que é alguém inflexível.",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy"],
				},
				{
					question:
						"Você se sente angustiado(a) por vivenciar conflitos interpessoais (familiares, amorosos ou no trabalho)? Às vezes, pode ter a sensação de que é como se vocês falassem idiomas completamente diferentes.",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy"],
				},
				{
					question:
						"Você sente que está vivendo no modo “piloto automático”? Às vezes, passamos tanto tempo existindo dessa forma que, nos raros momentos de lucidez, podemos nos sentir completamente perdidos quanto a saber quem somos, o que queremos, ou o que não queremos.",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy"],
				},
				{
					question:
						"Você sente que é difícil dizer não às pessoas que ama ou que admira por ter medo de magoá-las?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy"],
				},
				{
					question:
						"Você sente que tem dificuldade para expressar sua opinião devido ao medo do que as outras pessoas vão achar?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy"],
				},
				{
					question:
						"Você sente dificuldade para se concentrar em atividades ou conversas por muito tempo, especialmente quando não é algo de seu interesse?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["assessment"],
				},
				{
					question:
						"Você se esquece de compromissos, tarefas ou informações importantes do dia a dia? Por exemplo: deixar de ir a consultas médicas, esquecer de realizar tarefas escolares e/ou do trabalho).",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["assessment"],
				},
				{
					question: "Você perde objetos pessoais como documentos, carteira, chaves e peças de roupas?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["assessment"],
				},
				{
					question:
						"Você sente dificuldade para organizar-se efetivamente ou para planejar e concluir tarefas? Por exemplo: seu quarto, seu guarda-roupa, sua mesa de trabalho e/ou sua mente parecem estar constantemente bagunçadas.",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["assessment"],
				},
				{
					question:
						"Você escuta de professores, amigos e/ou familiares sobre suas dificuldades de memória ou atenção?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["assessment"],
				},
				{
					question:
						"Você pensa que o seu desempenho cognitivo (especialmente em tarefas que envolvem memória ou raciocínio) tem decaído consideravelmente nos últimos meses ou anos?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["assessment"],
				},
				{
					question:
						"Você percebe-se como alguém impulsivo(a) que age de forma precipitada? Por exemplo: você pode ter um histórico consistente de multas ou acidentes no trânsito, ou talvez um histórico de erros em questões escolares não por desconhecer o conteúdo, mas porque não reparou em algum detalhe.",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["assessment"],
				},
				{
					question:
						"Você tem percebido mudanças em seu comportamento, humor ou capacidade de lidar com situações do dia a dia?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy", "assessment"],
				},
				{
					question:
						"Você percebe que suas dificuldades afetam o seu desempenho escolar, profissional ou nas tarefas em casa?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy", "assessment"],
				},
				{
					question: "Você sente dificuldade para lidar com sua impulsividade e/ou descontrole emocional?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy", "assessment"],
				},
				{
					question: "Você se sente angustiado(a) e aflito(a) por conta de dificuldades de memória e/ou atenção?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy", "assessment"],
				},
				{
					question:
						"Você se sente muito irritado(a) quando algo não ocorre como planejou, especialmente se acontece devido a algum descuido seu?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy", "assessment"],
				},
				{
					question: "Você sente que o estresse pode estar afetando sua saúde cognitiva e emocional?",
					answer: quizAnswerLibrary.frequencySelf,
					category: ["therapy", "assessment"],
				},
			],
			otherHeader: "Responda com base na frequência que você observa as seguintes situações:",
			other: [
				{
					question:
						"Você percebe que ele(a) apresenta dificuldade para lidar com emoções como tristeza, ansiedade ou raiva? Por exemplo: você pode ter a sensação que ele(a) perde a calma muito facilmente ou que reage de forma exagerada em situações que não parecem ser tão grave.",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy"],
				},
				{
					question:
						"Ele(a) apresenta dificuldade para expressar seus sentimentos? Por exemplo: Quando acontece algo que lhe deixa chateado(a), tende a guardar para si em vez de conversar sobre o assunto.",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy"],
				},
				{
					question:
						"Você percebe que ele(a) apresenta comportamentos demasiadamente inflexíveis? Por exemplo: Ele(a) é alguém que dificilmente pensa ou age de forma diferente do que está acostumado(a), ou seja, na maioria das vezes tudo tem que ser do jeito dele(a).",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy"],
				},
				{
					question:
						"Você observa dificuldades nele(a) relacionadas à interação com outras pessoas? Por exemplo: pode ter muitas desavenças com familiares, ter passado por experiências amorosas ou sociais disfuncionais.",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy"],
				},
				{
					question: "Você observa que ele(a) tem muita dificuldade para dizer não e acaba se sobrecarregando?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy"],
				},
				{
					question: "Você observa que ele(a) tem estado muito triste e amuado(a) ultimamente?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy"],
				},
				{
					question:
						"Você percebe que ele(a) tem dificuldade para concentrar-se em tarefas ou conversas por muito tempo? Por exemplo: você pode ter a impressão que ele(a) está constantemente com a mente em outro lugar.",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["assessment"],
				},
				{
					question: "Ele(a) se esquece de compromissos ou informações importantes?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["assessment"],
				},
				{
					question: "Ele(a) perde objetos pessoais como chaves, carteira, cartão de crédito e peças de roupas?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["assessment"],
				},
				{
					question:
						"Você observa nele(a) uma tendência a ser bastante desorganizado(a) e que, por essa razão, pode apresentar mais dificuldade do que as outras pessoas para planejar e concluir tarefas cotidianas?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["assessment"],
				},
				{
					question:
						"Ele(a) tem apresentado mudanças em seu desempenho cognitivo como memória ou raciocínio? Por exemplo: episódios como esquecer a chaleira ligada no fogão, não lembrar-se onde estacionou o carro, demorar mais tempo do que o normal para resolver cálculos podem estar sendo cada vez mais frequêntes.",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["assessment"],
				},
				{
					question:
						"Ele(a) apresenta um comportamente extremamente agitado(a), de modo que dá a impressão de que tem uma fonte inesgotável de energia?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["assessment"],
				},
				{
					question:
						"Você escuta de terceiros (professores, cuidadores ou outros familiares) sobre dificuldades cognitivas ou comportamentais que ele(a) apresenta? Por exemplo: ele(a) pode ter um perfil genioso, ou ser impaciente, apresentrar raciocínio lento, cometer erros por impulsividade, ter dificuldade de aprendizagem... etc.",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy", "assessment"],
				},
				{
					question: "Ele(a) demonstra dificuldade em controlar impulsos ou age de forma precipitada?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy", "assessment"],
				},
				{
					question: "Ele(a) tem apresentado mudanças significativas em seu comportamento, humor ou desempenho?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy", "assessment"],
				},
				{
					question: "As dificuldades dele(a) têm afetado sua rotina escolar, profissional ou pessoal?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy", "assessment"],
				},
				{
					question:
						"Você sente que ele(a) precisa de ajuda para entender e lidar melhor com os desafios do dia-a-dia?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy", "assessment"],
				},
				{
					question:
						"Você percebe que ele(a) tem estado muito aflito(a) ou angustiado(a) por conta de dificuldades relacionadas à memória e/ou atenção?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy", "assessment"],
				},
				{
					question:
						"Ele(a) demonstra muita irritação quando algo não sai como o planejado, especialmente se acontece devido a algum descuido dele(a)? Por exemplo: consequências não previstas tendem a acabar com o dia dele(a).",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy", "assessment"],
				},
				{
					question:
						"Você observa que ele(a) tem estado muito estressado(a), e que isso possa estar afetando a saúde cognitiva e emocional dele(a)?",
					answer: quizAnswerLibrary.frequencyOther,
					category: ["therapy", "assessment"],
				},
			],
			buttons: [
				["Voltar", () => buildTest.return()],
				["Avançar", () => buildTest.advance()],
				["Finalizar", () => buildTest.finish()],
			],
		},
		result: {
			header: "Resultados",
			self: {
				therapy: {
					lowNeed:
						"Com base em suas respostas, entende-se que você pode se beneficiar bastante do processo de [bold]psicoterapia[/bold] \n\nApesar de suas dificuldades emocionais ou comportamentais não serem intensas, alguns aspectos merecem atenção para garantir seu bem-estar a longo prazo. Nesse sentido, uma psicoterapia preventiva pode ajudá-lo(a) a compreender melhor seus sentimentos, desenvolver habilidades emocionais e estar alinhado(a) com aquilo que seu coração realmente deseja.",
					moderateNeed:
						"Com base em suas respostas, entende-se que você pode se beneficiar consideravelmente do processo de [bold]psicoterapia[/bold] \n\nEmbora esse teste rápido se atenha a idenficação de características gerais do seu funcionamento, suas respostas foram sugestivas quanto à presença de desafios emocionais ou comportamentais que podem estar dificultando o alcance de seus objetivos ou afetando seu bem-estar. Nesse sentido, a psicoterapia oferece um espaço para explorar essas questões e construir recursos emocionais mais sólidos que podem fazer toda a diferença a longo prazo!.",
					highNeed:
						"Com base em suas respostas, foi possível identificar uma necessidade acentuada para dar início ao processo de [bold]psicoterapia[/bold].\n\nEmbora esse teste rápido se atenha à identificação de características gerais do seu funcionamento, suas repostas indicaram que você está passando por desafios emocionais ou comportamentais intensos que estão impactando sua qualidade de vida de maneira significativa. Nesse sentido, a psicoterapia pode ajudá-lo(a) a encontrar alívio, compreender essas dificuldades e desenvolver estratégias para superá-las. Não adie esse cuidado — buscar apoio pode fazer toda a diferença!",
				},
				assessment: {
					lowNeed:
						"Com base em suas respostas, você pode estar apresentando sinais leves de prejuízo cognitivo e, por esse motivo, a realização de uma [bold]avaliação neuropsicológica[/bold] preventiva pode ser útil.\n\nEmbora possivelmente não trata-se de dificuldades significativas, você demonstrou algumas questões que poderiam ser melhor exploradas nesse processo, já que muitas condições cognitivas podem ser mascaradas por estratégias compensatórias que podem não funcionar em todos os contextos de sua vida. Nesse sentido, uma avaliação preventiva pode ser útil para esclarecer possíveis mudanças ou traçar estratégias para otimizar seu desempenho cognitivo.",
					moderateNeed:
						"Com base em suas respostas, você pode estar apresentando sinais moderados de prejuízo cognitivo e, por esse motivo, a realização de uma [bold]avaliação neuropsicológica[/bold] pode ser bastante benéfica para a compreensão da origem dessas dificuldades.\n\nEmbora esse teste rápido se atenha à identificação de características gerais do seu funcionamento, suas respostas foram sugestivas para algumas questões cognitivas ou comportamentais que podem estar interferindo significativamente na sua rotina. Nesse sentido, uma avaliação detalhada pode identificar possíveis causas, como dificuldades de atenção, memória ou planejamento, e auxiliar no desenvolvimento de estratégias práticas para melhorar sua qualidade de vida.",
					highNeed:
						"Com base nas suas respostas, você pode estar apresentando sinais graves de prejuízo cognitivo e, por esse motivo, a realização de uma [bold]avaliação neuropsicológica[/bold] é fortemente indicada.\n\nEmbora esse teste rápido se atenha à identificação de caracterísitcas gerais do seu funcionamento, suas respostas foram sugestivas para a presença de dificuldades cognitivas ou comportamentais significativas que podem estar prejudicando sua vida pessoal, profissional ou acadêmica. Nesse sentido, uma avaliação completa ajudará a identificar a origem dessas dificuldades e a propor intervenções específicas. Agende uma consulta e saiba mais!",
				},
				both: {
					notNeeded:
						"Neste momento, você não apresenta indicações de necessidade urgente para psicoterapia individual ou avaliação neuropsicológica.\n\nParabéns por cuidar-se e estar atento(a) ao seu bem-estar! Seu teste não apontou sinais de preocupação imediata, mas isso não significa que o autoconhecimento ou o acompanhamento profissional não possam ser benéficos. Considere procurar um profissional caso surjam mudanças em seu comportamento, emoções ou habilidades.",
					lowNeed:
						"Com base em suas respostas, foi possível identificar uma demanda leve que pode ser explorada de forma preventiva tanto através da [bold]psicoterapia[/bold] quanto de uma [bold]avaliação neuropsicológica[/bold].\n\nEmbora os resultados não apontem para questões significativas, algumas dificuldades identificadas podem ser trabalhadas para evitar que se tornem maiores no futuro. Seja para desenvolver melhor sua inteligência emocional ou compreender pequenas mudanças cognitivas, buscar orientação pode ser um passo importante. Entre em contato para avaliar suas necessidades mais de perto!",
					moderateNeed:
						"Com base em suas respostas, foi possível identificar demandas que podem ser melhor aprofundadas tanto pela [bold]psicoterapia[/bold] quanto por uma [bold]avaliação neuropsicológica[/bold].\n\nEmbora esse teste rápido se atenha à identificação de caracterísitcas gerais do seu funcionamento, suas respostas foram sugestivas para a presença de dificuldades que podem estar impactando seu bem-estar emocional, cognitivo ou comportamental. Nesse sentido, você pode se beneficiar de ambos processos!\n\nAgendar uma conversa inicial pode ser um excelente ponto de partida.",
					highNeed:
						"Com base em suas respostas, foi possível detectar uma demanda significativa que pode ser melhor explorada tanto através da [bold]psicoterapia[/bold] quanto de uma [bold]avaliação neuropsicológica[/bold], e buscar ajuda especializada pode ser essencial neste momento.\n\nEmbora esse teste rápido se atenha à identificação de caracterísitcas gerais do seu funcionamento, suas respostas foram sugestivas para a presença de questões importantes que merecem atenção imediata. Nesse sentido, procurar por uma ajuda especializada pode ser essencial para que você consiga não apenas compreender, mas também aprender estratégias práticas para lidar com suas dificuldades identificadas.\n\nNão adie esse cuidado com sua saúde. Entre em contato para dar o próximo passo!",
				},
			},
			other: {
				therapy: {
					lowNeed:
						"Com base em suas respostas, entende-se que seu ente querido pode se beneficiar de um processo de [bold]psicoterapia[/bold] preventiva.\n\nApesar das suas dificuldades emocionais ou comportamentais não serem intensas, alguns aspectos merecem atenção para garantir o bem-estar dele(a) a longo prazo. Nesse sentido, uma psicoterapia preventiva pode ajudá-lo(a) a compreender melhor seus sentimentos, desenvolver habilidades emocionais e estar alinhado(a) com aquilo que seu coração realmente deseja.",
					moderateNeed:
						"Com base em suas respostas, entende-se que seu ente querido pode se beneficiar consideravelmente de um processo de [bold]psicoterapia[/bold].\n\nSuas observações foram indicativos de que a pessoa enfrenta desafios emocionais que podem estar prejudicando sua qualidade de vida. Nesse sentido, incentivar a busca pela psicoterapia é um passo importante para ajudá-la a lidar com essas questões de maneira saudável.",
					highNeed:
						"Com base em suas respostas, entende-se que seu ente querido apresenta sofrimento acentuado, que pode ser melhor abordado em uma [bold]psicoterapia[/bold].\n\nAs dificuldades emocionais ou comportamentais observadas por você parecem estar gerando prejuízos importantes na vida da pessoa. Incentive a busca por psicoterapia o quanto antes, para que ele(a) possa contar com o suporte necessário para compreender e superar esses desafios.",
				},
				assessment: {
					lowNeed:
						"Com base em suas respostas, seu ente querido pode estar apresentando sinais leves de prejuízo cognitivo e, por esse motivo, uma [bold]avaliação neuropsicológica[/bold] preventiva pode ser útil.\n\nEmbora possivelmente não trata-se de dificuldades significativas, ele(a) apresentam algumas questões que poderiam ser melhor exploradas nesse processo, já que muitas condições cognitivas podem ser mascaradas por estratégias compensatórias que podem não funcionar em todos os contextos de vida dele(a). Nesse sentido, uma avaliação preventiva pode ajudar a compreender melhor essas questões e oferecer orientações para maximizar o potencial da pessoa.",
					moderateNeed:
						"Com base em suas respostas, seu ente querido apresenta sinais moderados de prejuízo cognitivo e, por esse motivo, a pessoa poderia se beneficiar de uma [bold]avaliação neuropsicológica[/bold], pois possibilita uma melhor compreensão da origem dessas dificuldades.\n\nEmbora esse teste rápido se atenha à identificação de características gerais do funcionamento da pessoa, suas observações foram sugestivas para algumas questões cognitivas ou comportamentais que podem estar interferindo significativamente na rotina dele(e). Nesse sentido, uma avaliação detalhada pode identificar possíveis causas, como dificuldades de atenção, memória ou planejamento, e auxiliar no desenvolvimento de estratégias práticas para melhorar a qualidade de vida dele(a).",
					highNeed:
						"Com base nas suas respostas, seu ente querido pode estar apresentando sinais graves de prejuízo cognitivo e, por esse motivo, a realização de uma [bold]avaliação neuropsicológica[/bold] é fortemente indicada.\n\nEmbora esse teste rápido se atenha à identificação de características gerais do funcionamento da pessoa, suas observações foram sugestivas para a presença de dificuldades cognitivas ou comportamentais significativas que provavelmente estão prejudicando a vida pessoal, profissional ou acadêmica dele(a). Nesse sentido, uma avaliação completa ajudará a identificar a origem dessas dificuldades e a propor intervenções específicas. Agende uma consulta e saiba mais!",
				},
				both: {
					notNeeded:
						"Com base em suas observações, não há indícios de que a pessoa precise de avaliação neuropsicológica ou psicoterapia neste momento.\n\nOs comportamentos observados não sugerem dificuldades significativas que exijam intervenção imediata. Mesmo assim, é sempre importante acompanhar mudanças no humor, comportamento ou habilidades cognitivas. Caso novos sinais surjam, uma combinação entre psicoterapia e avaliação neuropsicológica pode ser considerada.",
					lowNeed:
						"Com base nas suas respostas, seu ente querido apresenta sinais indicativos sutis que pode se beneficiar tanto de uma [bold]avaliação neuropsicológica[/bold] preventiva quanto de [bold]psicoterapia[/bold] como forma de suporte.\n\nAs dificuldades que você observa nele(a) parecem leves e não interferem de forma expressiva no dia a dia, mas podem ser exploradas preventivamente. Nesse sentido, uma avaliação neuropsicológica ajudaria a compreender melhor aspectos cognitivos e comportamentais, enquanto a psicoterapia pode promover autoconhecimento e suporte emocional para lidar com os desafios que surgirem.",
					moderateNeed:
						"Com base nas suas respostas, há indícios claros de que seu ente querido poderia se beneficiar tanto de uma [bold]avaliação neuropsicológica[/bold] quanto de uma [bold]psicoterapia[/bold].\n\nOs comportamentos e emoções que você tem observado indicam desafios que podem estar interferindo de forma moderada na vida da pessoa. Nesse sentido, a avaliação neuropsicológica pode trazer insights importantes sobre funções cognitivas e comportamentais, enquanto a psicoterapia ajudará a trabalhar as questões emocionais e proporcionar ferramentas para lidar com as situações atuais.",
					highNeed:
						"Com base nas suas respostas, seu ente querido pode estar experimentanto sofrimento e prejuízos importantes que podem ser trabalhados tanto através de uma [bold]avaliação neuropsicológica[/bold] quanto em um proceso de [bold]psicoterapia[/bold].\n\nAs dificuldades que você tem observado parecem significativas e interferem de forma expressiva a vida da pessoa. Por esse motivo, a avaliação neuropsicológica pode ajudar a identificar as origens dos desafios cognitivos e comportamentais, enquanto a psicoterapia oferecerá suporte emocional essencial e estratégias para superar esses desafios de maneira saudável. Recomendamos que ambos os serviços sejam considerados com prioridade.",
				},
			},
			buttons: ["Entre em contato", linkLibrary.external.whatsapp],
		},
	},
	404: {
		pageTitle: {
			header: "Página não encontrada",
			subheader: "Infelizmente, você acessou uma página inexistente.",
		},
		button: ["Voltar para Home", linkLibrary.internal.home],
	},
};
