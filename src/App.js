import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import FlippableCard from './components/Flippable-card';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [selectedCard, setSelectedCard] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Link to='/intro'>Voy a la página principal</Link>
      <Link to='/meaning'>
        <Button className='frame'text='Descubre el significado de tus cartas'/>
      </Link>
      <FlippableCard selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>  
    </div>
  );
}

export default App;
