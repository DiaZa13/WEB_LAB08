import React from "react";
import Flipcard from 'react-flipcard'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Front from './front'
import Back from './back'


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.selectedCard()
    }

    render() {
        return (
                <div className={"card-container " + (this.props.guessed?'animate__animated animate__bounceOut':'')}
                     onClick={this.props.selectedCard} >
                   <Flipcard
                       flipped={this.props.isComparing}
                       disabled={true}
                   >
                       <Front/>
                       <Back
                           iconClass = {this.props.iconClass}
                           iconName = {this.props.iconName}
                           isComparing = {this.props.isComparing}
                       />
                   </Flipcard>
                </div>
        );
    }
}

export default Card;
