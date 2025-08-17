import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
