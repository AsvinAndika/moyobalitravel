import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Airport from './pages/Airport'
import About from './pages/About'
import TourPackage from './pages/TourPackage'
import Contact from './pages/Contact'
import TourDetail from './components/tour/TourDetail'

function App() {

  return (
    <>

      <a href="https://wa.me/628123456789?text=Hi%2C%20I%27m%20interested%20in%20your%20Bali%20Driver%20Vacation%20services.%20Could%20you%20please%20provide%20more%20information%3F" target="_blank"
        className="fixed bottom-7 right-4 md:bottom-10 md:right-10 z-50 animate-bounce">
        <div className="flex gap-2 items-center">
          <p className="bg-white text-gray-800 shadow-md px-4 py-2 rounded-xl font-semibold">Contact Us</p>
          <img src="/logowa.png" alt="WhatsApp Icon" className="w-12 md:w-14"/>
        </div>
      </a>

      <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/airport-transfer' element={<Airport/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/tour-package' element={<TourPackage/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/tours/:id' element={<TourDetail/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
