import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';
import Home from './Home';
import Houses from './Houses';
import Game from "./Game";
import flags from "./flags";
const App = () => {

  
  return (
    <div>
<Router>

  <Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/Houses" exact component={Houses}/>
  </Switch>
</Router>
<Game flags={flags} attempts={3} />
    </div>
  );
};
export default App;