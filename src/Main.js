import React, { Component } from 'react';
import Homepage from './pages/Homepage/homepage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Shop from './Shop/Shop';
import './App.css';
import Sign from './component/sign-in-and-sign-up/Sign';
import { auth } from './component/Firebase/Firebase.utils';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/sign" component={Sign} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
