import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css"; // Custom CSS
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbMessagePin, TbMessageCircleQuestion } from "react-icons/tb";
import { GiStarsStack } from "react-icons/gi";

const SupportSection = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4 mt-4">
        <h2 className="fw-bold">Stress-free Hosting & Proactive Support</h2>
        <p className="lead text-muted">
          Our expert technical team is ready to tackle all your queries with prompt assistance.
        </p>
      </div>

      <div className="row align-items-center support-container">
        {/* Left Side: Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="https://media.istockphoto.com/id/2162645329/photo/teamwork-meeting-and-ideas-for-solution-or-decision-for-business-workplace-or-company-group.webp?a=1&b=1&s=612x612&w=0&k=20&c=9wyGmqgkEQYc_3KlWeymaaoYjJw7Q7A-4y66WvvgW9A="
            alt="Support Agent"
            className="img-fluid support-image"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="col-lg-6 col-md-12 mt-4">
          <div className="row g-4">
            {/* Support Features */}
            {[
              { icon: <RiCustomerService2Fill />, title: "24/7 Support", desc: "Support in English & Hindi" },
              { icon: <TbMessagePin />, title: "Prompt Response", desc: "Live chat, email & phone support" },
              { icon: <GiStarsStack />, title: "99% Satisfaction", desc: "We keep improving for the rest 1%" },
              { icon: <TbMessageCircleQuestion />, title: "Technical Support", desc: "Solve all technical queries" }
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6">
                <div className="support-feature">
                  <div className="icon">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
