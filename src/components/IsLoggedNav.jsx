import { Link } from "react-router-dom"
import { iconFull, profileImg } from "../assets/images"
import {IoIosArrowDown} from "react-icons/io"
import { NavLoggedIn } from "../styled-components/Container"

const IsLoggedNav = () => {
  return (
    <NavLoggedIn>
        <div className="wrapper">
            <Link to="/" className="logo">
            <img src={iconFull} alt="icon" />
            </Link>           
            <button className="user">
            <a  className="profile">
                <img src={profileImg} alt="" />
                <h5 className="name">Solomon Great</h5>
                <IoIosArrowDown/>
            </a>          
            </button>
        </div>
    </NavLoggedIn>
  )
}

export default IsLoggedNav