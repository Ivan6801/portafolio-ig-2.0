import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { AboutMe } from "../../components/AboutMe";
import { Projects } from "../../components/Projects";
import { Experience } from "../../components/Experience";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <>
      <div style={{ background: "#fafafa" }}>
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
