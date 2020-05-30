import React from 'react';
import Nav from './components/nav/nav';
import Home from './home';
import RandomArticle from './random-article';
import Article from './article';
import Rank from './rank';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (

    //display and set routes to components
    <Router>
      <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/random" component={RandomArticle}/>
        <Route path="/Ranking" component={Rank}/>
        <Route exact path="/article/:id" component={Article}/>
      </Switch>
      
      </div>
    </Router>
 
  );
}

export default App;
