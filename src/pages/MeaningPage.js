import React from 'react';
import '../styles/Styles.css'
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import BackCard from '../components/BackCard';
import NotfoundBack from '../components/NotfoundBack';

function MeaningPage() {
  const location = useLocation();
  const selectedCards = location.state?.from;

  return (
    <>
        <Header/>
        <main className="containerCardsSecond">
          {selectedCards.map((card, index) => (
            <div key={index} className="containerCardsSecondBox">
            
            {
                card.clowCard ? (
                    <BackCard card={card} />
                ) : <div>
                        <NotfoundBack card={card} />
                    </div>
            }
                
           
              <div className="cointainerInfo">
                {index === 0 && <h2>PASADO</h2>}
                {index === 1 && <h2>PRESENTE</h2>}
                {index === 2 && <h2>FUTURO</h2>}
                <div className="cointainerMeaning">
                  <h3>{card.spanishName}</h3>
                  <p>"{card.meaning}"</p>
                </div>
              </div>
            </div>
          ))}
      </main>
    </>
  )
}

export default MeaningPage