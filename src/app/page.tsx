import Navbar from "./components/Navbar/Navbar";
import Badges from "./components/Badges/Badges";
import About from "./sections/About";
import Projects from "./sections/Projects";
import CV from "./sections/CV";
import Contact from "./sections/Contact";
import Home from "./sections/Home";

export default function App() {
  return (
    <main>
      <Navbar />
      <Badges />
      <Home />
      <About />
      <Projects />
      <CV />
      <Contact />
    </main>
  );
}
