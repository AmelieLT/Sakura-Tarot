import React, {useState} from 'react';
import GetCards from '../services/GetCards'
import Card from '../components/Card'
import '../styles/Styles.css'

function Caroussel(props) {
    const [cards, setCards] = useState(null);
    GetCards(setCards); //cuando se importa la funcion fetch eluseState cambia de estado
    const { id, spanishName, clowCard, meaning } = props;
    const [selectedCard, setSelectedCard] = useState([]);
    const onClickCard = function () {
        const newSelectedCard = {
            id: id,
            image: clowCard,
            title: spanishName,
            sentence: meaning
        }
        setSelectedCard([...selectedCard, newSelectedCard])
    };


    return (
        <>    
            {cards !== null ? cards.map(card => (
               <Card onClick={onClickCard}
                clowReverse={card.cardsReverse.clowReverse} 
                id={card.id}
                spanishName={card.spanishName}
                clowCard={card.clowCard}
                meaning={card.meaning}
                /> 
            )) : 'no hay carta'}   
        </>
  )
}

export default Caroussel