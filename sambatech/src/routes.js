import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Personagens from './pages/Personagens';
import Episodios from './pages/Episodios'; 
import Sugestao from './pages/Sugestao'; 

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Personagens} />
            <Route path="/Episodios" component={Episodios} />
            <Route path="/Sugestao" component={Sugestao} />
        </Switch>
    );
}

export default Routes;