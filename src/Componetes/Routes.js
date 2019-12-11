import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './Principais/Dashboard';
import Sobre from './Conteudo/Sobre';
import Contato from './Conteudo/Contato';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
// routes