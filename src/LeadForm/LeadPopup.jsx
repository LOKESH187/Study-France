import React, { useState } from "react";
import "./LeadPopup.css";
import LOGO from "../images/LOGO.png";

// Close icon component
const CloseIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Phone icon component
const PhoneIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

function LeadPopup({ isOpen, onClose }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Callback request submitted successfully!");
      onClose();
    }, 2000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="lead-popup-overlay" onClick={handleOverlayClick}>
      <div className="lead-popup">
        {/* Close Button */}
        <button
          className="lead-popup-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          <CloseIcon size={20} />
        </button>

        {/* Left side (promotional banner) */}
        <div className="lead-popup-left">
          <div className="promo-content">
            <div className="promo-icon">🎓</div>
            <h2>Save Big on Your Application Fees!</h2>
            <p>Get expert guidance for studying in France</p>
            <div className="promo-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">✨</span>
                <span>Free Consultation</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📋</span>
                <span>Document Support</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🎯</span>
                <span>Visa Assistance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (form) */}
        <div className="lead-popup-right">
          <div className="form-header">
            <img
              src={LOGO}
              alt="Study France Logo"
              className="lead-popup-logo"
            />
            <h3>Let's Make Your Dreams Reality!</h3>
            <p className="lead-popup-text">
              We are just a call away from making your{" "}
              <span className="highlight">dreams into reality!!</span>
            </p>
          </div>

          {/* Form */}
          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="lead-popup-input">
              <span className="lead-popup-prefix">+91</span>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength="10"
                required
              />
            </div>

            <button
              type="submit"
              className={`lead-popup-btn ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : (
                <>
                  <PhoneIcon size={18} />
                  Request Callback
                </>
              )}
            </button>
          </form>

          {/* QR Code Section */}
          <div className="lead-popup-qr">
            <div className="qr-code">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=whatsapp://send?phone=916000060002"
                alt="WhatsApp QR Code"
              />
            </div>
            <div className="qr-info">
              <p>Or reach us directly on</p>
              <p className="lead-popup-phone">+91 60000 60002</p>
            </div>
          </div>

          <div className="popup-footer">
            <p className="lead-popup-policy">
              By continuing, you agree to our <a href="#">Terms</a> and{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadPopup;
