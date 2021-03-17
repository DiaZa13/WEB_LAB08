import React from "react";
import Navbar from './navBar';
import Game from './game'
export default class Page extends React.Component{
    render() {
        return (
            <div>
                <Navbar/>
                <Game/>
            </div>
        );
    }
}
