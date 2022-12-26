import React from 'react'
import NotFoundImg from '../assets/not-found-images/not-found.png'
import '../styles/Styles.css'

function NotfoundBack() {
  return (
    <div>
        <img className='card-image' src={NotFoundImg} alt="Sakura card not found" />
        <p className='not-found'>Image not found</p>
    </div>
  )
}

export default NotfoundBack