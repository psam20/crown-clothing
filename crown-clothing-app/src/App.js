import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/Shop/shop.component';

import HomePage from './pages/homepage/homepage.component';

import Header from './Components/header-component/header.component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-page.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
   
  constructor(props){
    super(props);
    this.state={
      currentUser : null
    }
  }
  unsubscribeAuth=null;
  componentDidMount(){
    this.unsubscribeAuth=auth.onAuthStateChanged(user => {
      
      this.setState({currentUser :user})

      console.log(user);
            
  })
  }
  componentWillUnmount(){
    this.unsubscribeAuth();
  }
  render(){
    return (
      <div className="App">
         <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
              
      </div>
    );
  }
}

export default App;
