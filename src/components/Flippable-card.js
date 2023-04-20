import Caroussel from './Caroussel'
import React from 'react'

export default function FlippableCard({selectedCards, setSelectedCards}) {
  
   return (
      <div className='flippable-card-container grid'>
          <Caroussel selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>
      </div>
  )
}
