import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {signup} from '../actions/userActions';

function SignUpScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error, success} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        if (userInfo) {
            this.props.history.push(redirect);
        }
        return () => {
        };
    }, [userInfo, props.history, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password2 === password) {
            dispatch(signup(name, email, password));
        } else {
            alert('Hasła muszą się zgadzać');
        }
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Rejestracja</h2>
                </li>
                <li>
                    {loading && <div>Ładowanko</div>}
                    {error && <div>{error}</div>}
                    {success && <div>Konto założono poprawnie, możesz się zalogować</div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Nazwa użytkownika
                    </label>
                    <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="email">
                        e-mail
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password2">Powtórz hasło</label>
                    <input type="password" id="password2" name="password2"
                           onChange={(e) => setPassword2(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Zarejestruj się</button>
                </li>
                <li>
                    <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
                          className="button secondary text-center">Przejdź do logowania</Link>

                </li>
            </ul>
        </form>
    </div>
}

export default SignUpScreen;