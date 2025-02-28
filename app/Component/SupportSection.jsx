import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css"; // Custom CSS
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbMessagePin } from "react-icons/tb";
import { GiStarsStack } from "react-icons/gi";
import { TbMessageCircleQuestion } from "react-icons/tb";

const SupportSection = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4 mt-4">
        <h2 className="fw-bold">Stress-free Hosting & Proactive Support</h2>
        <p className="lead text-muted">
          We have an expert team of technical specialists ready to tackle all your queries with prompt assistance.
        </p>
      </div>
      
      <div className="row align-items-center support-container">
        {/* Left Side: Image */}
        <div className="col-md-6">
          <img
            src="https://media.istockphoto.com/id/2162645329/photo/teamwork-meeting-and-ideas-for-solution-or-decision-for-business-workplace-or-company-group.webp?a=1&b=1&s=612x612&w=0&k=20&c=9wyGmqgkEQYc_3KlWeymaaoYjJw7Q7A-4y66WvvgW9A="
            alt="Support Agent"
            className="img-fluid support-image"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="col-md-6 mt-sm-4">
          <div className="row g-4">
            {/* Support Feature 1 */}
            <div className="col-6">
              <div className="support-feature">
                <RiCustomerService2Fill className="icon" />
                <h5>24/7 Support in English & Hindi</h5>
                <p>Nonstop support, 365 days a year</p>
              </div>
            </div>

            {/* Support Feature 2 */}
            <div className="col-6">
              <div className="support-feature">
                <TbMessagePin className="icon" />
                <h5>Prompt and friendly response</h5>
                <p>Live chat, email and phone support</p>
              </div>
            </div>

            {/* Support Feature 3 */}
            <div className="col-6">
              <div className="support-feature">
                <GiStarsStack className="icon" />
                <h5>99% user satisfaction</h5>
                <p>Rest 1%: we are improving more</p>
              </div>
            </div>

            {/* Support Feature 4 */}
            <div className="col-6">
              <div className="support-feature">
                <TbMessageCircleQuestion className="icon" />
                <h5>Technical handling</h5>
                <p>Get all technical queries solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
