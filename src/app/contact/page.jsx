import React from "react";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.location}>
          <h2>Location</h2>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className={styles.callus}>
          <h2>Call Us</h2>
          <p>+123 456 7890</p>
        </div>
        <div className={styles.mailus}>
          <h2>Mail Us</h2>
          <p>info@example.com</p>
        </div>
      </div>
      <div className={styles.map_wrapper}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6816.036712098199!2d75.60242324005974!3d31.33086616158261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a3c8f0f36cd%3A0xb06ea8d7d87144e6!2sSurya%20Enclave%2C%20Jalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1730207633610!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.enquiryForm}>
          <form className={styles.form}>
            <div>
              <h2>
                GET IN <span className={styles.color}>TOUCH</span>
              </h2>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div>
              <textarea
                rows={5}
                // cols={15}
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              className={`${styles.submit} ${styles.smallButton}`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
