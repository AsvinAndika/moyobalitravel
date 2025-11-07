import Navbar from "../components/Navbar"
import AirHeader from "../components/airport/AirHeader"
import AirportHome from "../components/home/AirportHome"
import AirportTransferSection from "../components/airport/AirportTransferSection"
import FullFooterSection from "../components/home/FullFooterSection"
import TransferPackagesSection from "../components/airport/TransferPackagesSection"

function Airport(){
    return(
        <>
            <Navbar/>
            <AirHeader/>
            <TransferPackagesSection/>
            <AirportHome/>
            <AirportTransferSection/>
            <FullFooterSection/>
        </>
    )
}

export default Airport