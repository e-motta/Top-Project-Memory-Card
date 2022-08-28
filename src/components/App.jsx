import React, { useCallback, useState } from 'react';
import {
  mdiAccount, mdiAirplane, mdiArrowRight, mdiHeart, mdiHome, mdiPencil, mdiScale, mdiTrashCan,
} from '@mdi/js';

import Header from './Header';
import Content from './Content';

import '../styles/reset.css';
import '../styles/App.css';

function App() {
  const allIconsArr = [
    ['Home', mdiHome],
    ['Account', mdiAccount],
    ['Heart', mdiHeart],
    ['Trash', mdiTrashCan],
    ['Pencil', mdiPencil],
    ['Airplane', mdiAirplane],
    ['Arrow', mdiArrowRight],
    ['Scale', mdiScale],
  ];

  const [randomIconsArr, setRandomIconsArr] = useState(
    allIconsArr.sort(() => 0.5 - Math.random()),
  );
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const randomizeCards = () => {
    setRandomIconsArr(
      allIconsArr.sort(() => 0.5 - Math.random()),
    );
  };

  const logClickedCards = (e) => {
    setClickedCards((prevClickedCards) => (
      [...prevClickedCards, e.target.id]
    ));
  };

  const keepScore = (e) => {
    if (!clickedCards.includes(e.target.id)) {
      setCurrentScore(currentScore + 1);
      if (currentScore >= maxScore) {
        setMaxScore(maxScore + 1);
      }
      return true;
    }
    setCurrentScore(0);
    return false;
  };

  const playRound = useCallback((e) => {
    if (keepScore(e)) {
      logClickedCards(e);
    } else {
      setClickedCards([]);
    }
    randomizeCards();
  });

  return (
    <div className="App">
      <Header
        currentScore={currentScore}
        maxScore={maxScore}
      />
      <Content
        randomIconsArr={randomIconsArr}
        playRound={playRound}
      />
    </div>
  );
}

export default App;
