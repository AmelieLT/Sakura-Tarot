import React from 'react';
import { useState } from 'react';

export default function Card(props) {
    const { clowReverse, id, spanishName, clowCard } = props;
    const [showFront, setShowFront] = useState(true);

    const onClickCard = function () {
        setShowFront(!showFront);
    };
    
    return (
        <div className={showFront ? "card flip-exit" : "card flip-exit-done"} onClick={onClickCard}>
            <div className='card-front'>
                <div key={id}>
                    <img className='card-image' src={clowReverse} alt={spanishName}/>
                </div>
            </div>
            <div className='card-back'>
                <div key={id}>
                    <img className='card-image' src={clowCard} alt={spanishName}/>
                </div>
            </div>
        </div>
    )
}
