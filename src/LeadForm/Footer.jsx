import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import "./Footer.css";

const quickLinks = [
  "About Us",
  "Universities",
  "Courses",
  "Scholarships",
  "Success Stories",
];

const services = [
  "University Selection",
  "Application Assistance",
  "Visa Guidance",
  "Language Preparation",
  "Pre-departure Support",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo + Description */}
          <div>
            <div className="footer-logo">
              <div className="footer-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="footer-title">EduFrance</h3>
                <p className="footer-subtitle">Premium Education Consultancy</p>
              </div>
            </div>
            <p className="footer-desc">
              Your trusted partner for studying in France. We provide end-to-end
              guidance for your educational journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>123 Education Plaza, Mumbai, India</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>info@edufrance.com</span>
              </div>

              <div className="footer-socials">
                <a href="#" data-testid="link-facebook">
                  <SiFacebook size={20} />
                </a>
                <a href="#" data-testid="link-instagram">
                  <SiInstagram size={20} />
                </a>
                <a href="#" data-testid="link-linkedin">
                  <SiLinkedin size={20} />
                </a>
                <a href="#" data-testid="link-youtube">
                  <SiYoutube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; 2024 EduFrance Consultancy. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
