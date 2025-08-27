import React, { useState } from "react";
import "./UniversityPartners.css";

const universities = [
  {
    id: 1,
    name: "Sorbonne University",
    description:
      "One of the world's most prestigious universities, renowned for humanities and sciences with 800+ years of excellence.",
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=250&fit=crop&crop=center",
    ranking: "#1 in France",
    established: "1150",
    students: "55,000+",
  },
  {
    id: 2,
    name: "HEC Paris",
    description:
      "Leading European business school offering world-class MBA and executive programs with global recognition.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop&crop=center",
    ranking: "#1 Business School",
    established: "1881",
    students: "4,000+",
  },
  {
    id: 3,
    name: "INSEAD",
    description:
      "Global business school with campuses in Europe, Asia, and the Middle East offering world-class education.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop&crop=center",
    ranking: "Top 3 Global MBA",
    established: "1957",
    students: "1,500+",
  },
  {
    id: 4,
    name: "Sciences Po",
    description:
      "Premier institution for political science, international relations, and public policy with global influence.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop&crop=center",
    ranking: "#1 Political Science",
    established: "1872",
    students: "14,000+",
  },
  {
    id: 5,
    name: "École Polytechnique",
    description:
      "France's most prestigious engineering school, training future leaders in science and technology innovation.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop&crop=center",
    ranking: "#1 Engineering",
    established: "1794",
    students: "3,000+",
  },
  {
    id: 6,
    name: "ENS Paris",
    description:
      "Elite institution producing Nobel laureates, Fields medalists, and world-renowned scholars in research.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center",
    ranking: "#1 Research",
    established: "1794",
    students: "2,500+",
  },
  {
    id: 7,
    name: "Université PSL",
    description:
      "World-class research university combining excellence in sciences, humanities, and arts education.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center",
    ranking: "Top 50 Global",
    established: "2010",
    students: "21,000+",
  },
  {
    id: 8,
    name: "Panthéon-Sorbonne",
    description:
      "Leading university for economics, management, law, and political science studies in Europe.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
    ranking: "Top Economics",
    established: "1971",
    students: "47,000+",
  },
  {
    id: 9,
    name: "CentraleSupélec",
    description:
      "Premier engineering school focusing on innovation, entrepreneurship, and digital transformation solutions.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&crop=center",
    ranking: "Top 5 Engineering",
    established: "2015",
    students: "4,500+",
  },
];

// LeadForm component
const LeadForm = ({ university, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      university: university.name,
    });
    // Handle form submission here
    alert(
      `Thank you! We'll contact you about ${university.name} admission requirements.`
    );
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="lead-form-overlay" onClick={onClose}>
      <div className="lead-form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="lead-form-header">
          <h3>Check Eligibility for {university.name}</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="program">Interested Program</label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >
              <option value="">Select a program</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD Program</option>
              <option value="exchange">Exchange Program</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Check My Eligibility
          </button>
        </form>
      </div>
    </div>
  );
};

function UniversityPartners() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleCheckEligibility = (university) => {
    setSelectedUniversity(university);
  };

  const closeLeadForm = () => {
    setSelectedUniversity(null);
  };

  return (
    <section className="university-partners">
      <div className="container">
        <div className="university-section-header">
          <div className="header-badge">
            <span className="badge-text">Trusted Partners</span>
          </div>
          <h2 className="university-section-title">
            Our University Partners in France
          </h2>
          <p className="section-description">
            We have partnerships with over 150 top-ranked French universities
            and institutions
          </p>
        </div>

        <div className="university-grid">
          {universities.map((university) => (
            <div key={university.id} className="university-card">
              <div className="card-image">
                <img src={university.image} alt={university.name} />
                <div className="card-badge">{university.ranking}</div>
              </div>
              <div className="card-content">
                <h3 className="university-name">{university.name}</h3>
                <p className="university-description">
                  {university.description}
                </p>
                <div className="university-stats">
                  <div className="stat">
                    <span className="stat-label">Est.</span>
                    <span className="stat-value">{university.established}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Students</span>
                    <span className="stat-value">{university.students}</span>
                  </div>
                </div>
                <button
                  className="check-eligibility-btn"
                  onClick={() => handleCheckEligibility(university)}
                >
                  Check Eligibility
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="partners-note">
          <div className="note-content">
            <div className="france-flag">
              <div className="flag-stripe blue"></div>
              <div className="flag-stripe white"></div>
              <div className="flag-stripe red"></div>
            </div>
            <p>And many more prestigious institutions across France</p>
          </div>
        </div>
      </div>

      {selectedUniversity && (
        <LeadForm university={selectedUniversity} onClose={closeLeadForm} />
      )}
    </section>
  );
}

export default UniversityPartners;
