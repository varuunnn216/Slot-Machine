import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/SlotMachine.css';

const Reel = ({ item, spinning }) => {
  return (
    <div className={`reel ${spinning ? 'spinning.........' : ''}`}>
      <div className="item">
        <FontAwesomeIcon icon={item.icon} size="2x" className="item-icon" />
        <h4>{item.type}</h4>
        <p>Rarity: {item.rarity}</p>
        <p>Count: {item.count}</p>
      </div>
    </div>
  );
};

export default Reel;
