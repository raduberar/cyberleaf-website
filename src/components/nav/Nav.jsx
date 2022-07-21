/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { CgReadme } from 'react-icons/cg'
import { GrTechnology } from 'react-icons/gr'
import { BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  window.onscroll = function () {
    if (window.pageYOffset < 10) {
      document.getElementById('navbar').style.bottom = '-25rem'
    } else {
      document.getElementById('navbar').style.bottom = '2rem'
    }
  }

  return (
    <nav id="navbar">
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <CgReadme />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <GrTechnology />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contract')}
        className={activeNav === '#contract' ? 'active' : ''}
      >
        <BiMessageDetail />
      </a>
    </nav>
  )
}

export default Nav
