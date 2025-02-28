export default function NvidiaGpuSection() {
    return (
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-md-6">
            <h2 className="fw-bold">
              Why choose <span className="text-primary">NVIDIA GPU</span> cloud servers?
            </h2>
            <p className="text-muted">
              MilesWeb, with the fueling power of NVIDIA, offers cloud GPU servers that are
              cutting-edge platforms for GPU-accelerated computing. GPU cloud servers are well known
              to bring users the experience of rapid development, faster time-to-market, and
              groundbreaking results, owing to their raw power and easy handling of complex
              computational challenges.
            </p>
          </div>
  
          {/* Right Image Section */}
          <div className="col-md-6 text-center">
            <img src="https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGdwdSUyMGFuaW1hdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="NVIDIA GPU" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
  