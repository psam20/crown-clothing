import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-drowdown/cart-dropdown.commponent';

const Header = ({currentUser ,hidden}) => (
    <div className="header">

        <Link className="logo-container" to="/">
            <Logo  className="logo"/>
        </Link>

        <div className="options"> 
        <Link className="option" to="/shop">
        Shop
        </Link>
        <Link className="option" to="/contacts">
        Contacts
        </Link>

        {
            currentUser ? 

            <div className="option"  onClick={()=> auth.signOut()}>
                SIGN OUT
            </div>
            :
            <Link className="option" to="/signin">
                SIGN IN
            </Link>
        }
          <CartIcon />
        </div>
          {
              hidden ? null  : <CartDropdown />
          }
       

    </div>
)

// this function will return object 
// this function will take state as an arguement .
// state is the top level root reducer
const mapStateToProps = ({user : {currentUser},cart :{hidden}} ) => ({
    // here name of the property will be actual currentUser
    // property that we want to pass in 
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header) ;