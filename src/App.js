import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';

import routes from './routes/';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/will-match" className="nav-link">Will Match</Link>
          </li>
          <li className="nav-item">
            <Link to="/will-not-match" className="nav-link">Will Not Match</Link>
          </li>
          <li className="nav-item">
            <Link to="/user-details" className="nav-link">User details</Link>
          </li>
          <li className="nav-item">
            <Link to="/radar-chart" className="nav-link">Radar chart</Link>
          </li>
        </ul>
        <Switch>
          { routes.map( (route) => <Route key={ route.path } { ...route } /> ) }
        </Switch>
      </div>
    );
  }
}

export default App;
