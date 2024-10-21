import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Slider />
      <About />
      <Slider />
      <Services />
      <Slider />
      <Projects />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
