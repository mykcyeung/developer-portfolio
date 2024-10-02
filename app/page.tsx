import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"
import HomePage from "@/components/HomePage";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="bg-blue-800 h-screen w-[calc(screen-56px)]">
      <div className="fixed w-full z-50">
      <HomePage />
      </div>
    
      <Hero />
      {/* <About /> */}
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
