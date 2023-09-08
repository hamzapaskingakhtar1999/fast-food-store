import React from "react";

import "./Footer.css";

/* React Icons */
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <hr style={{ marginTop: "30px" }} />
      <div className="footer">
        <div className="footer1">
          <h2>Seiwa Foods</h2>
          <div className="footer-item">
            <BiPhoneCall className="footer-icon" />
            03175926565
          </div>
          <div className="footer-item">
            <HiOutlineMail className="footer-icon" />
            support@seiwafoods.com
          </div>
          <div className="footer-item">
            <BiMap className="footer-icon" />
            Islamabad Pakistan
          </div>
        </div>
        <div className="footer2">
          <h3>Our Timings</h3>
          <div>
            <strong>Monday - Thursday</strong> 11:00 AM - 3:AM
          </div>
          <div>
            <strong>Friday </strong>11:00 AM - 3:AM
          </div>
          <div>
            <strong>Saturday - Sunday</strong> 11:00 AM - 3:AM
          </div>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <BsFacebook className="footer-icon" />
            <BsInstagram className="footer-icon" />
          </div>
        </div>
        <div className="footer3">
          <h3>Other Links</h3>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Complaints and Suggestions</a>
        </div>
      </div>
      <hr />
      <h3 style={{ textAlign: "center" }}>&#169; {year} Built by HPA</h3>
    </>
  );
};

export default Footer;
