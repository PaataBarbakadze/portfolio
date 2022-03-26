import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import TimeLine from "./components/TimeLine/TimeLine";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactForm from "./components/ContactForm/ContactForm";
import Projects from "./components/Projects/Projects";

import './App.css';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <TimeLine></TimeLine>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
