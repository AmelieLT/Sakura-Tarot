import { Link } from 'react-router-dom';
import './App.css';
import Caroussel from './components/Caroussel';

function App() {

  return (
    <div className="App">
      <Link to='/intro'>Voy a la página principal</Link>
      <Caroussel/>
      
    </div>
  );
}

export default App;
