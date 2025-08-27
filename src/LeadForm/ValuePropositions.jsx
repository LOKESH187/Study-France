import React from "react";
import "./ValuePropositions.css";

const valuePropositions = [
  {
    icon: "💰",
    title: "Affordable Education",
    description:
      "Low tuition fees compared to other European countries, with excellent scholarship opportunities.",
  },
  {
    icon: "🎓",
    title: "World-Class Universities",
    description:
      "Home to prestigious institutions like Sorbonne, École Polytechnique, and HEC Paris.",
  },
  {
    icon: "💼",
    title: "Work Opportunities",
    description:
      "2-year post-study work visa and access to the European job market.",
  },
  {
    icon: "🌍",
    title: "Cultural Diversity",
    description:
      "Experience rich French culture while studying in a globally diverse environment.",
  },
  {
    icon: "🗣️",
    title: "Language Advantage",
    description:
      "Learn French while studying in English-taught programs, enhancing your career prospects.",
  },
  {
    icon: "❤️",
    title: "Quality of Life",
    description:
      "Excellent healthcare, transportation, and overall quality of life for students.",
  },
];

function ValuePropositions() {
  return (
    <section className="value-propositions">
      <div className="container">
        <div className="Value-propositions-section-header">
          <h2 className="Value-propositions-section-title">
            Why Choose France for Your Higher Education?
          </h2>
          <p className="Value-propositions-section-description">
            France offers world-class education, rich culture, and excellent
            career opportunities for international students
          </p>
        </div>
        <div className="value-grid">
          {valuePropositions.map((item, index) => (
            <div key={index} className="value-card">
              <div className="icon-container">
                <span className="icon">{item.icon}</span>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuePropositions;
