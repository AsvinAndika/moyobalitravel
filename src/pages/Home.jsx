import Navbar from "../components/Navbar";
import Header from "../components/home/Header";
import PaketHome from "../components/home/PaketHome";
import AboutDriver from "../components/home/AboutDriver";
import ValueHome from "../components/home/ValueHome";
import AirportHome from "../components/home/AirportHome";
import BaliTourHome from "../components/home/BaliTourHome";
import ExperienceSection from "../components/home/ExperienceSection";
import FaqSection from "../components/home/FaqSection";
import FullFooterSection from "../components/home/FullFooterSection";


function Home(){
    return(
        <>
            <Navbar/>
            <Header/>
            <PaketHome/>
            <AboutDriver/>
            <ValueHome/>
            <AirportHome/>
            <BaliTourHome/>
            <ExperienceSection/>
            <FaqSection/>
            <FullFooterSection/>
        </>
    )
}   

export default Home;