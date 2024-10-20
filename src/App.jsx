import "./App.css";
import About from "./components/About/About";
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
      <Services />
      <Projects />
    </>
  );
}

export default App;
