import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
class navBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand border-bottom text-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarItems">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item my-auto mr-5">
                            Conteo
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span className={'bi bi-arrow-repeat mr-1'}></span>
                                Reiniciar
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default navBar;