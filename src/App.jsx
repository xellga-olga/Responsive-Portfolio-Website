import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Slider />
      <About />
    </>
  );
}

export default App;
