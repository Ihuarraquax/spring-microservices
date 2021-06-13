import React, {useState, useEffect} from 'react';
import {logout, update} from '../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';

function ProfileScreen(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const handleLogout = () => {
        dispatch(logout());
        props.history.push("/signin");
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(update({userId: userInfo._id, email, name, password}))
    }
    const userUpdate = useSelector(state => state.userUpdate);
    const {loading, success, error} = userUpdate;


    useEffect(() => {
        if (userInfo) {
            setEmail(userInfo.email);
            setName(userInfo.name);
            setPassword(userInfo.password);
        }

        return () => {

        };
    }, [userInfo, dispatch])

    return <div className="profile">
        <div className="profile-info">
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Twój profil</h2>
                        </li>
                        <li>
                            {loading && <div>Ładowanko</div>}
                            {error && <div>{error}</div>}
                            {success && <div>Profil zaaktualizowany prawidłowo</div>}
                        </li>
                        <li>
                            <label htmlFor="name">
                                Nazwa użytkownika
                            </label>
                            <input value={name} type="name" name="name" id="name"
                                   onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="email">
                                e-mail
                            </label>
                            <input value={email} type="email" name="email" id="email"
                                   onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="password">Hasło</label>
                            <input value={password} type="password" id="password" name="password"
                                   onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </li>

                        <li>
                            <button type="submit" className="button primary">Zaaktualizuj</button>
                        </li>
                        <li>
                            <button type="button" onClick={handleLogout}
                                    className="button secondary full-width">Wyloguj
                            </button>
                        </li>

                    </ul>
                </form>
            </div>
        </div>

    </div>
}

export default ProfileScreen;