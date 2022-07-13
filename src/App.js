import Header from "./components/Header"
import Plans from "./components/Plans"
import Programs from "./components/Programs"
import WhyUs from "./components/WhyUs"

import './app.css'
import Footer from "./components/Footer"

const App = () => {
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

export default App