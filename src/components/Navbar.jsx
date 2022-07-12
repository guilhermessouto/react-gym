import { useState } from 'react'

import './navbar.css'

const Navbar = () => {
  const [active, setMode] = useState(false)

  const toggleMode = () => {
    setMode(!active)
  }

  return (
    <nav className={active ? 'active' : ''}>
      <div className="logo">
        <a href="#">
          <h1>The <br /> Fit Club</h1>
        </a>
      </div>

      <div className={active ? 'hamburguer hamburguerOpen' : 'hamburguer'} onClick={toggleMode}>
        <div id='line-1' className='line'></div>
        <div id='line-2' className='line'></div>
        <div id='line-3' className='line'></div>
      </div>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Why us</a>
        </li>
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li className='signup'>
          <a href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar