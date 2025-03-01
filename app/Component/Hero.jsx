import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container py-5 mb-5 " style={{marginTop:"100px"}}>
      <div className="row align-items-center text-center text-md-start">
        
        {/* Left Content */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <p className="text-muted">Cloud GPU Server In India</p>
          <h1 className="fw-bold">
            Next-Level Computing <br />
            With <span className="text-primary">NVIDIA GPU Cloud</span>
          </h1>
          <ul className="list-unstyled text-center text-md-start">
            <li>✅ NVIDIA-Powered GPU cloud</li>
            <li>✅ AI, ML & scientific computing</li>
            <li>✅ Cloud GPU scalable infrastructure</li>
          </ul>
          <h2 className="fw-bold text-primary">₹5,100.00/mo</h2>
          
          {/* Buttons (Stacked on small screens) */}
          <div className="d-grid gap-2 d-md-flex mt-4">
            <button className="btn btn-primary btn-lg">Get Started</button>
            <button className="btn btn-outline-primary btn-lg">00:11:47:56</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-12 col-md-6 text-center">
          <Image 
            src="https://images.unsplash.com/photo-1718154621928-a14709d0c768?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG52ZGlhJTIwZ3B1JTIwY2xvdW5kfGVufDB8fDB8fHww" 
            alt="GPU Cloud" 
            width={500} 
            height={350} 
            className="img-fluid"
          />
        </div>

      </div>
    </section>
  );
}
