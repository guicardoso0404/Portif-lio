const translations = new Map([
  ["Sobre mim", "About me"],
  ["Experiência", "Experience"],
  ["Projetos", "Projects"],
  ["Conhecimentos", "Skills"],
  ["Fale comigo", "Contact me"],
  ["Eu sou Guilherme,", "I'm Guilherme,"],
  ["Desenvolvedor Web Full Stack.", "Full Stack Web Developer."],
  ["Me chamo Guilherme Cardoso, desenvolvedor web Full Stack e estudante de Sistemas de Informação pela Universidade Feevale. Sou formado em Técnico em Informática para Internet pelo Senac São Leopoldo e tenho interesse em desenvolvimento de sistemas, aplicações web e soluções digitais. Desenvolvo páginas e sistemas web responsivos, priorizando organização do código, boa experiência do usuário e design moderno. Sou uma pessoa dedicada, criativa e comprometida com o aprendizado contínuo, sempre buscando evoluir minhas habilidades em programação e tecnologia. Meu objetivo é criar soluções eficientes que unam inovação, funcionalidade e impacto real.", "My name is Guilherme Cardoso, I am a Full Stack web developer and an Information Systems student at Feevale University. I hold a technical degree in Web Development from Senac São Leopoldo and I am interested in systems development, web applications and digital solutions. I build responsive websites and web systems, prioritizing clean code, a good user experience and modern design. I am dedicated, creative and committed to continuous learning, always looking to improve my programming and technology skills. My goal is to create efficient solutions that combine innovation, functionality and real-world impact."],
  ["Experiência Profissional", "Professional Experience"],
  ["2026 - Atual", "2026 - Present"],
  ["Estágio de TI", "IT Intern"],
  ["Atuação em suporte técnico, manutenção de equipamentos e apoio às rotinas de tecnologia da informação.", "Working with technical support, equipment maintenance and assistance with information technology operations."],
  ["Suporte Técnico", "Technical Support"],
  ["Infraestrutura", "Infrastructure"],
  ["Automação", "Automation"],
  ["TI", "IT"],
  ["Sistemas de Informação", "Information Systems"],
  ["Cursando graduação em Sistemas de Informação, com foco em desenvolvimento de software, análise de sistemas e banco de dados.", "Pursuing a degree in Information Systems, focused on software development, systems analysis and databases."],
  ["Lógica de Programação", "Programming Logic"],
  ["Engenharia de Software", "Software Engineering"],
  ["Banco de Dados", "Databases"],
  ["Operador de Sistemas", "Systems Operator"],
  ["Desenvolvimento e manutenção de sistemas web, otimização de processos e suporte técnico especializado.", "Development and maintenance of web systems, process optimization and specialized technical support."],
  ["Técnico em Informática para Internet", "Web Development Technician"],
  ["Formação técnica em desenvolvimento web, banco de dados e programação orientada a objetos.", "Technical education in web development, databases and object-oriented programming."],
  ["HTML5 é uma linguagem de marcação de hipertexto, que usamos para marcar os elementos da página e construí-la.", "HTML5 is a hypertext markup language used to structure and build the elements of a web page."],
  ["CSS3 é uma linguagem de estilo usada para descrever a apresentação dos elementos da página os estilizando.", "CSS3 is a stylesheet language used to define the visual presentation and styling of web page elements."],
  ["JavaScript é uma linguagem de programação interpretada usada no desenvolvimento web para descrever funcionalidades e comportamentos da página.", "JavaScript is an interpreted programming language used in web development to create page functionality and behavior."],
  ["Java é uma linguagem de programação orientada a objetos, muito utilizada no backend para construir APIs, sistemas robustos e aplicações escaláveis.", "Java is an object-oriented programming language widely used in backend development to build APIs, robust systems and scalable applications."],
  ["React é uma biblioteca JavaScript para construção de interfaces de usuário interativas e componentes reutilizáveis.", "React is a JavaScript library for building interactive user interfaces and reusable components."],
  ["Node.js é um ambiente de execução JavaScript no servidor, permitindo criar aplicações backend escaláveis e eficientes.", "Node.js is a server-side JavaScript runtime used to build scalable and efficient backend applications."],
  ["MySQL é um sistema de gerenciamento de banco de dados relacional, amplamente utilizado para armazenar e gerenciar dados.", "MySQL is a relational database management system widely used to store and manage data."],
  ["PHP é uma linguagem de programação muito usada no backend para construir sites dinâmicos, sistemas web e integrações com banco de dados.", "PHP is a programming language widely used in backend development to build dynamic websites, web systems and database integrations."],
  ["PostgreSQL é um banco de dados relacional robusto, ideal para aplicações que precisam de desempenho, confiabilidade e consultas mais avançadas.", "PostgreSQL is a robust relational database, ideal for applications that require performance, reliability and advanced queries."],
  ["Fale comigo!", "Contact me!"],
  ["Currículo", "Resume"],
  ["©2025 por Guilherme Cardoso.", "©2025 by Guilherme Cardoso."],
  ["Todos os direitos reservados.", "All rights reserved."],
  ["NetworkUp - Projeto de conclusao de curso", "NetworkUp - Final Course Project"],
  ["Aplicacao web para gerenciamento de tarefas, permitindo criar, organizar e acompanhar atividades de forma simples e eficiente.", "Web application for task management, allowing users to create, organize and track activities in a simple and efficient way."],
  ["Aplicacao de networking para conectar profissionais e empresas.", "Networking application designed to connect professionals and companies."],
  ["Loja online de bolos artesanais com catalogo, carrinho, pedidos, area do cliente e painel administrativo.", "Online store for handmade cakes with a catalog, shopping cart, orders, customer area and administrative dashboard."]
]);

