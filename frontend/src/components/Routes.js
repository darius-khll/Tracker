

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Welcome from './welcome';

class Routes extends Component{
    render() {
        return(
            <Router>
                <div>
                    <Route path="/" component={Welcome} />
                </div>
            </Router>
        )
    }
}

export default Routes;