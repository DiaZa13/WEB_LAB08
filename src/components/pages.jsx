import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GamePage from "./gamePage";
import HomePage from "./homePage";

export default class pages extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path={'/'} exact  component={HomePage} />
                    <Route path={"/gamePage"} component={GamePage} />
                </Switch>

            </Router>

        );
    }
}
