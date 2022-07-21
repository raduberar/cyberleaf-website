import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
import { FaInstagramSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://facebook.com/cyberleafro"
        target="_blank"
        rel="noreferrer"
      >
        <ImFacebook2 />
      </a>
      <a
        href="https://instagram.com/cyberleafweb"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
    </div>
  )
}

export default HeaderSocials
