import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoute';
import Main from './components/Templates/BasicLayout/Main/Main'
import Liga from './components/Liga/Liga';
import Etapa from './components/Etapa/Etapa';
import Player from './components/Player/Player';
import Pontos from './components/Pontos/Pontos';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoutes exact path='/app' component={() => <h1>Route Logado!</h1>} />
            <Main>
                <Route exact path="/" component={() => <h1>Main Component!</h1>}></Route>
                <Route exact path="/liga" component={Liga}></Route>
                <Route exact path="/etapa" component={Etapa}></Route>
                <Route exact path="/player" component={Player}></Route>
                <Route exact path="/pontos" component={Pontos}></Route>
            </Main>
        </Switch>
    </BrowserRouter>
)

export default Routes;
