import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './components/Home';
import News from './components/News';
import List from './components/List';
import ReactForm from './components/ReactForm';
import TodoList from './components/TodoList';



function App() {
  return (
    <Router>
      <div className="App">
      {/* 
        <Home />
        <News />
        <br />
        <List />
        <br /><br /><br />
        <ReactForm />
        <br /><br /><br />
        <TodoList />
      */}
     <Link to='/'>Home</Link>
     <Link to='/ReactForm'>ReactForm</Link>
     <Link to='/TodoList'>TodoList</Link>
     <hr />
     <br />
       <br />
         <br />
      <Route exact path="/" component={Home} />
      <Route exact path="/ReactForm" component={ReactForm} />
      <Route exact path="/TodoList" component={TodoList} />
      </div>
    </Router>
  );
}

export default App;
