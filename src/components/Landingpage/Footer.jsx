import {  logowhite } from "../../assets/images";
import { FooterBox } from "../../styled-components/Container";

const Footer = () => {
  return (
    <FooterBox>
      <div className="wrapper">
          <div className="footer-logo">
            <img src={logowhite} alt="" />
          </div>
          <div className="footer-menu">
            <h4>Menu</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Converter</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Screen Record</h4>
            <ul>
              <li>
                <a href="#">Browser Window</a>
              </li>
              <li>
                <a href="#">Desktop</a>
              </li>
              <li>
                <a href="#">Application</a>
              </li>
            </ul>
          </div>
      </div>
    </FooterBox>
  );
};

export default Footer;
