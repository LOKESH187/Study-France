import React from "react";
import { GraduationCap, Globe, Home } from "lucide-react";
import "./Features.css";

export default function Features() {
  const features = [
    { icon: GraduationCap, title: "World-Class Universities" },
    { icon: Globe, title: "Global Career Opportunities" },
    { icon: Home, title: "Affordable Living & Tuition" },
  ];

  return (
    <section className="features">
      <h2>Why Choose France?</h2>
      <div className="features-grid">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="feature-card">
              <Icon />
              <h3>{f.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
