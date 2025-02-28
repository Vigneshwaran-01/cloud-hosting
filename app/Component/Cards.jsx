import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css"; // Import the custom CSS file

const Features = () => {
    return (
      <div className="container py-5 mx-auto">
        <div className="text-center mb-5 mt-5">
        <h2 className="fw-bold text-primary">Why Choose Sixthstar NVIDIA Cloud GPU Server?</h2>
      </div>
        <div className="row g-4">
          {/* Multi-threaded computing */}
          <div className="col-md-6">
            <div className="feature-card green-bg h-100 d-flex flex-column">
              <h5 className="fw-bold">Multi-threaded computing</h5>
              <p>
                MilesWeb brings top-notch hardware and power capabilities, and our users get the experience of
                lightning-fast performance. With our NVIDIA GPU cloud instances, you can tackle the complex
                processing of multiple pixels simultaneously.
              </p>
            </div>
          </div>
  
          {/* Quick Deployment */}
          <div className="col-md-6">
            <div className="feature-card light-blue-bg h-100 d-flex flex-lg-row flex-column align-items-lg-center text-lg-start gap-4 text-center p-3">
              <img src="https://media.istockphoto.com/id/2149809166/photo/tech-team-professionals-collaborate-discuss-software-development-strategies-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=KUh2SCtVb-kiXcDICC9eyPkA9SaHvXRD_g2mJBVaOL8=" alt="Deployment" className="feature-image mx-lg-0 mx-auto mb-3 mb-lg-0" />
              <div>
                <h5 className="fw-bold">Quick deployment</h5>
                <p>
                  We are on par with the leading industry standards. Our GPU cloud servers accelerate your project
                  with the fastest and record development times in the industry.
                </p>
              </div>
            </div>
          </div>
  
          {/* Best GPU cloud pricing */}
          <div className="col-md-4">
            <div className="feature-card blue-bg h-100 d-flex flex-column">
              <h5 className="fw-bold">Best GPU cloud pricing</h5>
              <p>
                As your GPU cloud server provider, you get seamless access to powerful GPU infrastructure
                without high costs.
              </p>
            </div>
          </div>
  
          {/* NVIDIA-optimized GPU */}
          <div className="col-md-4">
            <div className="feature-card white-bg h-100 d-flex flex-column">
              <h5 className="fw-bold">NVIDIA-optimized GPU</h5>
              <p>
                MilesWeb offers users an industry-leading GPU cloud platform, built in partnership with NVIDIA.
              </p>
            </div>
          </div>
  
          {/* Top computational output */}
          <div className="col-md-4">
            <div className="feature-card light-blue-bg h-100 d-flex flex-column">
              <h5 className="fw-bold">Top computational output</h5>
              <p>
                We utilize multi-level algorithm optimization and effective 16/32-bit precision arithmetic.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Features;
