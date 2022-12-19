import React, {useState} from 'react';
import GetCards from '../services/GetCards'
import Card from '../components/Card'
import '../styles/Styles.css'

function Caroussel() {
    const [cards, setCards] = useState(null);
    GetCards(setCards); //cuando se importa la funcion fetch eluseState cambia de estado
    return (
        <>    
            {cards !== null ? cards.map(card => (
               <Card 
                clowReverse={card.cardsReverse.clowReverse} 
                id={card.id}
                spanishName={card.spanishName}
                clowCard={card.clowCard}
                /> 
            )) : 'no hay carta'}   
        </>
  )
}

export default Caroussel