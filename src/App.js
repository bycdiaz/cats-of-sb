import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./styles/app.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Contribute from "./components/Contribute";
import Adopt from "./components/Adopt";
import OurStory from './components/OurStory';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> 
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/contribute" component={Contribute} />
          <Route path="/adopt" component={Adopt} />
          <Route path="/ourstory" component={OurStory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
