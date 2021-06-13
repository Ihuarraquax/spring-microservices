import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {listProducts} from '../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';


function HomeScreen(props) {
    const platform = props.match.params.id ? props.match.params.id : '';
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts(platform));
        return () => {
        };
    }, [dispatch, platform]);

    return <div>

        <div className="platformPanel">
            <h3>Platformy:</h3>
            <ul className="platforms">
                <li>
                    <Link to="/platform/PC">PC</Link>
                </li>

                <li>
                    <Link to="/platform/PS4">PS4</Link>
                </li>

                <li>
                    <Link to="/platform/Xbox One">Xbox One</Link>
                </li>
                <li>
                    <Link to="/platform/Android">Android</Link>
                </li>

            </ul>
        </div>
        {platform && <h2 class="center">Gierki na {platform}</h2>}

        {loading ? <div>Ładowanko</div> :
            error ? <div>{error}</div> :
                <ul className="products">

                    {
                        products.map(product =>

                            <li key={product._id}>
                                <div className="product">
                                    <img className="product-image" alt="gierka" src={product.imageSrc}/>
                                    <div className="product-gameName">

                                        <Link
                                            to={'/product/' + product._id}>{product.gameName} ({product.platform})</Link>
                                    </div>
                                    <div className="product-genre">Kategoria: {product.genre}</div>
                                    <div className="product-genre">Rok premiery: {product.releaseYear}</div>
                                    <div className="product-price">{product.price}zł
                                        <Link to={'/product/' + product.id}>
                                            <button className="button primary">Szczegóły gry</button>
                                        </Link></div>
                                </div>


                            </li>
                        )
                    }
                </ul>}
    </div>
}


export default HomeScreen;