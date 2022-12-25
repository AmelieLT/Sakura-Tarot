import React from 'react';
import { useState } from 'react';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

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
                <FrontCard card={card} />
            </div>
            <div className='card-back'>
                <BackCard card={card} />
            </div>
        </div>
    )
}
