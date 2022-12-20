import { Link } from 'react-router-dom';
import './App.css';
import FlippableCard from './components/Flippable-card';
import Header from './components/Header';
import Kero from './assets/Intro-image/kero.png'
import Cerverus from './assets/Intro-image/cerberus.png'


function App() {

  return (
    <div className="App">
      <Header/>
      <div className="intro-image-container">
        <Link to='/intro'>
          <img className="intro-image" src={Kero} alt="Kero" />
        </Link>
        <Link to='/intro'>
          <img className="intro-image" src={Cerverus} alt="Cerverus" />
        </Link>
      </div>
      <FlippableCard/>  
    </div>
  );
}

export default App;
