import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Front from './front'
import Back from './back'
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flipped: false}
        this.flip = this.flip.bind(this);
    }

    flip(){
        this.setState({ flipped: !this.state.flipped });
    }

    render() {
        return (
            <div onClick={this.flip}  className={"card-container" + (this.state.flipped ? " flipped" : "")}>
                <Front/>
                <Back/>
            </div>
        );
    }
}

export default Card;
