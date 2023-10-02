import { Link } from "react-router-dom"
import { iconFull } from "../../assets/images";
import { useState } from "react";
import { NavContainer } from "../../styled-components/Container";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  return (
    <NavContainer isOpen={isOpen}>
      <div className="wrapper">
        <img src={iconFull} className="logo" alt="icon" />
        <button onClick={toggleOpen} className="mobile-toggle">
          {isOpen?<FaTimes/>:<FaBars />}
        </button>
        <div  className={isOpen ? "nav-menu open" : "nav-menu"}>
          <ul >
            <li className="nav-item">
              <a href="#" className="nav-link">
                Feature
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                How It Works
              </a>
            </li>
          </ul>
          <div className="nav-btn">
            <Link to="/auth" className="btn btn-login">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;
