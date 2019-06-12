import React from 'react'
import './_contact.scss'

export const Contact = () => (
  <section id="contact">
    <h2>Let's Chat</h2>
    <p className="relocate">
      I'm currently based in San Diego, CA and I'm available for full-time work.
    </p>
    <div className="form-wrapper">
      <form method="POST" data-netlify="true">
        <div>
          <div className="input-container">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name*"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email*"
            />
          </div>
          <div className="input-container">
            <textarea
              id="massage"
              name="massage"
              required
              placeholder="Message*"
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
