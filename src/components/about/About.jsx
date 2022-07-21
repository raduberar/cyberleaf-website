import React from 'react'
import './about.css'
import TEAM from '../../assets/about-us.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderOpened } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Afla</h5>
      <h2>Despre noi</h2>
      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={TEAM} alt="cyberleaf team" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experienta</h5>
              <small>3+ Ani</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clienti</h5>
              <small>15+ Clienti </small>
            </article>
            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Proiecte</h5>
              <small>20+ Proiecte</small>
            </article>
          </div>
          <p>
            Startup romanesc care ofera servicii de calitate business-urilor
            mici si medii. Serviciile noastre includ, fara a fi limitate la: Web
            Design, Dezvoltare Software, Administrare Social Media, consultanta
            in echipamente IT, retealistica, marketing si GDPR
          </p>
          <a href="#contact" className="btn btn-primary">
            Hai sa vorbim!
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
