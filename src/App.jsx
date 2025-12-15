import React from "react";

import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './components/Qualification.css';
import './components/Home.css';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import './components/NavBar.css'
import Footer from "./components/Footer";



export default function App() {
  return (
    <div>
      <Navbar />
      <br /><br />
      <section id="home" className="py-20"><Home /></section>
      <section id="about" className="py-20"><About /></section>
      <section id='skills' className='py-20'><Skills /></section>
      <section id='qualification' className='py-20'><Qualification /></section>
      <section id='projects' className='py-20'><Projects /></section>
      <section id='contact' className='py-20'><Contact /></section>
      <Footer />
    </div>
  );
}