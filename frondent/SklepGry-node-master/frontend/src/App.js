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


function App() {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

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
                            userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                                <Link to="/signin">Zaloguj się</Link>
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
                        <Route path="/cart/:id?" component={CartScreen}/>
                        <Route path="/platform/:id" component={HomeScreen}/>
                        <Route path="/" exact={true} component={HomeScreen}/>


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