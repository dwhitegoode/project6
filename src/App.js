import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'
import Nav from './components/Nav.jsx'
import Logo from './components/Logo.jsx'

function App() {
  const [hero, setHero] = useState(null);
  const [active, setActive] = useState(0);

  const getHeroes = async () => {
    let heroes = [];
    let ironman = await axios('https://marvel-api01.herokuapp.com/api/marvel/Iron%20Man');
    let blackpanther = await axios('https://marvel-api01.herokuapp.com/api/marvel/Black%20Panther');
    let america = await axios('https://marvel-api01.herokuapp.com/api/marvel/Captain%20America');
    let strange = await axios('https://marvel-api01.herokuapp.com/api/marvel/Dr.%20Strange');
    let thor = await axios('https://marvel-api01.herokuapp.com/api/marvel/Thor');
    let url = 'https://marvel-api01.herokuapp.com/api/marvel/'


    heroes = [thor.data, ironman.data, america.data, strange.data, blackpanther.data];
    setHero(heroes);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div >
      <Logo></Logo>

      <div className="tab-container">
        <Nav setActive={setActive} />
        {hero && <Card props={hero[active]} />}

      </div>
    </div>
  );
}

export default App;
