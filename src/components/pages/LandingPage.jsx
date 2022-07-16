import Header from "../layouts/Header"
import Plans from "../layouts/Plans"
import Programs from "../layouts/Programs"
import WhyUs from "../layouts/WhyUs"
import Footer from "../layouts/Footer"

import './landingPage.css'

const LandingPage = () => {
  return (
    <>
      <Header />

      <main>
        <Programs />
        <WhyUs />
        <Plans />
      </main>

      <Footer />
    </>
  )
}

export default LandingPage