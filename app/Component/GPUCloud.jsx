"use client";

import { useEffect, useRef, useState } from "react";
import Quote from "./Quote";
import { FaMemory, FaHdd, FaNetworkWired, FaShoppingCart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const gpuData = {
  gpuCloud: {
    "NVIDIA A16": [
      {
        id: 1,
        name: "GPU 1",
        gpuRam: "96 GB",
        vCPUs: 32,
        ram: "480 GB",
        storage: "2200 GB",
        bandwidth: "10 TB",
        price: "₹50,000"
      },
      {
        id: 2,
        name: "GPU 2",
        gpuRam: "48 GB",
        vCPUs: 16,
        ram: "240 GB",
        storage: "1200 GB",
        bandwidth: "10 TB",
        price: "₹30,000"
      },
      {
        id: 3,
        name: "GPU 2",
        gpuRam: "48 GB",
        vCPUs: 16,
        ram: "240 GB",
        storage: "1200 GB",
        bandwidth: "10 TB",
        price: "₹30,000"
      },
      {
        id: 4,
        name: "GPU 2",
        gpuRam: "48 GB",
        vCPUs: 16,
        ram: "240 GB",
        storage: "1200 GB",
        bandwidth: "10 TB",
       
      }
    ],
    "NVIDIA A40": [
      {
        id: 1,
        name: "GPU 1",
        gpuRam: "48 GB",
        vCPUs: 16,
        ram: "240 GB",
        storage: "1200 GB",
        bandwidth: "10 TB",
      
      }
    ],
    "NVIDIA L40S": [
      {
        "id": 1,
        "name": "GPU 1",
        "gpuRam": "48 GB",
        "vCPUs": 24,
        "ram": "256 GB",
        "storage": "1600 GB",
        "bandwidth": "12 TB",
      
      }
    ],
     "NVIDIA A100 PCIe": [
      {
        "id": 1,
        "name": "GPU 1",
        "gpuRam": "40 GB",
        "vCPUs": 12,
        "ram": "128 GB",
        "storage": "800 GB",
        "bandwidth": "8 TB",
        
      }
    ]
  },
  gpuBareMetal: [
    {
      id: 1,
      name: "GPU 1",
      discount: "SAVE 15%",
      gpuCount: "2x",
      cores: "8 Cores",
      threads: "16 Cores, 32 Threads",
      ram: "64 GB",
      storage: "2 TB SSD",
      bandwidth: "3 TB",
      network: "1 Gbps",
      sla: "99.9%",
     
    },
    {
      id: 2,
      name: "GPU 2",
      discount: "SAVE 15%",
      gpuCount: "4x",
      cores: "8 Cores",
      threads: "16 Cores, 32 Threads",
      ram: "64 GB",
      storage: "8 TB SSD",
      bandwidth: "10 TB",
      network: "1 Gbps",
      sla: "99.9%",
    
    }
  ]
};





export default function GPUPlans() {

  const [selectedCategory, setSelectedCategory] = useState("cloud");
  const [selectedGPU, setSelectedGPU] = useState(Object.keys(gpuData.gpuCloud)[0] ||'');
  const [showQuoteForm, setShowQuoteForm] = useState(false);


  const filteredGPUs = selectedCategory === "cloud" ? gpuData.gpuCloud[selectedGPU] || [] : gpuData.gpuBareMetal;




  return (
    <section>
       <div className="text-center mb-4 container">
        <h2 className="fw-bold">Powerful NVIDIA Cloud GPUs with Unmatched Performance</h2>
        <p className="lead">
          MilesWeb's cloud GPU services are the best in the overall industry. With various resources, 
          top-notch hardware, and processors, you get unbeatable performance for all your heavy workloads.
        </p>
      </div>
    <div className="main-section">
 
      {/* left sidebar */}
      <div className="col-12 col-md-3 pt-5 left-side">
  <div 
    className="list-group shadow-sm border rounded-4 overflow-hidden" 
    style={{
      background: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)"
    }}
  >
    <button 
      className="list-group-item list-group-item-action fw-bold py-3 text-white" 
      style={{
        background: "linear-gradient(135deg, #007bff, #0056b3)", 
        border: "none"
      }}
    >
      🇮🇳 GPU Cloud
    </button>
    {Object.keys(gpuData.gpuCloud).map((model) => (
      <button
        key={model}
        className={`list-group-item list-group-item-action fw-semibold py-3 border-0 d-flex align-items-center justify-content-between `}
        style={{
          background: selectedGPU === model ? "#007bff" : "transparent",
          color: selectedGPU === model ? "#fff" : "#333",
          transition: "all 0.3s ease",
          fontSize: "1rem"
        }}
        onClick={() => {
          setSelectedCategory("cloud");
          setSelectedGPU(model);
        }}
        onMouseOver={(e) => {
          if (selectedGPU !== model) e.target.style.backgroundColor = "#f1f5f9";
        }}
        onMouseOut={(e) => {
          if (selectedGPU !== model) e.target.style.backgroundColor = "transparent";
        }}
      >
        {model}
        {selectedGPU === model && <FaCheckCircle className="text-light" />}
      </button>
    ))}
  </div>
</div>

      {/* right container */}
      
      <div className="col-12 col-md-8   ">
        <div className="d-flex justify-content-center align-items-center gap-4 mb-4 mt-sm-4">
          <button
            className={`btn ${selectedCategory === "bareMetal" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() =>{
               setSelectedCategory("bareMetal");
               setSelectedGPU("");
            }}
          >
            GPU Bare Metal
          </button>
          <button className="btn btn-warning" onClick={() => setShowQuoteForm(true)}>
            Get Custom Quote
          </button>
        </div>
        
        <div className="row gpu-container  d-flex flex-column right-container ">
        {filteredGPUs.length > 0 ? (
  filteredGPUs.map((gpu) => (
    <div key={gpu.id} className="col-12 mb-4">
      <div className="card rounded-3 p-4 gpu-card shadow-sm" style={{ backgroundColor: "#f8f9fa", border: "1px solid #dee2e6" }}>
        <div className="card-body">
          <h4 className="fw-bold text-dark">
            {gpu.name}{" "}
            {gpu.discount && (
              <span className="badge bg-warning text-dark px-2 py-1" style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                {gpu.discount}
              </span>
            )}
          </h4>
          <div className="row text-muted small mt-3 ">
            <div className="col d-flex align-items-center">
              <FaMemory className="me-1 text-primary" /> <strong>{gpu.ram}</strong> RAM
            </div>
            <div className="col d-flex align-items-center">
              <FaHdd className="me-1 text-secondary" /> <strong>{gpu.storage}</strong>
            </div>
            <div className="col d-flex align-items-center">
              <FaNetworkWired className="me-1 text-success" /> <strong>{gpu.bandwidth}</strong> Bandwidth
            </div>
          </div>
          <div className="d-flex justify-content-center">
  <button 
    className="btn mt-5 rounded-3 fw-semibold text-white d-flex align-items-center justify-content-center"
    style={{ 
      backgroundColor: "#007bff", 
      border: "none", 
      padding: "10px 20px", 
      transition: "0.3s", 
      width: "50%" 
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
  >
    <FaShoppingCart className="me-2" /> Get Quote
  </button>
</div>
        </div>
      </div>
    </div>
  ))
) : (
  <div className="col-12 text-center">
    <p className="text-muted">No GPUs available for this selection.</p>
  </div>
)}

        </div>
      </div>
   

    {showQuoteForm && 
      <Quote setShowQuoteForm={setShowQuoteForm} />  }
  </div> 
  </section>
  );
}