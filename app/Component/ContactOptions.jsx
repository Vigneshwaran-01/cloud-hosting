import { FaChartBar, FaEnvelope, FaHeadphones, FaPuzzlePiece } from "react-icons/fa";
import "../styles/ContactOptions.css"; // Import custom CSS

export default function ContactOptions() {
  return (
    <div className="container my-5 mx-auto contact-container col-12">
      <div className="row justify-content-center mt-5 gap-4">
        
        {/* Main Contact Box */}
        <div className="col-12 col-md-10 col-lg-8 contact-box shadow">
          {/* Live Chat */}
          <div className="contact-item">
            <FaChartBar size={30} className="icon" />
            <h5 className="fw-bold mt-2">Live Chat</h5>
            <p className="text-muted small">Instant response</p>
          </div>

          {/* Divider */}
          <div className="divider d-none d-md-block"></div>

          {/* Call Us */}
          <div className="contact-item">
            <FaHeadphones size={30} className="icon" />
            <h5 className="fw-bold mt-2">Call Us</h5>
            <p className="text-muted small">9176647399</p>
          </div>

          {/* Divider */}
          <div className="divider d-none d-md-block"></div>

          {/* Email */}
          <div className="contact-item">
            <FaEnvelope size={30} className="icon" />
            <h5 className="fw-bold mt-2">Email</h5>
            <p className="text-muted small">sales@sixthstar.in</p>
          </div>
        </div>

        {/* Custom Solution Box */}
        <div className="col-12 col-md-6 col-lg-4 custom-solution shadow">
          <FaPuzzlePiece size={35} className="custom-icon" />
          <h5 className="fw-bold mt-3">Need a Custom Solution?</h5>
          <button className="solution-btn">Get in Touch</button>
        </div>
      </div>
    </div>
  );
}
