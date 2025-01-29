import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        {/* Product Range Section */}
        <div className={styles.section}>
          <h4>Product Range</h4>
          <ul>
            <li>Guar Gum Splits</li>
            <li>Xanthan Gum Powder</li>
            <li>Tragacanth Gum Powder</li>
            <li>Guar Meal</li>
            <li>Rosted Guar</li>
            <li>Gum Arabica</li>
          </ul>
        </div>

        {/* Certificates Section */}
        <div className={styles.section}>
          <h4>Certificates</h4>
          <ul>
            <li>ISO 22000:2005</li>
            <li>GMP Certificate</li>
            <li>Kosher Certificate</li>
            <li>Halal Certificate</li>
            <li>DIOXIN Test Reports</li>
            <li>FORMALDEHYDE and PENTA CHLORO PHENOL (mg/kg)</li>
            <li>Test Reports</li>
          </ul>
        </div>

        {/* News & Events Section */}
        <div className={styles.section}>
          <h4>News & Events</h4>
        </div>

        {/* Contact Us Section */}
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>
            <strong>Address:</strong> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Enim, omnis!
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:++918437020131">+91-84370 20131</a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@kayessinternationals.com">
              info@kayessinternationals.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className={styles.bottom}>
        <p>© Copyright 2024. Kayess Internationals. All rights reserved.</p>
        <p>
          Web Design and SEO by{" "}
          <a
            href="https://sunil0718.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUNIL
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
