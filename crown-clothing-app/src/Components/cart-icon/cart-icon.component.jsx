import React from 'react';
import {ReactComponent as ShoppingCart} from '../../assets/cart-icon.svg';
import {connect} from 'react-redux';
import {toogleCartHidden} from '../../redux/cart/cart.action'
import './cart-icon.styles.scss';

const CartIcon = ({toogleCartHidden}) => (

    <div className="cart-icon" onClick={toogleCartHidden}>

      <ShoppingCart className="shopping-icon"/>
      <span className="item-count"> 0</span>

    </div>
);

const mapDispatchToProps = dispatch => ({
    toogleCartHidden : () => dispatch(toogleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);