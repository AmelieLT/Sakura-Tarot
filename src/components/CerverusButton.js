import React from 'react'
import { Link } from 'react-router-dom'
import Cerverus from '../assets/Intro-image/cerberus.png'

function CerverusButton({selectedCards}) {
  return (
    <>
        <Link to='/meaning' state={{ from: selectedCards }}>
          <img className="intro-image" src={Cerverus} alt="Cerverus" />
        </Link>
    </>
  )
}

export default CerverusButton