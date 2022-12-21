import '../styles/flippable-card.css';
import Caroussel from './Caroussel'
import React from 'react'

export default function FlippableCard({selectedCard, setSelectedCard}) {
  
   return (
      <div className='flippable-card-container grid'>
          <Caroussel selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
      </div>
  )
}