const attributeTranslations = new Map([
  ["Carregando página", "Loading page"],
  ["Menu principal", "Main menu"],
  ["Abrir menu", "Open menu"],
  ["Fechar menu", "Close menu"],
  ["Computador com códigos", "Computer displaying code"],
  ["Foto de Guilherme Cardoso", "Photo of Guilherme Cardoso"],
  ["Enviar e-mail", "Send email"],
  ["Fazer ligação", "Make a call"],
  ["Me chama no zap!", "Message me on WhatsApp!"],
  ["Ícone de celular.", "Phone illustration."],
  ["Ãcone de celular.", "Phone illustration."],
  ["Voltar ao topo", "Back to top"],
  ["Mudar tema", "Change theme"],
  ["Logo do projeto Task Flow.", "Task Flow project logo."],
  ["Logo do projeto NetworkUp.", "NetworkUp project logo."],
  ["Logo do projeto DoraNina.", "DoraNina project logo."],
  ["Repositorio no Github", "GitHub repository"],
  ["Ver projeto", "View project"]
]);

const metaTranslations = new Map([
  ["Guilherme Cardoso - Desenvolvedor Full Stack especializado em React, Node.js e MySQL. Criando soluções web modernas e eficientes.", "Guilherme Cardoso - Full Stack Developer specializing in React, Node.js and MySQL. Building modern and efficient web solutions."],
  ["Guilherme Cardoso - Desenvolvedor Full Stack", "Guilherme Cardoso - Full Stack Developer"],
  ["Desenvolvedor web Full Stack especializado em criar experiências digitais incríveis com React, Node.js e MySQL.", "Full Stack web developer focused on building modern digital experiences with React, Node.js and MySQL."],
  ["Desenvolvedor web Full Stack criando soluções modernas e eficientes.", "Full Stack web developer building modern and efficient solutions."]
]);

const reverseTranslations = new Map(
  Array.from(translations, ([pt, en]) => [en, pt])
);
const reverseAttributeTranslations = new Map(
  Array.from(attributeTranslations, ([pt, en]) => [en, pt])
);
const reverseMetaTranslations = new Map(
  Array.from(metaTranslations, ([pt, en]) => [en, pt])
);

const LANGUAGE_KEY = "portfolioLanguage";
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "pt";

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function translateTextNode(node, language) {
  const raw = node.nodeValue;
  const normalized = normalize(raw);
  if (!normalized) return;

  const dictionary = language === "en" ? translations : reverseTranslations;
  const translated = dictionary.get(normalized);
  if (!translated) return;

  const leadingWhitespace = raw.match(/^\s*/)?.[0] ?? "";
  const trailingWhitespace = raw.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;
}

function translateText(root, language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    const parent = walker.currentNode.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) continue;
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => translateTextNode(node, language));
}

