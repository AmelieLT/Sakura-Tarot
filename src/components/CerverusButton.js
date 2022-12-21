import React from 'react'
import { Link } from 'react-router-dom'
import Cerverus from '../assets/Intro-image/cerberus.png'

function CerverusButton(selectedCard) {
  return (
    <>
        <Link to='/meaning' state={{ from: selectedCard }}>
          <img className="intro-image" src={Cerverus} alt="Cerverus" />
        </Link>
    </>
  )
}

export default CerverusButton