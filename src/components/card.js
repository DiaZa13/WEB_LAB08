import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Front from './front'
import Back from './back'
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flipped: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({ flipped: !this.state.flipped });
    }

    render() {
        return (
                <div onClick={this.handleClick} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
                    <Front/>
                    <Back
                        iconClass = {this.props.iconClass}
                        iconName = {this.props.iconName}/>
                </div>
        );
    }
}

export default Card;
