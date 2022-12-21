import React from 'react';
import { Link } from 'react-router-dom';
import Kero from '../assets/Intro-image/kero.png'

export default function KeroButton() {
  return (
    <>
        <Link to='/intro'>
          <img className="intro-image" src={Kero} alt="Kero" />
        </Link>
    </>
  )
}
