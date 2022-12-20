import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import FlippableCard from './components/Flippable-card';
import Header from './components/Header';

function App() {
//estado
  return (
    <div className="App">
      <Header/>
      <Link to='/intro'>Voy a la página principal</Link>
      <Link to='/meaning'>
        <Button className='frame'text='Descubre el significado de tus cartas'/>
      </Link>
      <FlippableCard/>  
    </div>
  );
}

export default App;
