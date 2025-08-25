import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
