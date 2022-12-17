import React, {useState} from 'react';
import GetCards from '../services/GetCards'
import './styles/caroussel.css'

function Caroussel() {
    const [cards, setCards] = useState(null);
    GetCards(setCards); //cuando se importa la funcion fetch eluseState cambia de estado
    return (
        <>
            <div className='grid'>
                {cards !== null ? cards.map(card => (
                    <div key={card.id}>
                        <img src={card.cardsReverse.clowReverse} alt={card.spanishName}/>
                    </div>
                )) : 'no hay carta'}



            </div>
        </>
    
  )
}

export default Caroussel