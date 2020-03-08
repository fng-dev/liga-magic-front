import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoute';
import Main from './components/Templates/BasicLayout/Main/Main'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoutes exact path='/app' component={() => <h1>Route Logado!</h1>} />
            <Main>
                <Route exact path="/" component={() => <h1>Main Component!</h1>}></Route>
            </Main>
        </Switch>
    </BrowserRouter>
)

export default Routes;
