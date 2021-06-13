import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {detailsProduct} from '../actions/productActions';

function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {

        };
    }, [dispatch, props.match.params.id]);
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return <div>
        <div>
            <Link to="/">Wróć</Link>
        </div>
        {loading ? <div>Ładowanko</div> :
            error ? <div>{error} </div> :
                (
                    <div className='details'>
                        <div className="details-image"><img alt="gameImg" src={product.imageSrc}/></div>
                        <div className='details-info'>
                            <ul>
                                <li><h1> {product.gameName}</h1></li>
                                <li><h2>Cena: {product.price}zł</h2></li>
                                <li><h5> Platforma:{product.platform}</h5></li>
                                <li><h5> Rodzaj dystrybucji:{product.distribution}</h5></li>
                                <li>Rok wydania: {product.releaseYear}</li>
                                <li>Ilość: {product.count}</li>
                                <li>Cena: {product.price}zł</li>
                                <li>{product.description}</li>
                                <li>©{product.company}</li>
                            </ul>
                        </div>


                        <div className="details-action">
                            <ul>
                                <li>
                                    Cena: {product.price}zł
                                </li>

                                <li>
                                    Status: {product.count > 0 ? "Dostępny" : "Niedostępny"}
                                </li>
                                <li>
                                    Ilość: <select value={qty} onChange={(e) => {
                                    setQty(e.target.value)
                                }}>
                                    {[...Array(product.count).keys()].map(x =>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    )}
                                </select>
                                </li>
                                <li>
                                    {product.count > 0 &&
                                    <button onClick={handleAddToCart} className="button primary">Dodaj do
                                        koszyka</button>
                                    }
                                </li>
                            </ul>

                        </div>
                    </div>
                )
        }

    </div>
}

export default ProductScreen;