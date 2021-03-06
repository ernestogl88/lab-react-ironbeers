import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Allbeers from "./Allbeers";
import Home from "./Home";
import BeerDetail from "./BeerDetail";
import Form from "./Form";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Allbeers} />
        <Route path="/beer/:id" component={BeerDetail} />
        <Route path='/random' component={BeerDetail}/>
        <Route path='/new' component={Form}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
