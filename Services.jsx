import React from "react";
import { FileText, Users, Home, GraduationCap } from "lucide-react";
import "./Services.css";

export default function Services() {
  const services = [
    { icon: FileText, title: "Admission Support" },
    { icon: Users, title: "Visa Assistance" },
    { icon: Home, title: "Accommodation Help" },
    { icon: GraduationCap, title: "Scholarship Guidance" },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="service-card">
              <Icon />
              <h3>{s.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
