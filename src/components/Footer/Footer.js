import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p className="footer-para">
              Developer: <span className="my-name"> Harshini Togaru</span>
            </p>

            <div className="contact"></div>
            <div className="socials">
            <a  href="https://www.facebook.com/profile.php?id=100075221496581&mibextid=ZbWKwL">
              <i class="fab fa-facebook-f  icn"></i>
            </a>
            <a href="https://www.linkedin.com/in/togaru-surya-siva-harshini-a83921228/">
              <i class="fab fa-linkedin-in  icn"></i>
            </a>  
            <a href="https://instagram.com/harshi_togaru?igshid=MzNlNGNkZWQ4Mg==">
              <i class="fab fa-instagram  icn"></i>
            </a>
            <a href="https://github.com/21A91A05J4">
            <i className="fab fa-github icn"></i>
            </a>
            </div>
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp;harshini template
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
