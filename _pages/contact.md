---
layout: default
title: Contact Us
description: Get in touch with Daily Trend Hub team. We welcome your feedback, suggestions, and inquiries.
permalink: /contact/
---

<div class="page-content">
  <div class="contact-container">
    <h1>Contact Daily Trend Hub</h1>
    
    <div class="contact-intro">
      <p>We'd love to hear from you! Whether you have feedback, suggestions, questions, or would like to contribute to our platform, please don't hesitate to reach out.</p>
    </div>

    <div class="contact-methods">
      <div class="contact-method">
        <h3>📧 Email Us</h3>
        <p>For general inquiries and feedback:</p>
        <div class="contact-email">
          <a href="mailto:contact@dailytrendhub.com" class="email-link">contact@dailytrendhub.com</a>
        </div>
      </div>

      <div class="contact-method">
        <h3>💼 Collaboration & Partnerships</h3>
        <p>Interested in working together?</p>
        <div class="contact-email">
          <a href="mailto:partnerships@dailytrendhub.com" class="email-link">partnerships@dailytrendhub.com</a>
        </div>
      </div>

      <div class="contact-method">
        <h3>📝 Guest Contributions</h3>
        <p>Have a story to share? We welcome guest posts from qualified writers and experts.</p>
        <div class="contact-email">
          <a href="mailto:submissions@dailytrendhub.com" class="email-link">submissions@dailytrendhub.com</a>
        </div>
      </div>
    </div>

    <div class="contact-form-section">
      <h2>Send Us a Message</h2>
      <form class="contact-form" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <p class="hidden">
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </p>
        
        <div class="form-group">
          <label for="name">Your Name *</label>
          <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
          <label for="email">Your Email *</label>
          <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
          <label for="subject">Subject *</label>
          <select id="subject" name="subject" required>
            <option value="">Select a topic</option>
            <option value="general">General Inquiry</option>
            <option value="feedback">Feedback/Suggestion</option>
            <option value="contribution">Guest Contribution</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="technical">Technical Issue</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Your Message *</label>
          <textarea id="message" name="message" rows="6" required placeholder="Please share your thoughts, questions, or suggestions..."></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>

    <div class="contact-info">
      <h3>What Happens Next?</h3>
      <ul>
        <li>We typically respond within 24-48 hours</li>
        <li>All emails are read by our team members</li>
        <li>We value every message and will get back to you personally</li>
        <li>For urgent matters, please include "URGENT" in your subject line</li>
      </ul>
    </div>

    <div class="contact-note">
      <p><strong>Note:</strong> This contact form is powered by Netlify Forms. By submitting, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.</p>
    </div>
  </div>
</div>