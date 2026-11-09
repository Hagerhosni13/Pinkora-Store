
import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">

      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Send us a message
          and we'll be happy to help.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Talk!</h2>
          <p>
            Have a question about a product or your order?
            Feel free to contact us.
          </p>

          <div className="contact-info-item">
            <FiMail />
            <div>
              <h3>Email</h3>
              <p>support@pinkora.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <FiPhone />
            <div>
              <h3>Phone</h3>
              <p>+20 100 000 0000</p>
            </div>
          </div>

          <div className="contact-info-item">
            <FiMapPin />
            <div>
              <h3>Location</h3>
              <p>Egypt</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            <FiSend />
            Send Message
          </button>

          {submitted && (
            <p className="contact-success">
              Thank you! Your message has been received in this demo.
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;
