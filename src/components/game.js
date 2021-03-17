import React from "react";
import Card from './card'
import backCards from "../utils/backCards";

export default class Game extends React.Component {
    render() {
        const backCard = backCards();
        return (
                <div className={'container-fluid row'}>
                    {
                        backCard.map((carta) => <Card
                            key={carta}
                            iconClass = {carta.iconClass}
                            iconName = {carta.iconName}/>)
                    }
                </div>
        );
    }
}
