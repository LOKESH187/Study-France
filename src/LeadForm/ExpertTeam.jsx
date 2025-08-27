import React from "react";
import "./ExpertTeam.css";

const experts = [
  {
    name: "Dr. Sarah Johnson",
    title: "Senior Education Consultant",
    experience: "15+ years experience | 1000+ successful placements",
    tags: ["France Specialist", "Visa Expert"],
  },
  {
    name: "Mr. Rajesh Gupta",
    title: "MBA Admission Specialist",
    experience: "12+ years experience | HEC Paris Alumni",
    tags: ["Business Schools", "Scholarship Expert"],
  },
  {
    name: "Ms. Priya Sharma",
    title: "Engineering Programs Expert",
    experience: "10+ years experience | Sorbonne Graduate",
    tags: ["STEM Programs", "Research Focus"],
  },
];

// Achievement icon component
const Achievement = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 16L3 21l5.5-1L12 16l-7 0zM19 16l2 5-5.5-1L12 16l7 0zM12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5zM12 2l2.939 6.561L22 9.937l-5.069 4.525L18.878 22L12 18.561L5.122 22l1.947-7.538L2 9.937l7.061-1.376L12 2z" />
  </svg>
);

// User check icon component
const UserCheck = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16,11 18,13 22,9" />
  </svg>
);

export default function ExpertTeam() {
  return (
    <section className="expert-section">
      <div className="expert-container">
        <div className="expert-header">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <Achievement size={32} />
            <div className="decoration-line"></div>
          </div>
          <h2>Meet Our Expert Counselors</h2>
          <p>
            Certified education consultants with extensive experience in French
            admissions
          </p>
        </div>

        <div className="expert-grid">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="expert-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-background">
                <div className="background-pattern"></div>
              </div>

              <div className="expert-avatar">
                <div className="avatar-placeholder">
                  <span className="avatar-initials">
                    {expert.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="avatar-ring"></div>
                <div className="achievement-badge">
                  <UserCheck size={16} />
                </div>
              </div>

              <div className="expert-content">
                <h3 className="expert-name">{expert.name}</h3>
                <p className="expert-title">{expert.title}</p>
                <p className="expert-experience">{expert.experience}</p>

                <div className="expert-tags">
                  {expert.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`tag ${
                        tagIndex === 0 ? "tag-blue" : "tag-red"
                      }`}
                      style={{
                        animationDelay: `${index * 0.2 + tagIndex * 0.1}s`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        {/* Background decorations */}
        <div className="background-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
}
