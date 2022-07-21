import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>Cu ce ne ocupam?</h5>
      <h2>Servicii</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Dezvoltare Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pagina de Prezentare</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pagina de Produs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website de Prezentare</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Magazin Online</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Aplicatie Web</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>SEO</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Campanii SEO</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO On-Page</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO Off-Page</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO Local</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cercetare Cuvinte Cheie</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Copywritting</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Administrare Social Media</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creare Conturi Social Media</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Personalizarea Conturilor</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creare Continut Social Media</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Raspuns la Mesaje si Comentarii</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creare de Evenimente Social Media</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
