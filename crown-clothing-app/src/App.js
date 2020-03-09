import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/Shop/shop.component';

import HomePage from './pages/homepage/homepage.component';

import Header from './Components/header-component/header.component';


function App() {
  return (
    <div className="App">
       <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  exact path='/shop' component={ShopPage}/>
      </Switch>
            
    </div>
  );
}

export default App;
