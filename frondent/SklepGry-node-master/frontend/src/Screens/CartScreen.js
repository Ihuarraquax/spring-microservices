import React, {useEffect} from 'react';
import {addToCart, removeFromCart} from '../actions/cartActions';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function CartScreen(props) {

    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);


    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Koszyk
                    </h3>
                    <div>
                        Cena
                    </div>
                </li>
                {
                    cartItems.length === 0 ?
                        <div>
                            Koszyk jest pusty
                        </div>
                        :
                        cartItems.map(item =>
                            <li>
                                <div className="cart-image">
                                    <Link to={'/product/' + item.product}>
                                        <img src={item.imageSrc} alt="product"/>
                                    </Link>
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/" + item.product}>
                                            {item.gameName}
                                        </Link>

                                    </div>
                                    <div>
                                        Ilość: {item.qty}
                                        <button type="button" className="button"
                                                onClick={() => removeFromCartHandler(item.product)}>
                                            Usuń z koszyka
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    {item.price}zł
                                </div>
                            </li>
                        )
                }
            </ul>

        </div>
        <div className="cart-action">
            <h3>
                Całość ({cartItems.reduce((a, c) => parseFloat(a + c.qty), 0)} gier):
                {(cartItems.reduce((a, c) => a + c.price * c.qty, 0)).toFixed(2)}zł
            </h3>
            <button className="button primary full-width">
                Dodaj zamówienie
            </button>

        </div>

    </div>
}

export default CartScreen;