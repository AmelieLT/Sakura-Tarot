import React from 'react'
import { Link } from 'react-router-dom'
import Cerverus from '../assets/Intro-image/cerberus.png'

function CerverusButton({selectedCards}) {
  
let divButton = ""

if  (selectedCards.length !== 3) {
  divButton = (
    <img className="intro-image" src={Cerverus} alt="Cerverus" />
  )
  } 

  if  (selectedCards.length === 3) {
    divButton = (
      <Link to='/meaning' state={{ from: selectedCards }}>
      <img className="intro-image" src={Cerverus} alt="Cerverus" />
      <h4 className='cerverus-button'>descubre el significado de las cartas</h4>
      </Link>
    )
    } 

  
  return (
    <>
       {divButton}
        
    </>
  )
}

export default CerverusButton