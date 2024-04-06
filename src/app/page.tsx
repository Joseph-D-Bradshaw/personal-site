import Navbar from "./components/Navbar/Navbar";
import Badges from "./components/Badges/Badges";
import About from "./sections/About";
import Projects from "./sections/Projects";
import CV from "./sections/CV";
import Contact from "./sections/Contact";
import Home from "./sections/home/Home";

import styles from "./page.module.css";

export default function App() {
  return (
    <>
      <Badges style={{ float: "left", marginTop: 60 }} />
      <main className={styles.grid}>
        <div style={{ display: "flex", justifyContent: "center", gridArea: "nav" }}>
          <Navbar />
        </div>
        <Home />
        <About />
        <Projects gridArea="projects" />
        <CV gridArea="cv" />
        <Contact gridArea="contact" />
      </main>
    </>
  );
}
