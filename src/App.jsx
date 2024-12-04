import "./App.css";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import ScrollUp from "./Components/scrollUp/ScrollUp";
import Service from "./Components/services/Service";
import Skills from "./Components/skills/Skills";
import Testimonials from "./Components/testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;
