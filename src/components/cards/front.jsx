import React from 'react';
import background from '../../media/bck.png';

function Front() {
  return (
    <div className="front">
      <div className="card">
        <img src={background} className="w-100 h-100" alt="Cards background" />
        <span className="bi bi-grid-fill icon" />
      </div>
    </div>
  );
}

export default Front;
