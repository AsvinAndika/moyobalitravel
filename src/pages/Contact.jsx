import Navbar from "../components/Navbar"
import ContacHeader from "../components/contact/ContactHeader"
import ContactSection from "../components/contact/ContactSection"
import FullFooterSection from "../components/home/FullFooterSection"

function Contact(){
    return(
        <>
            <Navbar/>
            <ContacHeader/>
            <ContactSection/>
            <FullFooterSection/>
        </>
    )
}

export default Contact