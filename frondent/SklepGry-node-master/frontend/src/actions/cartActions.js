import Axios from "axios";
import Cookie from "js-cookie";
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get("http://localhost:8081/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                gameName: data.gameName,
                imageSrc: data.imageSrc,
                price: data.price,
                count: data.count,
                qty
            }
        });
        const {cart: {cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {

    }
}
const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    const {cart: {cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}


export {addToCart, removeFromCart}