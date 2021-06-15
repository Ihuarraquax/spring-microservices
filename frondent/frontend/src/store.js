import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {
    productListReducer,
    productDetailsReducer,
    productSaveReducer,
    productDeleteReducer,
    
    
} from './reducers/productReducers';
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderMineListReducer,
  } from './reducers/orderReducers';
import {cartReducer} from './reducers/cartReducers';
import thunk from 'redux-thunk';

import {userSigninReducer, userSiginReducer, userUpdateReducer} from './reducers/userReducers';

const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
      shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
    }
    
  };

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userSignin: userSigninReducer,
    userSigin: userSiginReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    cart: cartReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderMineList: orderMineListReducer,


})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;