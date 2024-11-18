import "./ContactUs.css";

import { useState } from "react";

import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .send("service_qmlsw0n", "template_oopoweg", form, "RI-7OcBI1ZboNQmX1")
      .then(
        (result) => {
          alert("Data Saved!");
          setForm({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div className="contact-us">
      <h2 className="heading">Contact Us</h2>
      <section className="body">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7117.557730094792!2d80.91004352699431!3d26.878766002334046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdf56b5b4559%3A0xa7035dd975ce25a7!2sKhadra%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680867164920!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              autoComplete="off"
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">
              Phone Number <span>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. 8878901234"
              autoComplete="off"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. example@gmail.com"
              autoComplete="off"
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="e.g. Example message"
              autoComplete="off"
            />
          </div>
          <button className="button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
