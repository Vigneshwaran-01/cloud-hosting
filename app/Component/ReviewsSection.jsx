import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import Image from "next/image";
import "../styles/index.css"; // Import custom CSS module

export default function ReviewsSection() {
  return (
    <section className={`container mt-5 mb-5 p-4 reviewSection`}>
      {/* Review Platforms */}
      <div className="reviewContainer">
        {/* Trustpilot */}
        <div className="reviewBox">
        <h2 className="h5 fst-italic">Trustpilot.</h2>
          <Image src="/trustpilot.svg" alt="Trustpilot Rating" width={190} height={25} />
          <p className="mb-0 fw-bold small">
          <span className="text-primary">4,763 Reviews</span> | <strong>4.4/5</strong>
          </p>
        </div>

        {/* HostAdvice */}
        <div className="reviewBox">
          <h2 className="h5 fst-italic">hostadvice.</h2>
          <Image src="/trustpilot.svg" alt="HostAdvice Rating" width={190} height={25} />
          <p className="mb-0 fw-bold small">
            <span className="text-primary">11,934 Reviews</span> | <strong>4.6/5</strong>
          </p>
        </div>

        {/* Google Reviews */}
        <div className="reviewBox">
          <h2 className="h5 fst-italic">Google</h2>
          <Image src="/trustpilot.svg" alt="Google Rating" width={190} height={25} />
          <p className="mb-0 fw-bold small">
            <span className="text-primary">4,763 Reviews</span> | <strong>4.4/5</strong>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contactContainer">
        <div className="d-flex align-items-center gap-2 px-3 py-2">
          <FaPhoneAlt size={20} />
          <span className="fw-bold h5">080 6959 0400</span>
        </div>

        <div className="d-flex align-items-center gap-2 px-3 py-2">
          <FaCommentDots size={20} />
          <span className="fw-bold h5">Chat with us!</span>
        </div>
      </div>
    </section>
  );
}
