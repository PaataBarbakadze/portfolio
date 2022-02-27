import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import TimeLine from "./components/TimeLine/TimeLine";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <TimeLine></TimeLine>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
