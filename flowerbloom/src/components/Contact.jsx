import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_box">
        <h2>Contact Us</h2>
        <p>Have a question or want to place a custom order? Send us a message!</p>

        <form className="contact_form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
