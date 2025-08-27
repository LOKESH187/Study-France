// import React from 'react';
// import './LeadForm.css';

// function LeadForm() {
//   const [formData, setFormData] = React.useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     countryCode: '+91',
//     preferredCourse: '',
//     academicStatus: ''
//   });
  
//   const [errors, setErrors] = React.useState({});
//   const [isSubmitting, setIsSubmitting] = React.useState(false);

//   const validateField = (name, value) => {
//     let error = '';
    
//     if (!value || value.trim() === "") {
//       if (name === "fullName" || name === "email" || name === "phone") {
//         error = `Please enter your ${name
//           .replace(/([A-Z])/g, " $1")
//           .toLowerCase()}`;
//       }
//     } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//       error = "Please enter a valid email address";
//     } else if (
//       name === "phone" &&
//       !/^[0-9]{10}$/.test(value.replace(/\s+/g, ""))
//     ) {
//       error = "Please enter a valid 10-digit phone number";
//     }
    
//     setErrors(prev => ({ ...prev, [name]: error }));
//     return !error;
//   };

//   const handleInputChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     if (errors[name]) {
//       validateField(name, value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const requiredFields = ['fullName', 'email', 'phone'];
//     let isValid = true;
    
//     requiredFields.forEach(field => {
//       if (!validateField(field, formData[field])) {
//         isValid = false;
//       }
//     });

//     if (isValid) {
//       setIsSubmitting(true);
//       try {
//         const response = await fetch('/api/leads', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData)
//         });
        
//         if (response.ok) {
//           alert('Success! Your consultation request has been submitted successfully. Our expert counselor will contact you within 24 hours.');
//           setFormData({
//             fullName: '',
//             email: '',
//             phone: '',
//             countryCode: '+91',
//             preferredCourse: '',
//             academicStatus: ''
//           });
//           setErrors({});
//         } else {
//           alert('Failed to submit form. Please try again.');
//         }
//       } catch (error) {
//         alert('Network error. Please check your connection and try again.');
//       }
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-header">
//         <h2>Get Free France Education Consultation</h2>
//         <p>Book your personalized counseling session with our certified experts</p>
//       </div>
      
//       <form onSubmit={handleSubmit} className="lead-form">
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name <span className="required">*</span></label>
//           <input
//             type="text"
//             id="fullName"
//             value={formData.fullName}
//             onChange={(e) => handleInputChange('fullName', e.target.value)}
//             placeholder="Enter your full name"
//             className={errors.fullName ? 'error' : ''}
//             data-testid="input-fullname"
//           />
//           {errors.fullName && <div className="error-message">{errors.fullName}</div>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="email">Email Address <span className="required">*</span></label>
//           <input
//             type="email"
//             id="email"
//             value={formData.email}
//             onChange={(e) => handleInputChange('email', e.target.value)}
//             placeholder="your.email@example.com"
//             className={errors.email ? 'error' : ''}
//             data-testid="input-email"
//           />
//           {errors.email && <div className="error-message">{errors.email}</div>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="phone">Phone Number <span className="required">*</span></label>
//           <div className="phone-container">
//             <select
//               value={formData.countryCode}
//               onChange={(e) => handleInputChange('countryCode', e.target.value)}
//               className="country-code"
//               data-testid="select-countrycode"
//             >
//               <option value="+91">🇮🇳 +91</option>
//               <option value="+1">🇺🇸 +1</option>
//               <option value="+44">🇬🇧 +44</option>
//               <option value="+61">🇦🇺 +61</option>
//             </select>
//             <input
//               type="tel"
//               id="phone"
//               value={formData.phone}
//               onChange={(e) => handleInputChange('phone', e.target.value)}
//               placeholder="9876543210"
//               className={errors.phone ? 'error' : ''}
//               data-testid="input-phone"
//             />
//           </div>
//           {errors.phone && <div className="error-message">{errors.phone}</div>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="course">Preferred Course/Field</label>
//           <select
//             id="course"
//             value={formData.preferredCourse}
//             onChange={(e) => handleInputChange('preferredCourse', e.target.value)}
//             data-testid="select-course"
//           >
//             <option value="">Select your preferred field</option>
//             <option value="engineering">Engineering & Technology</option>
//             <option value="business">Business & Management</option>
//             <option value="arts">Arts & Humanities</option>
//             <option value="sciences">Sciences</option>
//             <option value="medicine">Medicine & Health Sciences</option>
//             <option value="law">Law & Legal Studies</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="status">Current Academic Status</label>
//           <select
//             id="status"
//             value={formData.academicStatus}
//             onChange={(e) => handleInputChange('academicStatus', e.target.value)}
//             data-testid="select-status"
//           >
//             <option value="">Select your current status</option>
//             <option value="12th-completed">12th Standard Completed</option>
//             <option value="graduation-ongoing">Graduation Ongoing</option>
//             <option value="graduation-completed">Graduation Completed</option>
//             <option value="working">Working Professional</option>
//           </select>
//         </div>
        
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="submit-button"
//           data-testid="button-submit"
//         >
//           📅 {isSubmitting ? 'Submitting...' : 'Book Free Consultation Now'}
//         </button>
        
