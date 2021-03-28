import React from 'react';
import Navbar from './game/navBar';
import Game from './game/game';
import backCards from '../utils/backCards';

const initialState = () => {
  const backCard = backCards();
  return {
    backCard,
    pairSelected: [],
    isComparing: false,
    counter: 0,
  };
};

let guessedCards = 0;

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  selectedCard(card) {
    const carta = card;
    const { isComparing } = this.state;
    const { pairSelected } = this.state;
    const { counter } = this.state;
    if (isComparing || pairSelected.indexOf(card) > -1) {
      return;
    }
    carta.isComparing = true;
    const pairSelectedcopy = [...pairSelected, card];

    this.setState({ pairSelected: pairSelectedcopy });
    console.log(pairSelectedcopy.length);
    if (pairSelectedcopy.length === 2) {
      this.comparingCards(pairSelectedcopy);
      this.setState({ counter: counter + 1 });
    }
  }

  comparingCards(pairSelected) {
    const { backCard } = this.state;
    console.log('testing');
    this.setState({ isComparing: true });
    const newCards = backCard;

    setTimeout(() => {
      const [firstCard, secondCard] = pairSelected;
      if (firstCard.iconName === secondCard.iconName) {
        guessedCards += 1;
        console.log(guessedCards);
        if (guessedCards === 12) {
          console.log('No seas asi');
          alert('Has ganado');
        } else {
          backCard.map((card) => {
            if (card.iconName !== firstCard.iconName) {
              return card;
            }
            return false;
            // console.log('wtf');
            // newCards.splice(index,1);
          });
        }
      } else {
        // console.log('Porque no se voltean solas');
        firstCard.isComparing = false;
        secondCard.isComparing = false;
      }
      // console.log('cuando se hace esto');
      this.setState({

        pairSelected: [],
        isComparing: false,
        backCard: newCards,
      });
    },
    1000);
  }

  resetGame() {
    this.setState(
      initialState(),
    );
  }

  render() {
    const { counter } = this.state;
    const { backCard } = this.state;
    const { pairSelected } = this.state;
    return (
      <div>
        <Navbar
          counter={counter}
          reset={() => this.resetGame()}
        />
        <Game
          backCard={backCard}
          pairSelected={pairSelected}
          selectedCard={(card) => this.selectedCard(card)}
        />
      </div>
    );
  }
}
