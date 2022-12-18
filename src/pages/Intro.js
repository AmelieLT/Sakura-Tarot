import React from 'react'
import Header from '../components/Header'
import '../styles/Intro.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <>
      <Header/>
      <div className="intro-container">
        <p> Sakura Kinomoto, una pequeña niña de diez años que accidentalmente libera un conjunto de cartas que se encontraban dentro de un libro, el cual había descubierto en la biblioteca de su padre. Tras esto, Kero —el guardián del libro— emerge y, al enterarse de que la mayoría de las cartas conocidas como las «cartas Clow» se habían esparcido por todas partes, le dice a Sakura que ahora es su responsabilidad convertirse en una «cardcaptor» e ir en busca de ellas para evitar que ocurra una «catástrofe» en el mundo. Por lo tanto, Sakura adquiere habilidades especiales para así enfrentarse a los poderes mágicos de cada carta y lograr capturarlas y sellarlas</p>
<<<<<<< HEAD
      </div>
    </>
=======
        <Link to="/">
          <Button class='frame' text='Go to Cards' />
        </Link>
    </div>
>>>>>>> b7aa6d7 (Create Button Component)
  )
}
