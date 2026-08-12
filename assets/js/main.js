import { projetos } from "./projetos.js";
import { initParticles } from "./particles.js";
import "./i18n.js";

// Hide loading screen immediately
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 300);
  }
});

const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const projectsSection = document.querySelector("#projects .wrapper");

const about = document.querySelector("#about");
const stats = document.querySelector("#stats");
const experience = document.querySelector("#experience");
const projects = document.querySelector("#projects");
const knowledge = document.querySelector("#knowledge");
const contact = document.querySelector("#contact");

window.addEventListener("load", function begin() {
  if (projectsSection) {
    projetos(projectsSection);
  }
  initProjectFilters();
  initCounters();
  initParticles();
});

window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(experience);
  activateMenuAtCurrentSection(projects);
  activateMenuAtCurrentSection(knowledge);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

openMenu();
function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

closeMenu();
function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

// Project Filters
function initProjectFilters() {
  setTimeout(() => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('#projects .card');

    if (filterBtns.length === 0 || projectCards.length === 0) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter cards
        projectCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hide');
          } else {
            card.classList.add('hide');
          }
        });
      });
    });
  }, 100);
}

// Animated Counters for Stats
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;
  
  const speed = 200;
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        
        const updateCounter = () => {
          const current = +counter.innerText;
          const increment = target / speed;
          
          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10);
          } else {
            counter.innerText = target + '+';
          }
        };
        
        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
  #home .computer-wrapper, 
  #about, 
  #about header, 
  #about p,
  #stats,
  #stats header,
  #stats .stat-card,
  #experience,
  #experience header,
  #experience .timeline-item,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledge header,
  #knowledge .card,
  #contact,
  #contact header`
);

// Toggle modo claro/escuro
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("lightMode", document.body.classList.contains("light-mode"));
});

// Carregar preferência salva
if (localStorage.getItem("lightMode") === "true") {
  document.body.classList.add("light-mode");
  toggle.checked = true;
}