function translateAttributes(root, language) {
  const dictionary = language === "en" ? attributeTranslations : reverseAttributeTranslations;
  const elements = root.querySelectorAll("[title], [aria-label], [alt]");

  elements.forEach((element) => {
    ["title", "aria-label", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const currentValue = normalize(element.getAttribute(attribute));
      const translated = dictionary.get(currentValue);
      if (translated) element.setAttribute(attribute, translated);
    });
  });
}

function translateMetadata(language) {
  const dictionary = language === "en" ? metaTranslations : reverseMetaTranslations;
  const metadata = document.querySelectorAll('meta[name="description"], meta[name="twitter:title"], meta[name="twitter:description"], meta[property="og:title"], meta[property="og:description"]');

  metadata.forEach((meta) => {
    const currentValue = normalize(meta.getAttribute("content") || "");
    const translated = dictionary.get(currentValue);
    if (translated) meta.setAttribute("content", translated);
  });
}

function updateWhatsAppLink(language) {
  const link = document.querySelector('#contact a[href*="api.whatsapp.com/send"]');
  if (!link) return;

  const message = language === "en"
    ? "Hello, Guilherme! I found you through your portfolio and would like to work with you!"
    : "Olá, Guilherme! Vim do seu portfólio, quero trabalhar contigo!";

  link.href = `https://api.whatsapp.com/send?phone=5551991603189&text=${encodeURIComponent(message)}`;
}

function updateSwitcher(language) {
  const switcher = document.getElementById("language-switcher");
  if (!switcher) return;

  switcher.setAttribute("aria-label", language === "en" ? "Change language" : "Alterar idioma");

  switcher.querySelectorAll("button[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "pt";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-BR";

  translateText(document.body, currentLanguage);
  translateAttributes(document, currentLanguage);
  translateMetadata(currentLanguage);
  updateWhatsAppLink(currentLanguage);
  updateSwitcher(currentLanguage);
}

function createLanguageSwitcher() {
  if (document.getElementById("language-switcher")) return;

  const switcher = document.createElement("div");
  switcher.id = "language-switcher";
  switcher.setAttribute("role", "group");
  switcher.innerHTML = `
    <button type="button" data-language="pt" title="Português">PT</button>
    <button type="button" data-language="en" title="English">EN</button>
  `;

  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-language]");
    if (!button) return;
    applyLanguage(button.dataset.language);
  });

  document.body.appendChild(switcher);
}

function injectLanguageStyles() {
  if (document.getElementById("language-switcher-styles")) return;

  const style = document.createElement("style");
  style.id = "language-switcher-styles";
  style.textContent = `
    #language-switcher {
      position: fixed;
      bottom: 7rem;
      left: 2.5rem;
      z-index: 120;
      width: 8rem;
      height: 4rem;
      padding: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.3rem;
      background: var(--secundary-color);
      border: 0.1rem solid var(--primary-color);
      border-radius: 5rem;
      box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.18);
      backdrop-filter: blur(1rem);
      -webkit-backdrop-filter: blur(1rem);
    }

    #language-switcher button {
      flex: 1;
      height: 3rem;
      padding: 0;
      border: 0;
      border-radius: 5rem;
      background: transparent;
      color: var(--paragraph);
      font-family: "DM Sans", sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
      transition: color 250ms, background-color 250ms, transform 250ms;
    }

    #language-switcher button:hover {
      color: var(--primary-color);
    }

    #language-switcher button.active {
      color: #fff;
      background: var(--primary-color);
    }

    #language-switcher button:active {
      transform: scale(0.94);
    }

    #language-switcher button:focus-visible {
      outline: 0.2rem solid var(--primary-color);
      outline-offset: 0.2rem;
    }

    @media (max-width: 480px) {
      #language-switcher {
        left: 1.5rem;
      }
    }
  `;

  document.head.appendChild(style);
}

function observeDynamicContent() {
  const observer = new MutationObserver((mutations) => {
    const hasNewContent = mutations.some((mutation) => mutation.addedNodes.length > 0);
    if (!hasNewContent) return;

    translateText(document.body, currentLanguage);
    translateAttributes(document, currentLanguage);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectLanguageStyles();
  createLanguageSwitcher();
  applyLanguage(currentLanguage);
  observeDynamicContent();
});
