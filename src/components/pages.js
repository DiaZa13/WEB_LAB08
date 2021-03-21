import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GamePage from "./gamePage";
import HomePage from "./homePage";

export default class pages  extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path={'/'} exact  render={
                        () => {
                            return ( <HomePage/>);
                        }
                    }/>
                    <Route path={"/gamePage"} render={
                        () => {
                            return ( <GamePage/>);
                        }
                    }/>
                </Switch>

            </Router>

        );
    }
}