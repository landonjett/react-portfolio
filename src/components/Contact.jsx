import React, { useState } from 'react';
import './contact.css';  // Import CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // Reset error message when user types in the field
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check for required fields
    let hasErrors = false;
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: 'This field is required' }));
        hasErrors = true;
      }
    });

    // Check for valid email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      hasErrors = true;
    }

    if (!hasErrors) {
      console.log(formData); // For now, log the data to the console 
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}  
            required 
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange}  
            required 
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
