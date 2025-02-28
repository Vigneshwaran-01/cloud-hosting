import { FaMicrochip, FaChartLine, FaImage } from "react-icons/fa";
import "../styles/features.css";
export default function AICloudFeatures() {
  return (
    <div className="container my-5 p-4 ai-cloud-container">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-5 text-center">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGFpJTIwZGV2ZWxvcGVtZW50fGVufDB8fDB8fHww"
              alt="AI/ML Development"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="col-md-7">
          {/* AI/ML Model Development */}
          <div className="mb-4 ai-feature">
            <h4>
              <FaMicrochip className="icon" /> AI/ML Model Development
            </h4>
            <p>
              NVIDIA GPU cloud computing accelerates AI model development. It enhances training
              times for complex models like conversational AI, NLP, and recommendation systems.
              Users can take advantage of the cheapest cloud GPU servers.
            </p>
          </div>

          {/* High-Performance Computing */}
          <div className="mb-4 ai-feature">
            <h4>
              <FaChartLine className="icon" /> High-Performance Computing (HPC)
            </h4>
            <p>
              GPU cloud hosting drives high-performance computing (HPC). When combined with AI,
              machine learning, and research, it supports weather forecasting, energy exploration,
              and large-scale simulations.
            </p>
          </div>

          {/* Graphic/Data Visualization */}
          <div className="ai-feature">
            <h4>
              <FaImage className="icon" /> Graphic/Data Visualization
            </h4>
            <p>
              GPU cloud-based virtual workstations boost design, engineering, and content creation.
              The cloud GPU efficiently handles high workloads like real-time rendering, designs,
              and simulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
