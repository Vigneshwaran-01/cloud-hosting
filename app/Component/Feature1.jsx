import { FaMicrochip, FaChartLine, FaImage } from "react-icons/fa";
import "../styles/features.css";

export default function AICloudFeatures() {
  return (
    <>

<div className="text-center  container" style={{marginTop:"100px",marginBottom:"100px"}}>
      <h2 className="fw-bold">Cloud-based GPU server powered fast-track workloads</h2>
      </div>
    <div className="container my-5 p-4 ai-cloud-container">
      
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-lg-5 col-md-6 col-12 text-center mb-4 mb-md-0">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGFpJTIwZGV2ZWxvcGVtZW50fGVufDB8fDB8fHww"
              alt="AI/ML Development"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="col-lg-7 col-md-6 col-12">
          {[
            {
              icon: <FaMicrochip className="icon" />, 
              title: "AI/ML Model Development", 
              description: "NVIDIA GPU cloud computing accelerates AI model development. It enhances training times for complex models like conversational AI, NLP, and recommendation systems. Users can take advantage of the cheapest cloud GPU servers."
            },
            {
              icon: <FaChartLine className="icon" />, 
              title: "High-Performance Computing (HPC)", 
              description: "GPU cloud hosting drives high-performance computing (HPC). When combined with AI, machine learning, and research, it supports weather forecasting, energy exploration, and large-scale simulations."
            },
            {
              icon: <FaImage className="icon" />, 
              title: "Graphic/Data Visualization", 
              description: "GPU cloud-based virtual workstations boost design, engineering, and content creation. The cloud GPU efficiently handles high workloads like real-time rendering, designs, and simulations."
            }
          ].map((feature, index) => (
            <div key={index} className="mb-4 ai-feature">
              <h4>{feature.icon} {feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
