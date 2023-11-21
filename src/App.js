import React from "react";
import "./App.css"
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Cover from "./components/Cover";

export default function App() {
  return (
    <main className="main">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}