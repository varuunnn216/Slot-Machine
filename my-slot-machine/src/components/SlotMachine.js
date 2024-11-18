import React, { useState } from 'react';
import Reel from './Reel';
import '../styles/SlotMachine.css';
import { items } from '../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSadTear } from '@fortawesome/free-solid-svg-icons';

const SlotMachine = () => {
  const [results, setResults] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const [outcome, setOutcome] = useState(null); // Add state to hold win/lose message

  const spin = () => {
    setSpinning(true);
    setOutcome(null); // Reset outcome message on each spin

    const rewards = Array.from({ length: 3 }, () =>
      items[Math.floor(Math.random() * items.length)]
    );

    setTimeout(() => {
      setResults(rewards);
      setSpinning(false);
      checkOutcome(rewards); // Check if player won or lost
    }, 1000);
  };

  // Function to check win/lose condition
  const checkOutcome = (rewards) => {
    const allSameType = rewards.every(item => item.type === rewards[0].type);
    const allSameRarity = rewards.every(item => item.rarity === rewards[0].rarity);

    if (allSameType || allSameRarity) {
      setOutcome("win");
    } else {
      setOutcome("lose");
    }
  };

  return (
    <div className="slot-machine">
      <h2>Slot Machine Game</h2>
      <div className="reels">
        {results.map((item, index) => (
          <Reel key={index} item={item} spinning={spinning} />
        ))}
      </div>
      <button onClick={spin} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </button>
      <div className="rewards">
        {results.length > 0 && (
          <div>
            <h3>Rewards:</h3>
            <ul>
              {results.map((item, index) => (
                <li key={index}>
                  {item.type} - {item.rarity} (x{item.count})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {outcome && (
        <div className={`outcome ${outcome === 'win' ? 'win' : 'lose'}`}>
          {outcome === "win" ? (
            <div>
              <FontAwesomeIcon icon={faTrophy} /> <span>You Win!</span>
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faSadTear} /> <span>You Lose! Try Again!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
