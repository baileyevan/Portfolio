import React, { FormEvent, useState } from 'react';
import { contactInfo } from '../../data';
import './Contact.css';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('https://formspree.io/f/maqkznjy', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          form.reset();
        }
      })
      .catch(() => {});
  };

  return (
    <section id="contact" className="section-wrapper section-wrapper--alt">
      <div className="section-label fade-in"><span>Contact</span></div>
      <div className="fade-in">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-sub">
          Open to data scientist, data analyst, and ML engineer roles. Entry-level,
          internships, and co-ops welcome.
        </p>
      </div>
      <div className="contact__grid fade-in">
        <div className="contact__info">
          {contactInfo.map(({ icon, label, value, href }) => (
            <div key={label} className="contact__item">
              <div className="contact__icon">{icon}</div>
              <div>
                <div className="contact__label">{label}</div>
                <div className="contact__value">
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="contact__success">
            <span className="contact__success-icon">✓</span>
            <p>Message sent — I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="name">Name</label>
                <input
                  className="contact__form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="email">Email</label>
                <input
                  className="contact__form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@company.com"
                  required
                />
              </div>
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="subject">Subject</label>
              <input
                className="contact__form-control"
                type="text"
                id="subject"
                name="subject"
                placeholder="Data Scientist role at Acme Corp"
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="message">Message</label>
              <textarea
                className="contact__form-control"
                id="message"
                name="message"
                placeholder="Tell me about the opportunity or just say hello..."
                required
              />
            </div>
            <button type="submit" className="btn btn--primary">
              Send Message →
            </button>
            {/* <p className="contact__form-note">
              Sign up at formspree.io (free) and replace YOUR_FORM_ID in Contact.tsx to activate.
            </p> */}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
