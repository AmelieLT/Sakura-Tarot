import { Link } from 'react-router-dom';
import './App.css';
import FlippableCard from './components/Flippable-card';
import Header from './components/Header';
import Kero from './assets/Intro-image/kero.png'
import { useState } from 'react';
import CerverusButton from './components/CerverusButton';

function App() {
  const [selectedCard, setSelectedCard] = useState([]);

  return (
    <div className="App">
      <Header/>
      <div className="intro-image-container">
        <Link to='/intro'>
          <img className="intro-image" src={Kero} alt="Kero" />
        </Link>
        <CerverusButton selectedCard={selectedCard}/>
      </div>
      <FlippableCard selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>  
    </div>
  );
}

export default App;
