import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import {useSelector} from 'react-redux';
import SignupScreen from './Screens/SignupScreen';
import ProductsScreen from './Screens/ProductsScreen';
import ProfileScreen from './Screens/ProfilScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import OrderScreen from './Screens/OrderScreen';
import ShippingAddressScreen  from './Screens/ShippingAddressScreen';
import { logout } from './actions/userActions';
import { useDispatch } from 'react-redux';

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(logout());
      };

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <Link to="/">Giereczki</Link>
                    </div>
                    <div className="header-links">
                        <Link to="/Cart">Koszyk({cartItems.reduce((a, c) => parseFloat(a + c.qty), 0)})</Link>
                        {

userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.username} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orderhistory">historia zamówien</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Wyloguj sie
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Zaloguj</Link>
            )

}

                        {userInfo && userInfo.isAdmin && (
                            <div className="dropdown">
                                <a href="/products">Panel Administratora</a>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/products">Gry</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </header>

                <main className="main">
                    <div className="content">
                        <Route path="/profile" component={ProfileScreen}/>
                        <Route path="/products" component={ProductsScreen}/>
                        <Route path="/signin" component={SigninScreen}/>
                        <Route path="/signup" component={SignupScreen}/>
                        <Route path="/product/:id" component={ProductScreen}/>
                        <Route path="/payment" component={PaymentMethodScreen}></Route>
                        <Route path="/shipping" component={ShippingAddressScreen}></Route>
                        <Route path="/cart/:id?" component={CartScreen}/>
                        <Route path="/platform/:id" component={HomeScreen}/>
                        <Route path="/" exact={true} component={HomeScreen}/>
                        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
                        <Route path="/order/:id" component={OrderScreen}></Route>
                        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
                        


                    </div>

                </main>
                <footer className="footer">
                    Wszystkie prawa zastrzeżone ©Giereczki.
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;