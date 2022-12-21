import React from 'react';
import { useState } from 'react';

export default function Card({card, selectedCards, setSelectedCards}) {
    //const { clowReverse, id, spanishName, clowCard, meaning } = card;
    const [showFront, setShowFront] = useState(true);

    const onClickCard = () => {
        setShowFront(!showFront);
        setSelectedCards([...selectedCards, card])
        console.log(selectedCards)
        
    };

    return (
        <div meaning={card.meaning} className={showFront ? "card flip-exit" : "card flip-exit-done"}>
            <div className='card-front' onClick={onClickCard}>
                <div key={card.id}>
                    <img className='card-image' src={card.cardsReverse.clowReverse} alt={card.spanishName}/>
                </div>
            </div>
            <div className='card-back'>
                <div key={card.id}>
                    <img className='card-image' src={card.clowCard} alt={card.spanishName}/>
                </div>
            </div>
        </div>
    )
}
