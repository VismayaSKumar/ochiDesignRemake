import Eye from "./assets/components/Eye"
import Featured from "./assets/components/Featured"
import Footer from "./assets/components/Footer"
import LandingPage from "./assets/components/LandingPage"
import Marquee from "./assets/components/Marquee"
import Navbar from "./assets/components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 ">
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <Eye/>
        <Featured/>
        <Footer/>
      </div>
    </>
  )
}

export default App
