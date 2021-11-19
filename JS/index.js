import Footer from './components/Footer.js';
import Header from './components/Header.js';
import AboutMe from './pages/AboutMe.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';

buildPage();

function buildPage() {
    footer();
    header();
    navigateToAboutMe();
    navigateToContact();
    navigateToProjects();
}

const app = document.querySelector('#app');

function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}

function header() {
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = Header();
  }  

  function navigateToAboutMe() {
    const aboutMeButton = document.querySelector('.nav__list_aboutMe');
    aboutMeButton.addEventListener('click', ()=> {
      console.log('about me page fired');
      let app = document.querySelector('#app');
      app.innerHTML = AboutMe();
    });
  }

  function navigateToContact() {
    const contactButton = document.querySelector('.nav__list_contact');
    contactButton.addEventListener('click', ()=> {
      console.log('contact page fired');
      let app = document.querySelector('#app');
      app.innerHTML = Contact();
    });
  }

  function navigateToProjects() {
    const projectsButton = document.querySelector('.nav__list_projects');
    projectsButton.addEventListener('click', ()=> {
      console.log('projects page fired');
      let app = document.querySelector('#app');
      app.innerHTML = Projects();
    });
  }