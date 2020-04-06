import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Main-pages/Home';
import About from '../Main-pages/About';
import Contact from '../Main-pages/Contact';

const NavbarRouter = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    )
}

export default NavbarRouter;