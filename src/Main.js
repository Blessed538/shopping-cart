import React, { Component } from 'react';
import Homepage from './pages/Homepage/homepage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Shop from './Shop/Shop';
import './App.css';
import Sign from './component/sign-in-and-sign-up/Sign';
import { auth, createUserProfileDocument } from './component/Firebase/Firebase.utils';
import Header from './component/Header/Header';
import {connect} from 'react-redux';
import { setCurrentUser } from './Redux/user.actions';

class Main extends Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);

     });
  }

  
     componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  
  render() {
    return (
      <div>
        <Router>
          <Header />
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

const mapDispatchToProps = dispatch => ({
setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(Main);
