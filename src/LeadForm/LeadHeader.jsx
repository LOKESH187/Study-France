import React from "react";
import "./LeadHeader.css"; // make sure to create this CSS file
import BrandLogo from "../images/LOGO.png"
function LeadHeader() {
  return (
    <header className="lead-header">
      <div className="lead-header-container">
        <div className="lead-header-content">
          {/* Logo and Brand */}
          <div className="lead-brand">
            <div className="lead-logo">
              <img src={BrandLogo} alt="Study France Logo" />
            </div>
            <div className="lead-brand-info">
              <h1 className="lead-brand-title">
                <span className="brand-word-study">Study</span> 
                <span className="brand-word-france">France</span>
              </h1>
              <p className="lead-brand-subtitle">
                Premium Education Consultancy
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lead-contact-info">
            <div className="lead-contact-item">
              <span className="lead-contact-icon">📞</span>
              <span className="lead-contact-text">+91 98765 43210</span>
            </div>
            <div className="lead-contact-item">
              <span className="lead-contact-icon">✉️</span>
              <span className="lead-contact-text">info@StudyFrance.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LeadHeader;
