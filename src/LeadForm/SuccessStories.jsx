// import React from "react";
// import { Star } from "lucide-react";
// import "./SuccessStories.css";

// const testimonials = [
//   {
//     name: "Arjun Sharma",
//     program: "MS in Computer Science, Sorbonne University",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
//     testimonial:
//       "EduFrance made my dream of studying in Paris a reality. Their guidance throughout the admission and visa process was exceptional. Now I'm working at a top tech company in France!",
//   },
//   {
//     name: "Priya Patel",
//     program: "MBA from HEC Paris",
//     image:
//       "https://images.unsplash.com/photo-1494790108755-2616b612b630?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
//     testimonial:
//       "The scholarship guidance I received helped me secure 80% funding for my MBA. The team's expertise in French universities is unmatched. Highly recommended!",
//   },
//   {
//     name: "Rohit Kumar",
//     program: "Engineering from École Polytechnique",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
//     testimonial:
//       "From university selection to visa approval, everything was handled professionally. I'm now pursuing my dream of becoming an aerospace engineer in France!",
//   },
// ];

// export default function SuccessStories() {
//   return (
//     <section className="success-section">
//       <div className="container">
//         <div className="success-section-header">
//           <h2>Success Stories from Our Students</h2>
//           <p>
//             Hear from students who achieved their dreams of studying in France
//           </p>
//         </div>

//         <div className="grid">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="card">
//               <img
//                 src={testimonial.image}
//                 alt={`${testimonial.name} profile`}
//                 className="profile-img"
//               />
//               <div className="card-header">
//                 <h4>{testimonial.name}</h4>
//                 <p>{testimonial.program}</p>
//               </div>
//               <p className="testimonial">"{testimonial.testimonial}"</p>
//               <div className="stars">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="star" size={16} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import "./SuccessStories.css";

const testimonials = [
  {
    name: "Arjun Sharma",
    program: "MS in Computer Science, Sorbonne University",
    testimonial:
      "EduFrance made my dream of studying in Paris a reality. Their guidance throughout the admission and visa process was exceptional. Now I'm working at a top tech company in France!",
  },
  {
    name: "Priya Patel",
    program: "MBA from HEC Paris",
    testimonial:
      "The scholarship guidance I received helped me secure 80% funding for my MBA. The team's expertise in French universities is unmatched. Highly recommended!",
  },
  {
    name: "Rohit Kumar",
    program: "Engineering from École Polytechnique",
    testimonial:
      "From university selection to visa approval, everything was handled professionally. I'm now pursuing my dream of becoming an aerospace engineer in France!",
  },
];

// Simple Star component
const Star = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Simple Quote component
const Quote = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

export default function SuccessStories() {
  return (
    <section className="success-section">
      <div className="container">
        <div className="success-section-header">
          <h2>Success Stories from Our Students</h2>
          <p>
            Hear from students who achieved their dreams of studying in France
          </p>
        </div>

        <div className="grid-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-header">
                <div className="student-avatar">
                  <span className="avatar-initials">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div className="avatar-ring"></div>
                </div>
                <div className="quote-icon">
                  <Quote size={28} />
                </div>
              </div>

              <div className="card-content">
                <blockquote className="testimonial-text">
                  "{testimonial.testimonial}"
                </blockquote>

                <div className="student-info">
                  <h4 className="student-name">{testimonial.name}</h4>
                  <p className="student-program">{testimonial.program}</p>

                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="star" size={16} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-decoration"></div>
            </div>
          ))}
        </div>

        {/* Background decorations */}
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
}