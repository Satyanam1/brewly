import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import Pricing from '../components/landing/Pricing'
import About from '../components/landing/About'
import CTA from '../components/landing/CTA'
import Footer from '../components/landing/Footer'


const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <Pricing/>
        <About/>
        <CTA/>
        <Footer/>
        
      </main>
    </>
  )
}

export default Home
