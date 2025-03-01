import { FaComments, FaPhoneAlt } from "react-icons/fa";
import "../styles/index.css"; 

export default function HostingBanner() {
  return (
    <div className="container my-5">
      <div
        className="rounded-4 text-white text-center p-5 position-relative hosting-banner"
      >
      {/* <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="position-absolute top-0 start-0" style={{ width: "100px", height: "100px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "10px" }}></div>
          <div className="position-absolute bottom-0 end-0" style={{ width: "120px", height: "120px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "10px" }}></div>
        </div> */}

        {/* Content */}
        <h5 className="fw-light">Hosting</h5>
        <h2 className="fw-bold display-5">60,000+ Clients’</h2>
        <p className="fw-light fs-5">websites and apps</p>
        <p className="text-light">We’re only missing yours!</p>

        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
          <button className="btn btn-light d-flex align-items-center px-4 py-2 talk-btn">
            <FaComments className="me-2 text-primary" /> Talk to an expert
          </button>
          <button className="btn btn-outline-light d-flex align-items-center px-4 py-2 phone-btn">
            <FaPhoneAlt className="me-2" /> 080 6959 0400
          </button>
        </div>
      </div>
    </div>
  );
}
