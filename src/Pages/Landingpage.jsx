import {Navbar,HeroSection,Features, How, Footer}  from "../components"

const Landingpage = () => {
  return (
    <>
        <Navbar />
        <hr style={{border: '1px solid #eee'}}/>
        <HeroSection />
        <hr style={{border:"2rem solid #eee"}}/>
        <Features />
        <hr style={{border:"2rem solid #eee"}}/>
        <How />
        <Footer />
    </>
  )
}

export default Landingpage