import React, {useState} from 'react';
import GetCards from '../services/GetCards'
import Card from '../components/Card'
import '../styles/Styles.css'

function Caroussel() {
    const [cards, setCards] = useState(null);
    GetCards(setCards); //cuando se importa la funcion fetch eluseState cambia de estado
    return (
        <>    
            {cards !== null ? cards.map((card, index) => (
               <Card card={card} key={index}
                /> 
            )) : 'no hay carta'}   
        </>
  )
}

export default Caroussel