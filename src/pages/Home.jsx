import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
