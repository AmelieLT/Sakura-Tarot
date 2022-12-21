import React, {useEffect, useState} from 'react';
import GetCards from '../services/GetCards'
import Card from '../components/Card'
import '../styles/Styles.css'

function Caroussel({selectedCard, setSelectedCard}) {
    const [cards, setCards] = useState(null);

    useEffect(() => {
        GetCards(setCards)
    },[])

   

     return (
        <>    
            {cards !== null ? cards.map((card, index) => (
               <Card card={card} key={index} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/> 
            )) : 'no hay carta'}   
        </>
  )
}

export default Caroussel