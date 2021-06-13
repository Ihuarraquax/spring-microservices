import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {signin} from '../actions/userActions';

function SigninScreen(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        return () => {
        };
    }, [userInfo, props.history, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(username, password));
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Logowanie</h2>
                </li>
                <li>
                    {loading && <div>Ładowanko</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="username">
                        nazwa użytkownika
                    </label>
                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Zaloguj się</button>
                </li>
                <li>
                    <Link to={redirect === "/" ? "signup" : "signup?redirect=" + redirect}
                          className="button secondary text-center">Przejdź do rejestracji</Link>
                </li>
            </ul>
        </form>
    </div>
}

export default SigninScreen;