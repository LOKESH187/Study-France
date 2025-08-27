import React, { useEffect, useState } from "react";
import "./LeadHero.css";
import LeadPopup from "./LeadPopup";

function LeadHero() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ✅ Count-up animation
  useEffect(() => {
    const counters = document.querySelectorAll(".lead-metric-number");

    counters.forEach((counter) => {
      const target = counter.getAttribute("data-target");
      const duration = 2000; // 2s animation
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0 → 1

        const numericTarget = parseInt(target.replace(/\D/g, "")); // only numbers
        const value = Math.floor(progress * numericTarget);

        // Preserve suffix like % or +
        if (target.includes("%")) {
          counter.innerText = value + "%";
        } else if (target.includes("+")) {
          counter.innerText = value + "+";
        } else {
          counter.innerText = value;
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }, []);

  return (
    <section className="lead-hero-section">
      {/* Background decorative elements */}
      <div className="lead-hero-background">
        <div className="lead-decoration lead-decoration-1"></div>
        <div className="lead-decoration lead-decoration-2"></div>
        <div className="lead-decoration lead-decoration-3"></div>
      </div>

      <div className="lead-hero-container">
        <div className="lead-hero-content">
          {/* Left Side: Text */}
          <div className="lead-hero-text">
            <div className="lead-hero-badge">
              🇫🇷 #1 France Education Consultancy
            </div>

            <h1 className="lead-hero-title">
              Study in{" "}
              <span className="lead-highlight lead-text-animate">France</span>
              <br />
              Your Dream{" "}
              <span className="lead-highlight lead-text-animate">Awaits</span>
            </h1>

            <p className="lead-hero-description">
              Join 5000+ Indian students who achieved their dreams of studying
              in France's world-renowned universities. Get expert guidance from
              our certified consultants.
            </p>

            {/* Success Metrics with Count-Up */}
            <div className="lead-metrics">
              <div className="lead-metric">
                <div className="lead-metric-number" data-target="97%">
                  0%
                </div>
                <div className="lead-metric-label">Success Rate</div>
              </div>
              <div className="lead-metric">
                <div className="lead-metric-number" data-target="5000+">
                  0+
                </div>
                <div className="lead-metric-label">Students Placed</div>
              </div>
              <div className="lead-metric">
                <div className="lead-metric-number" data-target="150+">
                  0+
                </div>
                <div className="lead-metric-label">University Partners</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="lead-trust-badges">
              <div className="lead-trust-badge">
                <span className="lead-trust-icon">🛡️</span>
                <span>100% Visa Assistance</span>
              </div>
              <div className="lead-trust-badge">
                <span className="lead-trust-icon">🏆</span>
                <span>ISO Certified</span>
              </div>
              <div className="lead-trust-badge">
                <span className="lead-trust-icon">⏰</span>
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="lead-cta-buttons">
            <button
              className="lead-btn primary-btn"
              onClick={() => setIsPopupOpen(true)}
            >
              Request Callback
            </button>
            <button className="lead-btn secondary-btn">Course Finder</button>
          </div>
        </div>
      </div>
      <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}

export default LeadHero;
