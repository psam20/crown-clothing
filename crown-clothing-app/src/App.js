import React from 'react';
import {Switch, Route , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import ShopPage from './pages/Shop/shop.component';

import HomePage from './pages/homepage/homepage.component';

import Header from './Components/header-component/header.component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-page.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setcurrentUser} from './redux/user/user.actions';

class App extends React.Component {
 
  // we don't need this constructor anymore because we have mapDispatchtoProps function that
  // sets currentUser property
  // constructor(props){
  //   super(props);
  //   this.state={
  //     currentUser : null
  //   }
  // }
  unsubscribeAuth=null;
  componentDidMount(){
    const {setcurrentUser} =this.props;
    this.unsubscribeAuth=auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
        
            setcurrentUser ({
              id : snapshot.id,
              ...snapshot.data()
            });
          });
        
      }
  
      setcurrentUser(userAuth)

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
          <Route exact path='/signin' render={() => this.props.currentUser ?(<Redirect to='/'/> ): (<SignInAndSignUp/>) } />
        </Switch>
              
      </div>
    );
  }
}

// connect is HOC , FIRST ARGUEMENT IS mapStateToProps
// first arguement we need if our app component need any state from reducer. 
// We dont need any state form our reducer , so first arguement to connect HOC is null
// Second Arguement to Connect HOC IS mapDispatchToProps
// 
// 
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})
const mapDispatchToProps=(dispatch) => ({
  // setCurrentUser is an action function
  setcurrentUser : user =>dispatch(setcurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
