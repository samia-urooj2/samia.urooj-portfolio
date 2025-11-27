// app/page.tsx
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/project';
import Contact from './components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}