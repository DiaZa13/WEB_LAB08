import React from 'react';
import Card from '../cards/card';

function Game(props) {
  const { backCard } = props;
  const { selectedCard } = props;

  return (
    <div className="container-fluid row">
      {
                        backCard.map((card) => (
                          <Card
                            key={card.id}
                            iconClass={card.iconClass}
                            iconName={card.iconName}
                            isComparing={card.isComparing}
                            selectedCard={() => selectedCard(card)}
                          />
                        ))
                    }
    </div>
  );
}

export default Game;
