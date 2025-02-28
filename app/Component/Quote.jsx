import React from 'react'

const Quote = ({setShowQuoteForm}) => {
   
    
   
  return (
    <div className="modal d-block modal-overlay" tabIndex="-1" >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Request a Custom Quote</h5>
          <button type="button" className="btn-close" onClick={() => setShowQuoteForm(false)}></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <button type="submit" className="btn btn-success">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Quote
