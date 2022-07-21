import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        cyberleaf
      </a>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Servicii</a>
        </li>
        <li>
          <a href="#portfolio">Proiecte</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; <span>cyber</span>
          <span>leaf</span>
        </small>
      </div>
    </footer>
  )
}

export default footer
