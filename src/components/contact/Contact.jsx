import React from 'react'
import './contact.css'
import { BiEnvelope } from 'react-icons/bi'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_f768d0i',
      'template_gtyuv7d',
      form.current,
      'E-eq0W66TZ9yyd12Q'
    )
    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>Hai sa discutam</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiEnvelope className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hello@cyberleaf.ro</h5>
            <a
              href="mailto:hello@cyberleaf.ro"
              target="_blank"
              rel="noreferrer"
            >
              Trimite un mesaj
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>cyberleafro</h5>
            <a href="https://m.me/cyberleafro" target="_blank" rel="noreferrer">
              Trimite un mesaj
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>0771 395 832</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+40771395832"
              target="_blank"
              rel="noreferrer"
            >
              Trimite un mesaj
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nume si Prenume"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adresa de mail"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Mesajul tau"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Trimite
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
