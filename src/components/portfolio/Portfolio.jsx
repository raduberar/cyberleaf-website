import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
// import IMG3 from '../../assets/portfolio2.png'
// import IMG4 from '../../assets/portfolio2.png'
// import IMG5 from '../../assets/portfolio2.png'
// import IMG6 from '../../assets/portfolio2.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Site de Prezentare',
    demo: 'https://cosmoproinstal.ro',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Proiectul tau aici!',
    demo: 'https://cyberleaf.ro/#contact',
  },
  {
    id: 3,
    image: IMG2,
    title: 'Proiectul tau aici!',
    demo: 'https://cyberleaf.ro/#contact',
  },
  {
    id: 4,
    image: IMG2,
    title: 'Proiectul tau aici!',
    demo: 'https://cyberleaf.ro/#contact',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Proiecte Recente</h5>
      <h2>Portfoliu</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vizualizeaza
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
