import React from 'react';
import Flipcard from 'react-flipcard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Front from './front';
import Back from './back';

function Card(props) {
  const card = props;

  return (
    <div className="card-container" onClick={card.selectedCard} role="presentation">
      <Flipcard
        flipped={card.isComparing}
        disabled
      >
        <Front />
        <Back
          iconClass={card.iconClass}
          iconName={card.iconName}
          isComparing={card.isComparing}
        />
      </Flipcard>
    </div>
  );
}

export default Card;
