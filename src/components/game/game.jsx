import React from 'react';
import Card from '../cards/card';

export default function Game(props) {
  const cards = props;

  return (
    <div className="container-fluid row">
      {
        cards.backCard.map((card) => (
          <Card
            key={card.id}
            iconClass={card.iconClass}
            iconName={card.iconName}
            isComparing={card.isComparing}
            selectedCard={() => cards.selectedCard(card)}
          />
        ))
      }
    </div>
  );
}
