import React from 'react';
import './Score.css';

export default function Score({xScore, oScore, xPlaying}) {
  return (
    <div className='score-container'>
        <span className={`score x-score ${!xPlaying && 'inactive'}`}>X - {xScore}</span>
        <span className={`score o-score ${xPlaying && 'inactive'}`}>O - {oScore}</span>
    </div>
  )
}
