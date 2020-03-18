import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from './component/nav';
import offre from './component/offre';
import Home from './component/home';
import entreprise from './component/entreprise';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";


export default class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navmenu></Navmenu>

          <Route path="/" exact component={Home} />
          <Route path="/features" component={offre} />
          <Route path="/pricing" component={entreprise} />


        </BrowserRouter>

      </div>
    )
  }
}