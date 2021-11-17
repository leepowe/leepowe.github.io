import Header from './components/Header.js';
import Footer from './components/Footer.js';
import AboutMe from './pages/AboutMe.js';

buildPage();

function buildPage (){
    navigateToAboutMe();
    header();
    footer();
}

const app = document.querySelector('#app');

function header() {
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = Header();
  }
  
  function footer() {
    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = Footer();
  }