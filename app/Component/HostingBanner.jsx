import { FaComments, FaPhoneAlt } from "react-icons/fa";

export default function HostingBanner() {
  return (
    <div className="container my-5">
      <div
        className="rounded-4 text-white text-center p-5 position-relative"
        style={{
          background: "#007bff",
          overflow: "hidden",
        }}
      >
        {/* Background Design Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="position-absolute top-0 start-0" style={{ width: "100px", height: "100px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "10px" }}></div>
          <div className="position-absolute bottom-0 end-0" style={{ width: "120px", height: "120px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "10px" }}></div>
        </div>

        {/* Content */}
        <h5 className="fw-light">Hosting</h5>
        <h2 className="fw-bold">60,000+ Clients’</h2>
        <p className="fw-light">websites and apps</p>
        <p className="text-light">We’re only missing yours!</p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-light d-flex align-items-center px-4 py-2">
            <FaComments className="me-2 text-primary" /> Talk to an expert
          </button>
          <button className="btn btn-outline-light d-flex align-items-center px-4 py-2">
            <FaPhoneAlt className="me-2" /> 080 6959 0400
          </button>
        </div>
      </div>
    </div>
  );
}
