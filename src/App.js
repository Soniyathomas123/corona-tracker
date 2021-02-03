import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from'./Components/Header';
import World from './Components/World';
import India from'./Components/India';
import {Button} from 'react-bootstrap';
import Statedata from './Components/Statedata';

import{
  BrowserRouter as Router,
  Link,
  Switch,
  Route
}from 'react-router-dom';



class App extends Component {
    constructor() {
        super();
    }
    render() {
        return ( 
          <div className="container-fluid">
            <Router>
              <Header/>
              <switch>
                <Route exact path="/">
                  <India/>
                </Route>
                <Route path="/india">
                  <India/>
                </Route>
                <Route path="/world">
                  <World/>
                </Route>
                <Route path="/statedata">
                  <Statedata/>
                </Route>
              </switch>
            </Router>
          
          </div>
        )
    }
}


export default App;
