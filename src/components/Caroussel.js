import React, {useEffect, useState} from 'react';
import GetCards from '../services/GetCards'
import Card from '../components/Card'
import '../styles/Styles.css'

function Caroussel() {
    const [cards, setCards] = useState(null);
   
     //cuando se importa la funcion fetch eluseState cambia de estado
    useEffect(() => {
        GetCards(setCards)
    },[])

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