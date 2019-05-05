import React from 'react';
//import logo from './logo.svg';
//import './assets/css/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Pcontent from './components/Pcontent';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/pcontent/:id' component={Pcontent}/>
      </div>
    </Router>
  );
}

export default App;
