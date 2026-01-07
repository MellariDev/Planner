export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              rows={5}
              placeholder="Tell us about your cake dreams..."
            />
          </div>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

