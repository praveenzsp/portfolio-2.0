import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponent";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
// import bgVideo from '../public/ceiling.mp4'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}
