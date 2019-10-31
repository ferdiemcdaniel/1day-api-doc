import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import './index.css';

const swaggerDocument = require('./swagger.json');
export const SwaggerApp = () => <SwaggerUI spec={swaggerDocument} />;

export default function BasicExample() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SwaggerApp />
                </Route>
                <Route path="/api/docs">
                    <SwaggerApp />
                </Route>
            </Switch>
        </Router>
    );
}