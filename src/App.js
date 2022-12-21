import './App.css';
import FlippableCard from './components/Flippable-card';
import Header from './components/Header';
import { useState } from 'react';
import CerverusButton from './components/CerverusButton';
import KeroButton from './components/KeroButton';

function App() {
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <div className="App">
      <Header/>
      <div className="intro-image-container">
        <KeroButton/>
        <CerverusButton selectedCards={selectedCards}/>
      </div>
      <FlippableCard selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>  
    </div>
  );
}

export default App;
