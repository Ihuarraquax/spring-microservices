import Axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstants';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_MINE_LIST_REQUEST,
  ORDER_MINE_LIST_FAIL,
  ORDER_MINE_LIST_SUCCESS,
} from '../constants/orderConstants';

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    order.orderItems = undefined;
    order.cartItems = order.cartItems.map(_ => _.product);
    const { data } = await Axios.post("http://localhost:8082/", order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    // const res = await fetch('http://localhost:5000/orders', {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${userInfo.token}`,
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(order),
    //   })
    //   const data = await res.json()
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem('cartItems');
    window.location.href = "http://localhost:3000/orderhistory"
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`http://localhost:8082/${orderId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};
export const listOrderMine = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_MINE_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get("http://localhost:8082/", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
  }
};