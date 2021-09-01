import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navigation from './common/Navigation';
import Home from './pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  /* callAPI() {
    fetch(`${process.env.REACT_APP_API_URL}/discord/settings`)
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res.basic.name }));
  }

  componentDidMount() {
    this.callAPI();
  } */

  render() {
    return (
      <Router>
        <div className="nelWeb">
          <Navigation />
            <div className="pageContent">
              <Switch>
                <Route exact path="/"> {/* https://www.youtube.com/watch?v=t7VmF4WsLCo */}
                  <Home />
                </Route>
              </Switch>
            </div>
        </div>
      </Router>
    )
  }
}

export default App;

