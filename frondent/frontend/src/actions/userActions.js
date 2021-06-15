import Axios from "axios";
import Cookie from 'js-cookie';
import {
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL, USER_SIGIN_REQUEST,
    USER_SIGIN_SUCCESS, USER_SIGIN_FAIL, USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL
} from "../constants/userConstants";

const update = ({userId, name, email, password}) => async (dispatch, getState) => {
    const {userSignin: {userInfo}} = getState();
    dispatch({type: USER_UPDATE_REQUEST, payload: {userId, name, email, password}});
    try {
        const {data} = await Axios.put("/api/users/" + userId,
            {name, email, password}, {
                headers: {
                    Authorization: 'Bearer ' + userInfo.token
                }
            });
        dispatch({type: USER_UPDATE_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type: USER_UPDATE_FAIL, payload: error.message});
    }
}

const signin = (username, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {username, password}});
    try {
       const {data} = await Axios.post("http://localhost:8080/api/auth/signin", {username, password});

      //  const res = await fetch('http://localhost:5000/users')
    // const dat  = await res.json()
    // const data = dat.find(a=> (a.email===username) && (a.password === password));
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
    }
}

const signup = (name, email, password) => async (dispatch) => {
    dispatch({type: USER_SIGIN_REQUEST, payload: {name, email, password}});
    try {
        const {data} = await Axios.post("http://localhost:8080/api/auth/signup", {username: name, email, password});
        dispatch({type: USER_SIGIN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
        window.location.href = "http://localhost:3000/";
    } catch (error) {
        dispatch({type: USER_SIGIN_FAIL, payload: error.message});
    }
}

const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
    dispatch({type: USER_LOGOUT})
}
export {signin, signup, logout, update};