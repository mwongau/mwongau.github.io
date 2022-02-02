import React from 'react';
import './App.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Photos from './Components/Photos';
import { Link, Route, Switch } from "react-router-dom";

function App() {
    return (	
	<div className="App">
	<Header name="M Wong" sub_title="My personal site" />
	<nav className="Links">
	<Link to="/">HOME</Link> | <Link to="/cv">CV</Link> | <Link to="/photos">Photos</Link> | 
	<Link to="/privacy"> Privacy</Link>
	</nav> 
	
	<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cv" component={CV} />   	
	<Route path="/photos" component={Photos} />
	<Route path="/privacy" component={Privacy} />
	</Switch>
    </div>
    );
}
export default App;
