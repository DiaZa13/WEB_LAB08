import React from "react";
import Navbar from './game/navBar';
import Game from './game/game';
import backCards from "../utils/backCards";

const initialState = ()=>{
    const backCard = backCards();
    return{
        backCard,
        pairSelected: [],
        isComparing: false,
        counter: 0
    }
};

let guessedCards = 0;
export default class GamePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = initialState();

    }

    render() {
        return (
            <div>
                <Navbar
                    counter = {this.state.counter}
                    reset = {() => this.resetGame()}
                />
                <Game
                    backCard = {this.state.backCard}
                    pairSelected = {this.state.pairSelected}
                    selectedCard= {(card) => this.selectedCard(card)}
                />
            </div>
        );
    }

    selectedCard(card){
        if(this.state.isComparing || this.state.pairSelected.indexOf(card) > -1){
             return;
        }
        card.isComparing = true;
        const pairSelected = [...this.state.pairSelected,card];

        this.setState({pairSelected})
        console.log(pairSelected.length)
        if(pairSelected.length === 2){
            this.comparingCards(pairSelected)
            this.setState({counter: this.state.counter + 1})
        }
    }


    comparingCards(pairSelected) {
        this.setState({isComparing: true})
        let newCards = this.state.backCard;

        setTimeout(()=>{
            const [firstCard, secondCard] = pairSelected;
            if(firstCard.iconName === secondCard.iconName) {
                guessedCards += 1;
                    newCards = newCards.map((card) => {
                        const index = this.state.backCard.indexOf(card);
                        if(card.iconName != firstCard.iconName){
                            return card;
                        }else{
                            return {...card,guessed: true}
                        }
                    });
                }

              if(guessedCards === 12){
                  alert("Felicidades, has ganado")
              }

            console.log('cuando hace esto')
                this.setState({
                    pairSelected: [],
                    isComparing: false,
                    backCard: newCards
                })}
        ,1000);

    }

    resetGame(){
        this.setState(
            initialState()
        )
    };


}

