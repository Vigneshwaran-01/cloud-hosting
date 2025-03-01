"use client"

import React, { useEffect } from 'react'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

import footerSections from '../data/footerData'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min");
    }
  }, []);


  const socialLinks = [
    { icon: <FaYoutube />, url: "#", color: "#FF0000" },
    { icon: <FaFacebook />, url: "#", color: "#1877F2" },
    { icon: <FaTwitter />, url: "#", color: "#000000" },
    { icon: <FaInstagram />, url: "#", color: "#C13584" },
    { icon: <FaLinkedin />, url: "#", color: "#0077B5" },
  ];

  return (
    <footer className="bg-primary text-white  py-4 mx-auto" >
      <div className="mx-5  ">
        {/* Logo and Description Section */}
        <div className="row">
          <div className="col-12 col-lg-2 mb-4">
            <div className="text-center text-lg-start">
              <img
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1733818437/logo_-_sx2_aiasw2.png"
                alt="logo"
                className="mb-3 bg-white rounded p-2"
                style={{ maxWidth: "180px" }}
              />
              <p className="small">
                With over 16+ years of expertise, Sixth Star Technology stands as a premier IT solution provider in India.
              </p>
              {/* Certificates Grid */}
              <div className="d-flex flex-wrap justify-content-center  flex-lg-wrap  gap-3 mb-4">
                {[
                  "gdpr_qhmwv2.webp",
                  "rqc_vqtye4.webp",
                  "iso-20000_obiguc.webp",
                  "ukasl_ae4pum.webp",
                  "iso-27001_nenayk.webp"
                ].map((img, idx) => (
                  <img
                    key={idx}
                    src={`https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055888/${img}`}
                    alt="certification"
                    
                    style={{ width: "50px", height: "50px", objectFit: "contain" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="col-12 col-lg-9 ">
          <div className="accordion accordion-flush d-lg-none mb-2" id="footerAccordion">
    {footerSections.map((section, idx) => (
      <div key={idx}>
        {/* Main Section */}
        <div className="accordion-item bg-transparent" style={{border:"none"}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-transparent text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseLinks${idx}`}
              style={{border:"none"}}
            >
              {section.title}
            </button>
          </h2>
          <div
            id={`collapseLinks${idx}`}
            className="accordion-collapse collapse"
            data-bs-parent="#footerAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled mb-0">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="mb-2">
                    <a href={link.href} className="text-white text-decoration-none small">
                      {link.icon && <i className={`${link.icon} me-2`}></i>}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Extra Links Section */}
        {section.extraTitle && (
          <div className="accordion-item bg-transparent" style={{border:"none"}}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-transparent text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseExtraLinks${idx}`}
              >
                {section.extraTitle}
              </button>
            </h2>
            <div
              id={`collapseExtraLinks${idx}`}
              className="accordion-collapse collapse"
              data-bs-parent="#footerAccordion"
            >
              <div className="accordion-body">
                <ul className="list-unstyled mb-0">
                  {section.extraLinks.map((link, linkIdx) => (
                    <li key={linkIdx} className="mb-2">
                      <a href={link.href} className="text-white text-decoration-none small">
                        {link.icon && <i className={`${link.icon} me-2`}></i>}
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
  
   
  
            {/* Desktop View Links */}
            <div className="row ms-5 mx-2 d-none d-lg-flex gap-4">
  {footerSections.map((section, idx) => (
    <div key={idx} className="col-lg-2">
      <h3 className="h6 fw-bold mb-3">{section.title}</h3>
      <ul className="list-unstyled">
        {section.links.map((link, linkIdx) => (
          <li key={linkIdx} className="mb-2">
            <a href={link.href} className="text-white text-decoration-none small">
              {link.icon && <i className={`${link.icon} me-2`}></i>}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {section.extraTitle && (
        <>
          <h3 className="h6 fw-bold mt-4 mb-3">{section.extraTitle}</h3>
          <ul className="list-unstyled">
            {section.extraLinks.map((link, linkIdx) => (
              <li key={linkIdx} className="mb-2 d-flex align-items-lg-center gap-2">
                {link.icon}
                <a href={link.href} className="text-white text-decoration-none small">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  ))}
</div>

          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className="row ">
          <div className="col-12 text-center">
          <div className="d-flex justify-content-center gap-3 mb-3">
      {socialLinks.map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          className="d-flex align-items-center justify-content-center rounded-circle text-white"
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: social.color,
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
            <p className="small mb-0 pb-2 border-bottom border-light">
              © Copyright 2024 | All Rights Reserved by{" "}
              <Link href="#" className="text-white text-decoration-none">
                Sixthstar tech
              </Link>
              <i className='fa-brands bg-success text-white fa-youtube'></i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
