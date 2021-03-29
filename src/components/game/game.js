import React from "react";
import Card from '../cards/card'

export default class Game extends React.Component {
    render() {
        return (
                <div className={'container-fluid row'}>
                    {
                        this.props.backCard.map((card,index) => {
                            return <Card
                            key={index}
                            iconClass = {card.iconClass}
                            iconName = {card.iconName}
                            isComparing = {card.isComparing}
                            selectedCard = {() => this.props.selectedCard(card)}
                            />
                        })
                    }
                </div>
        );
    }
}
