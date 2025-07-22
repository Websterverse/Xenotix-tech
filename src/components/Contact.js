import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="contact-title">Contact with me to sizzle your project.</div>
    <div className="contact-subtitle">
      Great designs, new generation ideas, user-centered projects.<br/>
      Let's work together now!
    </div>
    <form className="contact-form">
      <div className="contact-row">
        <input type="text" placeholder="Enter your name" name="name" required />
        <input type="email" placeholder="Enter your email" name="email" required />
      </div>
      <div className="contact-row">
        <input type="text" placeholder="Enter your phone number" name="phone" required />
      </div>
      <div className="contact-row">
        <input type="text" placeholder="Enter your budget (USD)" name="budget" />
      </div>
      <div className="contact-row">
        <select name="requirement" required>
          <option value="">Select a requirement</option>
          <option value="uiux">UI/UX Design</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile App</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>
      <div className="contact-row">
        <textarea placeholder="Brief description of your project" name="desc" rows={4} required />
      </div>
      <button type="submit" className="contact-submit">Submit your Request</button>
    </form>
  </section>
);

export default Contact; 