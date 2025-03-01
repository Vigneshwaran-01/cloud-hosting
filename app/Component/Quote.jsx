import React, { useState } from "react";

const Quote = ({ setShowQuoteForm }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request Submitted Successfully!");
    setShowQuoteForm(false);
  };

  return (
    <div className="modal d-block modal-overlay" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow-lg">
          <div className="modal-header border-0">
            <h4 className="modal-title fw-bold">Request a Custom Quote</h4>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowQuoteForm(false)}
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success btn-lg">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
