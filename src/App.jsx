import './App.css'
import Navbar1 from './Components/Navbar1.jsx'
import Navbar2 from './Components/Navbar2.jsx'
import Navbar3 from './Components/Navbar3.jsx'
import Navbar4 from './Components/Navbar4.jsx'
import DealBox from './Components/Dealbox.jsx'
import Offers from './Components/Offers.jsx'
import LatestProduct from './Components/LatestProduct.jsx'
import Footer1 from './Components/Footer1.jsx'
import Footer2 from './Components/Footer2.jsx'
import Footer3 from './Components/Footer3.jsx'

function App() {
  

  return (
    <div className="container mx-auto">
      <Navbar1/>
      <Navbar2/>
      <Navbar3/>
      <Navbar4/>
      <DealBox/>
      <Offers/>
      <LatestProduct name="Latest Products"/>
      <LatestProduct name="Clearance Sale"/>
      <LatestProduct name="Your Recently Viewed Items"/>
      <Footer1/>
      <Footer2/>
      <Footer3/>
    </div>
  )
}

export default App;
