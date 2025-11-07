import Navbar from "../components/Navbar"
import TourHeader from "../components/tour/TourHeader"
import TourPaket from "../components/tour/TourPaket"
import FaqSection from "../components/home/FaqSection"
import FullFooterSection from "../components/home/FullFooterSection"


function TourPackage(){

    return(
        <>
        <Navbar/>
        <TourHeader/>
        <TourPaket/>
        <FaqSection/>
        <FullFooterSection/>
        </>
    )
}

export default TourPackage