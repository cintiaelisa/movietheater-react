import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/';
import Movie from './pages/movie';
import Edit from './pages/edit';
import Create from './pages/create';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/create" component={Create} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/edit/:id" component={Edit} />
            
        </Switch>
    
    </BrowserRouter>
)

export default Routes;