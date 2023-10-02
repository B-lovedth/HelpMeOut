import { FaFacebook } from "react-icons/fa"
import { iconFull } from "../assets/images"
import { AuthContainer } from "../styled-components"
import {FcGoogle} from "react-icons/fc"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <AuthContainer>
        <div className="wrapper">
            <Link to='/'><img src={iconFull} alt="" /></Link>
            <div className="formbox">
            <div className="top">
                <h1>Log in or Sign up</h1>
                <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
                <button><FcGoogle/><span>Continue with Google</span></button>
                <button><FaFacebook style={{color:"blue"}}/><span>Continue with Facebook</span></button>
            </div>
            <div className="divider">
                <line></line>
                <p><span>or</span></p>
            </div>
            <div className="form-control">
                <label htmlFor="#email">Email</label>
                <input type="email" placeholder="email" id="email"/>
                <label htmlFor="#password">Password</label>
                <input type="password" placeholder="password" id="password"/>
                <button>Sign up</button>
            </div>
        </div>
        </div>
    </AuthContainer>
  )
}

export default SignUp