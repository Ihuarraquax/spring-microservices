import Axios from "axios";

import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
  } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get("http://localhost:8081/products/" + productId);
        // const {data} = await Axios.get("http://localhost:5000/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data.id,
                gameName: data.gameName,
                imageSrc: data.imageSrc,
                price: data.price,
                count: data.count,
                qty
            }
        });
        const {cart: {cartItems}} = getState();
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    } catch (error) {

    }
}
const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    const {cart: {cartItems}} = getState();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
 const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };

  const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  };
  

export {addToCart, removeFromCart, saveShippingAddress, savePaymentMethod}