import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import About2 from './components/About/About2';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';
import AppBanner from './components/AppBanner/AppBanner';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='overflow-x-hidden bg-white dark:bg-black dark:text-white text-black'>

    <Navbar />
    <Hero />
     <About />
     <About2 />
     <About />
     <Contact />
     <Pricing />
     <AppBanner />
     <Testimonials />
     <Footer />
    </div>
    </>
  )
}

export default App
