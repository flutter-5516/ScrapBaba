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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28235.37701870436!2d77.4956783!3d28.7531817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1680867164920!5m2!1sen!2sin
"
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
              placeholder="e.g. Rajendra Pratap"
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
