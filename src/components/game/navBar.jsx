import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

class navBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

   handleClick() {
        this.setState(this.props.initialState);
    }

    render() {
        return (
            <nav className="navbar navbar-expand border-bottom text-primary">
                <a className="navbar-brand" href="/">HOME</a>
                <div className="collapse navbar-collapse" id="navbarItems">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item my-auto mr-5">
                            Movimientos: {this.props.counter}
                        </li>
                        <li className="nav-item">
                                <span onClick={this.props.reset} className={'bi bi-arrow-repeat cursor-pointer'}>
                                    Reiniciar
                                </span>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default navBar;