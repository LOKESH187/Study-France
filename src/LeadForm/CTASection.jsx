import React from "react";
import { CalendarCheck, Download, Phone } from "lucide-react";
import "./CTASection.css";

export default function CTASection() {
  const scrollToForm = () => {
    const formElement = document.getElementById("leadForm");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const downloadBrochure = () => {
    alert(
      "Brochure download will be available soon. Please contact us directly for more information."
    );
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to Start Your France Education Journey?
        </h2>
        <p className="cta-subtitle">
          Join thousands of successful students who chose France for their
          higher education. Book your free consultation today!
        </p>

        <div className="cta-buttons">
          <button
            onClick={scrollToForm}
            className="cta-btn primary"
            data-testid="button-consultation"
          >
            <CalendarCheck className="icon" size={16} />
            Book Free Consultation
          </button>

          <button
            onClick={downloadBrochure}
            className="cta-btn secondary"
            data-testid="button-brochure"
          >
            <Download className="icon" size={16} />
            Download Brochure
          </button>
        </div>

        <div className="cta-contact">
          <Phone className="icon" size={16} />
          Call us now: +91 98765 43210 | Available 24/7
        </div>
      </div>
    </section>
  );
}
