import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {saveProduct, listProducts, deleteProdcut} from '../actions/productActions';


function ProductsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [gameName, setGameName] = useState('');
    const [company, setCompany] = useState('');
    const [platform, setPlatform] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [distribution, setDistribution] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [count, setCount] = useState('');
    const [price, setPrice] = useState('');

    const productList = useSelector(state => state.productList);
    const {products} = productList;

    const productSave = useSelector(state => state.productSave);
    const {loading: loadingSave, success: successSave, error: errorSave} = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const {success: successDelete} = productDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
            //
        };
    }, [successSave, successDelete, dispatch]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setGameName(product.gameName);
        setCompany(product.company);
        setPlatform(product.platform);
        setReleaseYear(product.releaseYear);
        setDistribution(product.distribution);
        setDescription(product.description);
        setGenre(product.genre);
        setCount(product.count);
        setPrice(product.price);
        setImageSrc(product.imageSrc)

        window.scrollTo(0, 0)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id: id,
            gameName, company, platform, releaseYear, distribution, description, genre, count, price, imageSrc

        }));
    }
    const deleteHandler = (product) => {
        dispatch(deleteProdcut(product._id));
    }
    return <div className="content content-margined">

        <div className="product-header">
            <h3>Gry</h3>
            <button className="button primary" onClick={() => openModal({})}>Dodaj grę</button>
        </div>
        {modalVisible &&
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>{id ? "Edytuj" : "Dodaj"} grę</h2>
                    </li>
                    {loadingSave && <li>
                        <div>Loading...</div>
                    </li>}
                    {errorSave && <li>
                        <div>{errorSave}</div>
                    </li>}

                    <li>
                        <label htmlFor="gameName">
                            Nazwa gry
                        </label>
                        <input type="text" name="gameName" value={gameName} id="gameName"
                               onChange={(e) => setGameName(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <label htmlFor="company">
                            Producent
                        </label>
                        <input type="text" name="company" value={company} id="company"
                               onChange={(e) => setCompany(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <label htmlFor="imageSrc">
                            Ścieżka do obrazu
                        </label>
                        <input type="string" step="0.01" name="imageSrc" value={imageSrc} id="imageSrc"
                               onChange={(e) => setImageSrc(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <label htmlFor="platform">
                            Platforma
                        </label>
                        <input type="text" name="platform" value={platform} id="platform"
                               onChange={(e) => setPlatform(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <label htmlFor="releaseYear">
                            Rok wydania
                        </label>
                        <input type="number" name="releaseYear" value={releaseYear} id="releaseYear"
                               onChange={(e) => setReleaseYear(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <label htmlFor="distribution">
                            Rodzaj dystrybucji
                        </label>
                        <input type="text" name="distribution" value={distribution} id="distribution"
                               onChange={(e) => setDistribution(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <label htmlFor="description">
                            Opis
                        </label>
                        <textarea name="description" value={description} id="description" rows="6"
                                  onChange={(e) => setDescription(e.target.value)}>
              </textarea>
                    </li>

                    <li>
                        <label htmlFor="genre">
                            Gatunek
                        </label>
                        <input type="text" name="genre" value={genre} id="genre"
                               onChange={(e) => setGenre(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <label htmlFor="count">
                            Ilość
                        </label>
                        <input type="number" name="count" value={count} id="count"
                               onChange={(e) => setCount(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <label htmlFor="price">
                            Cena
                        </label>
                        <input type="number" step="0.01" name="price" value={price} id="price"
                               onChange={(e) => setPrice(e.target.value)}>
                        </input>
                    </li>

                    <li>
                        <button type="submit" className="button primary">{id ? "Edytuj" : "Dodaj"}</button>
                    </li>
                    <li>
                        <button type="button" onClick={() => setModalVisible(false)}
                                className="button secondary">Cofnij
                        </button>
                    </li>
                </ul>
            </form>
        </div>
        }


        <div className="product-list">

            <table className="table">
                <thead>
                <tr>
                    <th>Okładka</th>
                    <th>Nazwa gry</th>
                    <th>Platforma</th>
                    <th>Gatunek</th>
                    <th>Cena</th>
                    <th>Ilość</th>
                </tr>

                </thead>
                <tbody>
                {products.map(product => (<tr key={product._id}>
                    <td><img alt="gameImg" class="product-image-table" src={product.imageSrc}/></td>
                    <td>{product.gameName}</td>
                    <td>{product.platform}</td>
                    <td>{product.genre}</td>
                    <td>{product.price}</td>
                    <td>{product.count}</td>
                    <td>
                        <button className="button" onClick={() => openModal(product)}>Edytuj</button>
                        {' '}
                        <button className="button" onClick={() => deleteHandler(product)}>Usuń</button>
                    </td>
                </tr>))}
                </tbody>
            </table>

        </div>
    </div>
}

export default ProductsScreen;