import React from 'react';
import About from './components/About';
import Users from './components/Users';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import Photos from './components/Photos';
import PhotoDetails from './components/PhotoDetails';

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" component={UserDetails} />
          
          <Route path="/photos" exact component={Photos} />
          <Route path="/photos/:id" component={PhotoDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
