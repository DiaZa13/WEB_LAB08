import React from 'react';
import Flipcard from 'react-flipcard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Front from './front';
import Back from './back';

function Card(props) {
  const { selectedCard } = props;
  const { isComparing } = props;
  const { iconClass } = props;
  const { iconName } = props;

  return (
    <div className="card-container" onClick={selectedCard}>
      <Flipcard
        flipped={isComparing}
        disabled
      >
        <Front />
        <Back
          iconClass={iconClass}
          iconName={iconName}
          isComparing={isComparing}
        />
      </Flipcard>
    </div>
  );
}

export default Card;
