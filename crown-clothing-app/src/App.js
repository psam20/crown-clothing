import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/Shop/shop.component';

import HomePage from './pages/homepage/homepage.component';

import Header from './Components/header-component/header.component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-page.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
   
  constructor(props){
    super(props);
    this.state={
      currentUser : null
    }
  }
  unsubscribeAuth=null;
  componentDidMount(){
    this.unsubscribeAuth=auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state))
        })
      }
  
      this.setState({currentUser :userAuth})

      // console.log(user);
            
  })
  }
  componentWillUnmount(){
    this.unsubscribeAuth();
  }
  render(){
    return (
      <div className="App">
        {/* removed this from Header Component currentUser={this.state.currentUser} */}
         <Header />
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
