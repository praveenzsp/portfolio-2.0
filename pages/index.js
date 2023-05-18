import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponent";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Tooltip } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const constraintRef = useRef(null);
  return (
    <div ref={constraintRef}>
        <Tooltip content='drag n play with astro' color='default' trigger="click" placement="right">
            <motion.div className="z-10 relative w-24 h-24 lg:w-32 lg:h-32">
                  <motion.img
                    src="/astro.png"
                    width={150}
                    height={150}
                    className="z-10 relative"
                    alt=""
                    drag={true}
                    dragConstraints={constraintRef}
                    dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                  />
            </motion.div>
        </Tooltip>
      <NavbarComponent />
      <Hero />
      <Skills />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
