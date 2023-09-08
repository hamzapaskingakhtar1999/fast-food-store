import React from "react";

/* CSS */
import "./Contact.css";

const Contact = () => {
  const handleSubmit = () => {
    alert("Message Sent..");
  };

  return (
    <div className="contact">
      <h2 style={{ color: "green", marginBottom: "-10px" }}>Contact Form</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Send Us a Message</h1>
          <p className="contact-text">
            Your email address will remain safe and won't be used for
            promotional purposes.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              size={35}
              placeholder="Name"
              className="contact-input"
              required
            />

            <input
              type="email"
              size={35}
              placeholder="Email"
              className="contact-input"
            />
            <input
              type="text"
              size={35}
              placeholder="Mobile Number"
              className="contact-input"
              required
            />
            <input
              type="text"
              size={35}
              placeholder="Subject"
              className="contact-input"
              required
            />
            <textarea
              type="textarea"
              placeholder="Subject"
              className="contact-input contact-textarea"
              rows="10"
              cols="77"
              required
            />
            <input type="submit" value="Send Message" />
          </form>
        </div>
        <div className="contact-right">
          <img
            src="https://di9mr54a05a64.cloudfront.net/api-saladplate.expoplatform.com/gallery/MTY1NzYzODM2MTYyY2Q4ZGQ5OTJjNmI=.png"
            className="contact-us-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
