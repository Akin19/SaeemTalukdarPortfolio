import "./App.css";
import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Service from "./Components/services/Service";
import Skills from "./Components/skills/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
      </main>
    </div>
  );
};

export default App;