//         <div className="trust-message">
//           🔒 Your information is 100% secure and confidential
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LeadForm;


import React, { useState, useRef,useEffect } from "react";
import './LeadForm.css';

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    program: "",
    intake: "",
    testStatus: "",
    educationLevel: "",
    country: "",
    workExperience: false,
    previousApplications: false,
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    { value: "bachelors", label: "🎓 Bachelor's" },
    { value: "masters", label: "📚 Master's" },
    { value: "phd", label: "🔬 Ph.D" },
  ];

  const intakes = [
    { value: "jan2026", label: "❄️ Jan 2026" },
    { value: "sept2026", label: "🍂 Sept 2026" },
    { value: "jan2027", label: "❄️ Jan 2027" },
  ];

  const testStatuses = [
    { value: "not_decided", label: "🤔 Not yet decided" },
    { value: "need_advice", label: "💡 Need Advice" },
    { value: "planning", label: "📝 Planning to Book" },
    { value: "already_taken", label: "✅ Already Taken" },
  ];

  const educationLevels = [
    { value: "12th", label: "🎒 12th Grade" },
    { value: "bachelors", label: "🎓 Bachelor's" },
    { value: "masters", label: "📚 Master's" },
    { value: "others", label: "📋 Others" },
  ];

  const countries = [
    { value: "india", label: "🇮🇳 India" },
    { value: "china", label: "🇨🇳 China" },
    { value: "usa", label: "🇺🇸 United States" },
    { value: "uk", label: "🇬🇧 United Kingdom" },
    { value: "canada", label: "🇨🇦 Canada" },
    { value: "australia", label: "🇦🇺 Australia" },
    { value: "other", label: "🌍 Other" },
  ];

  const steps = [
    { number: 1, title: "Your Dream Program", icon: "🎓" },
    { number: 2, title: "Academic Journey", icon: "📚" },
    { number: 3, title: "Let's Connect", icon: "🤝" },
  ];

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.program) newErrors.program = "Please select a program";
      if (!formData.intake) newErrors.intake = "Please select an intake";
      if (!formData.testStatus)
        newErrors.testStatus = "Please select your test status";
    } else if (step === 2) {
      if (!formData.educationLevel)
        newErrors.educationLevel = "Please select your education level";
      if (!formData.country) newErrors.country = "Please select your country";
    } else if (step === 3) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 👇 Add a ref to the top of the form
  const formTopRef = useRef(null);

  // 👇 Whenever step changes, scroll to top
  useEffect(() => {
    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }
  }, [currentStep]);


  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        alert("Thank you! A France expert will contact you soon.");
        console.log("Form submitted:", formData);
      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const renderPreferencesStep = () => (
    <div className="step-content">
      <div className="step-header">
        <div className="step-icon">🎓</div>
        <h2 className="step-title">Check Your France Admission Preference</h2>
        <p className="step-subtitle">
          Help us understand your study plans for France
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">What's your preferred program?</label>
        <div className="radio-grid radio-grid-3">
          {programs.map((program) => (
            <div key={program.value} className="radio-option">
              <input
                type="radio"
                id={program.value}
                name="program"
                value={program.value}
                checked={formData.program === program.value}
                onChange={(e) => handleInputChange("program", e.target.value)}
                className="radio-input"
              />
              <label htmlFor={program.value} className="radio-label">
                {program.label}
              </label>
            </div>
          ))}
        </div>
        {errors.program && (
          <span className="error-message">{errors.program}</span>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">Which intake are you planning for?</label>
        <div className="radio-grid radio-grid-3">
          {intakes.map((intake) => (
            <div key={intake.value} className="radio-option">
              <input
                type="radio"
                id={intake.value}
                name="intake"
                value={intake.value}
                checked={formData.intake === intake.value}
                onChange={(e) => handleInputChange("intake", e.target.value)}
                className="radio-input"
              />
              <label htmlFor={intake.value} className="radio-label">
                {intake.label}
              </label>
            </div>
          ))}
        </div>
        {errors.intake && (
          <span className="error-message">{errors.intake}</span>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">
          What is your IELTS/TOEFL/PTE Status?
        </label>
        <div className="radio-grid radio-grid-2">
          {testStatuses.map((status) => (
            <div key={status.value} className="radio-option">
              <input
                type="radio"
                id={status.value}
                name="testStatus"
                value={status.value}
                checked={formData.testStatus === status.value}
                onChange={(e) =>
                  handleInputChange("testStatus", e.target.value)
                }
                className="radio-input"
              />
              <label htmlFor={status.value} className="radio-label">
                {status.label}
              </label>
            </div>
          ))}
        </div>
        {errors.testStatus && (
          <span className="error-message">{errors.testStatus}</span>
        )}
      </div>

      <button onClick={nextStep} className="btn btn-primary btn-full">
        Continue to Academic Background →
      </button>
    </div>
  );

  const renderEducationStep = () => (
    <div className="step-content">
      <div className="step-header">
        <div className="step-icon">📚</div>
        <h2 className="step-title">Academic Background & Experience</h2>
        <p className="step-subtitle">
          Tell us about your educational background and experience
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">
          What's your highest level of education?
        </label>
        <div className="radio-grid radio-grid-2">
          {educationLevels.map((level) => (
            <div key={level.value} className="radio-option">
              <input
                type="radio"
                id={level.value}
                name="educationLevel"
                value={level.value}
                checked={formData.educationLevel === level.value}
                onChange={(e) =>
                  handleInputChange("educationLevel", e.target.value)
                }
                className="radio-input"
              />
              <label htmlFor={level.value} className="radio-label">
                {level.label}
              </label>
            </div>
          ))}
        </div>
        {errors.educationLevel && (
          <span className="error-message">{errors.educationLevel}</span>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">Where are you from?</label>
        <select
          value={formData.country}
          onChange={(e) => handleInputChange("country", e.target.value)}
          className="select-input"
        >
          <option value="">Select your country</option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        {errors.country && (
          <span className="error-message">{errors.country}</span>
        )}
      </div>

      <div className="form-group">
        <label className="form-label">Do you have work experience?</label>
        <div className="radio-grid radio-grid-2">
          <div className="radio-option">
            <input
              type="radio"
              id="work-yes"
              name="workExperience"
              value="true"
              checked={formData.workExperience === true}
              onChange={(e) => handleInputChange("workExperience", true)}
              className="radio-input"
            />
            <label htmlFor="work-yes" className="radio-label">
              ✅ Yes
            </label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="work-no"
              name="workExperience"
              value="false"
              checked={formData.workExperience === false}
              onChange={(e) => handleInputChange("workExperience", false)}
              className="radio-input"
            />
            <label htmlFor="work-no" className="radio-label">
              ❌ No
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">
          Have you applied to study abroad before?
        </label>
        <div className="radio-grid radio-grid-2">
          <div className="radio-option">
            <input
              type="radio"
              id="prev-yes"
              name="previousApplications"
              value="true"
              checked={formData.previousApplications === true}
              onChange={(e) => handleInputChange("previousApplications", true)}
              className="radio-input"
            />
            <label htmlFor="prev-yes" className="radio-label">
              ✅ Yes
            </label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="prev-no"
              name="previousApplications"
              value="false"
              checked={formData.previousApplications === false}
              onChange={(e) => handleInputChange("previousApplications", false)}
              className="radio-input"
            />
            <label htmlFor="prev-no" className="radio-label">
              ❌ No
            </label>
          </div>
        </div>
      </div>

      <div className="button-group">
        <button onClick={prevStep} className="btn btn-secondary">
          ← Back
        </button>
        <button onClick={nextStep} className="btn btn-primary">
          Continue to Contact →
        </button>
      </div>
    </div>
  );

  const renderContactStep = () => (
    <div className="step-content">
      <div className="step-header">
        <div className="step-icon">🤝</div>
        <h2 className="step-title">Contact Information</h2>
        <p className="step-subtitle">
          Let's get you connected with our France education experts
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
            className="text-input"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            className="text-input"
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email address"
            className="text-input"
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="button-group">
          <button
            type="button"
            onClick={prevStep}
            className="btn btn-secondary"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
          >
            {isSubmitting ? "Connecting..." : "🇫🇷 Connect with France Expert"}
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="consultation-container" ref={formTopRef}>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h1 className="sidebar-title">France Awaits You</h1>
            <p className="sidebar-subtitle">
              Your pathway to French higher education starts here
            </p>
          </div>

          <div className="progress-steps">
            {steps.map((step) => (
              <div key={step.number} className="progress-step">
                <div
                  className={`step-circle ${
                    step.number <= currentStep ? "active" : ""
                  }`}
                >
                  <span className="step-icon-small">{step.icon}</span>
                </div>
                <div className="step-info">
                  <span
                    className={`step-title-text ${
                      step.number <= currentStep ? "active" : ""
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="step-number-text">Step {step.number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="france-accent">
          <div className="flag-stripe blue"></div>
          <div className="flag-stripe white"></div>
          <div className="flag-stripe red"></div>
        </div>
      </div>

      <div className="main-content">
        <div className="form-container">
          {currentStep === 1 && renderPreferencesStep()}
          {currentStep === 2 && renderEducationStep()}
          {currentStep === 3 && renderContactStep()}
        </div>

        <div className="mobile-progress">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`mobile-dot ${step <= currentStep ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;