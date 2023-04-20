import React from 'react'
import '../styles/Styles.css'

function BackCard({card}) {
  return (
        <div key={card.id}>
            <img className='card-image' src={card.clowCard} alt={card.spanishName}/>
        </div>
  )
}

export default BackCard
