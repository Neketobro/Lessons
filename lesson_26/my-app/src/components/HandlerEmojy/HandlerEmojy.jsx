import { useState, useEffect } from 'react';
import './HandlerEmojy.css';

export function HandlerEmojy() {
  const [isBoolean, setIsBoolean] = useState(false);
  const [joy, setJoy] = useState(() => JSON.parse(localStorage.getItem('joy')) || 0);
  const [happiness, setHappiness] = useState(() => JSON.parse(localStorage.getItem('happiness')) || 0);
  const [cool, setCool] = useState(() => JSON.parse(localStorage.getItem('cool')) || 0);
  const [starsEyes, setStarsEyes] = useState(() => JSON.parse(localStorage.getItem('starsEyes')) || 0);
  const [lovingEyes, setLovingEyes] = useState(() => JSON.parse(localStorage.getItem('lovingEyes')) || 0);

  useEffect(() => {
    localStorage.setItem('joy', JSON.stringify(joy));
    localStorage.setItem('happiness', JSON.stringify(happiness));
    localStorage.setItem('cool', JSON.stringify(cool));
    localStorage.setItem('starsEyes', JSON.stringify(starsEyes));
    localStorage.setItem('lovingEyes', JSON.stringify(lovingEyes));
  }, [joy, happiness, cool, starsEyes, lovingEyes]);

  const obj = { joy, happiness, cool, starsEyes, lovingEyes };
  let maxVotes = Math.max(...Object.values(obj));
  let topEmoticon = Object.keys(obj).find((key) => obj[key] === maxVotes);

  function toggleModalHandler() {
    setIsBoolean((prevState) => !prevState);
  }

  function resetResults() {
    localStorage.clear();
    setJoy(0);
    setHappiness(0);
    setCool(0);
    setStarsEyes(0);
    setLovingEyes(0);
  }

  return (
    <div className='container-emojy'>
      <h1>Голосуй за найкращий смайлик</h1>
      <div className='container'>
        <div className='box-emojy'>
          <button className='button-emojy' onClick={() => setJoy((prev) => prev + 1)}>😄</button>
          <p className='count'>{joy}</p>
        </div>
        <div className='box-emojy'>
          <button className='button-emojy' onClick={() => setHappiness((prev) => prev + 1)}>😁</button>
          <p className='count'>{happiness}</p>
        </div>
        <div className='box-emojy'>
          <button className='button-emojy' onClick={() => setCool((prev) => prev + 1)}>😎</button>
          <p className='count'>{cool}</p>
        </div>
        <div className='box-emojy'>
          <button className='button-emojy' onClick={() => setStarsEyes((prev) => prev + 1)}>🤩</button>
          <p className='count'>{starsEyes}</p>
        </div>
        <div className='box-emojy'>
          <button className='button-emojy' onClick={() => setLovingEyes((prev) => prev + 1)}>😍</button>
          <p className='count'>{lovingEyes}</p>
        </div>
      </div>
      <button className='buttons' onClick={toggleModalHandler}>Show result</button>
      {isBoolean && (
        <div>
          <p className='emojy'>
            {topEmoticon === 'joy' && '😄'}
            {topEmoticon === 'happiness' && '😁'}
            {topEmoticon === 'cool' && '😎'}
            {topEmoticon === 'starsEyes' && '🤩'}
            {topEmoticon === 'lovingEyes' && '😍'}
          </p>
          <p>Переможець</p>
          <button className='buttons' onClick={resetResults}>Reset Result</button>
        </div>
      )}
    </div>
  );
}