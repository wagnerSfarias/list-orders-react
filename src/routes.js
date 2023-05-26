import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Order from './pages/Order';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pedidos" component={Order} />
            </Switch>
        </BrowserRouter>
    )
}   