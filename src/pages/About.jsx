import Navbar from "../components/Navbar"
import AboutUsSection from "../components/about/AboutUsSection"
import FullFooterSection from "../components/home/FullFooterSection"
import AboutHeader from "../components/about/AboutHeader"

function About(){
    return(
        <>
            <Navbar/>
            <AboutHeader/>
            <AboutUsSection/>
            <FullFooterSection/>
        </>
    )
}

export default About