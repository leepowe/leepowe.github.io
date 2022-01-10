import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./Pages/Projects";

buildPage();

function buildPage(){
    About();
    Contact();
    Footer();
    Header();
    Projects();
}