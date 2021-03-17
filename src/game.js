import React from "react";
import Navbar from './components/navBar';
import Card from './components/cards'
class game extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className={'container-fluid row'}>
                    <Card/>
                </div>


            </div>
        );
    }
}

export default game;