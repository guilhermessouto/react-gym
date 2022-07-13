import Navbar from "./Navbar"
import HeaderInfo from "./layouts/HeaderInfo"
import Social from "./layouts/Social"
import Button from "./layouts/Button"

import './header.css'

const Header = () => {
  return (
    <header>
      <div className='header_main_container'>
        <Navbar />

        <div className="header_text">
          <div className="text_h1">
            <h1>
              <span>Shape</span> Your <br />
              Ideal Body
            </h1>
          </div>
        
          <div className="text_p">
            <p>In here we will help you to shape and build your ideal body and live up your life to fullest.</p>
          </div>
        </div>
        
        <div className="infos_buttons">
          <div className="infos">
            <HeaderInfo
              number='140'
              text='Expert coaches'
            />
            <HeaderInfo
              number='978'
              text='Members joined'
            />
            <HeaderInfo
              number='50'
              text='Fitness programs'
            />
          </div>
          <div className="header_buttons">
            <Button
              className='button_model_one'
              text='Get Started'
            />
            <Button
              className='button_model_two'
              text='Learn More'
            />
          </div>
        </div>
      </div>


      <div className='header_bg_container'>
        <Social />

        <p>
          The <br />
          Fit Club
        </p>
      </div>
    </header>
  )
}

export default Header