import { Link } from 'react-router-dom';
import './App.css';
import Caroussel from './components/Caroussel';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <Link to='/intro'>Voy a la página principal</Link>
      <Caroussel/>
      
    </div>
  );
}

export default App;
