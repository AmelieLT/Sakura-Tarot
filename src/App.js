import { Link } from 'react-router-dom';
import './App.css';
import FlippableCard from './components/Flippable-card';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <Link to='/intro'>Voy a la página principal</Link>
      <FlippableCard/>  
    </div>
  );
}

export default App;
