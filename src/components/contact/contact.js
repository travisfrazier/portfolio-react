import React from 'react'
import './_contact.scss'

export const Contact = () => (
  <section id="contact">
    <h2>Let's Chat</h2>
    <p className="relocate">
      I'm currently based in North Carolina, available for full-time work and
      looking to relocate.
    </p>
    <div className="form-wrapper">
      <form method="POST" data-netlify="true">
        <div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Name*"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your Email*"
            />
          </div>
          <div>
            <textarea
              id="massage"
              name="massage"
              required
              placeholder="Your Message*"
            />
          </div>
          <div className="button-wrapper">
            <button
              type="submit"
              class="site-btn transition-ease"
              data-wow-delay="0.2s"
            >
              Send Messege
            </button>
          </div>
          <div id="result" />
        </div>
      </form>
    </div>
  </section>
)
