import React from 'react'
import '../styles/Styles.css'

function FrontCard({card}) {
  return (
        <div key={card.id}>
            <img className='card-image' src={card.cardsReverse.clowReverse} alt={card.spanishName}/>
        </div>  
  )
}

export default FrontCard