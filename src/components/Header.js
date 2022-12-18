import React from 'react'
import '../styles/Styles.css'
import moon from '../assets/images/moon-regular.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <Link to='/'>
        <div class = 'header-container'>
            <img src={moon} alt='luna' class='moon'/>
            <h1>Sakura - Conecta con tu alma</h1>
            <img src={moon} alt='luna' class='moon reverse'/>
        </div>
    
        </Link>
       
     
    
    </>
    
  )
}

export default Header