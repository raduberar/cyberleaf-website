import React from 'react'
import './header.css'
import CTA from './CTA'
import LOGO from '../../assets/cyberleaf-logo-transp2.png'
import HeaderSocials from './HeaderSocials'
import backgroundVideo from '../../assets/video_data.mp4'
import { BiChevronDownCircle } from 'react-icons/bi'

const Header = () => {
  return (
    <header>
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>
          Cyber<span>leaf</span>
        </h1>
        <h5 className="text-light">Dezvoltare Web si Solutii IT</h5>
        <CTA />
        <HeaderSocials />
        <div className="logo">
          <img src={LOGO} alt="cyberleaf logo" />
        </div>
        <a href="#contact" className="scroll__down">
          <BiChevronDownCircle />
        </a>
      </div>
    </header>
  )
}

export default Header
