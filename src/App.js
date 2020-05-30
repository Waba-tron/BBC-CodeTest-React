import React from 'react';
import Nav from './components/nav/nav';
import {Link} from 'react-router-dom';
import RandomArticle from './random-article';
import Article from './article';
import Rank from './rank';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (

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

const Home = () => (
  <div>
    <h1>Please click on the following Articles</h1>
       <Link to="/article/2">
         <h1>Article 2</h1>
        </Link>
        <Link  to="/article/3">
        <h1>Article 3</h1>
        </Link>
        <Link to="/article/5">
        <h1>Article 5</h1>
        </Link>
  </div>
)

export default App;
