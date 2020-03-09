import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/Shop/shop.component';

import HomePage from './pages/homepage/homepage.component';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  exact path='/shop' component={ShopPage}/>
      </Switch>
            
    </div>
  );
}

export default App;
