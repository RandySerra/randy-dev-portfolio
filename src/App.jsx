import "./App.css";

import Banner from "./Components/Banner/Banner";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Menuhorizontal from "./Components/Menuhorizontal/Menuhorizontal";
import Proyects from "./Components/Projects/Projects";
import Certificate from "./Components/Certificate/Certificates";

import FadeInSection from "./assets/FadeInSection";

function App() {
  return (
    <>
      <div className="app">
        <Menuhorizontal />
        <div className="app-contenido">
          <FadeInSection>
            <Home/>
          </FadeInSection>

          <FadeInSection>
            <About/>
          </FadeInSection>

          <FadeInSection>
            <Skills/>
          </FadeInSection>

          <FadeInSection>
            <Experience/>
          </FadeInSection>

          <FadeInSection>
            <Proyects/>
          </FadeInSection>

          <FadeInSection className="app-contenido">
            <Certificate />
          </FadeInSection>
        </div>
      </div>
    </>
  );
}

export default App;
