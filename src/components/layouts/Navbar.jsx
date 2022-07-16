import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Link as RouterLink} from 'react-router-dom'

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

      <div 
        className={active ? 'hamburguer hamburguerOpen' : 'hamburguer'} 
        onClick={toggleMode}
      >
        <div id='line-1' className='line'></div>
        <div id='line-2' className='line'></div>
        <div id='line-3' className='line'></div>
      </div>

      <ul>
        <li>
          <Link 
            activeClass="active"
            to="home" 
            spy={true} 
            smooth={true} 
            duration={500} 
          >
            Home
          </Link>
        </li>
        <li>
        <Link 
            activeClass="active"
            to="programs" 
            spy={true} 
            smooth={true} 
            duration={500} 
          >
            Programs
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="why_us" 
            spy={true} 
            smooth={true} 
            duration={500} 
          >
            Why Us
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="plans" 
            spy={true} 
            smooth={true} 
            duration={500} 
          >
            Plans
          </Link>
        </li>
        <li className='signup'>
            <RouterLink to='signup'>Sign Up</RouterLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar