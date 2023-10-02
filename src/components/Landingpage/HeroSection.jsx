import { HeroContainer } from "../../styled-components"
import { hero } from "../../assets/images"
import { FaArrowRight } from "react-icons/fa"
 const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="wrapper">
        <div className="hero-content">
            <h1>Show Them <br />Don’t Just Tell</h1>
            <p>Sign up for a new account today and receive $250 in credit towards your next payment.</p>
            <button className="btn btn-primary">Install HelpMeOut <FaArrowRight/></button>
        </div>
        <div className="hero-img">
            <img src={hero} alt="mockups" />
        </div>
        </div>
    </HeroContainer>
  )
}

export default HeroSection
