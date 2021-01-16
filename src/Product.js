import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            }
        })
    }

    return (
        <div className="product">

            <img src={image} alt="" />
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <strong>$ </strong>
                    <strong>{price}</strong>
                </p>
            </div>
            <button onClick={addToBasket}>ADD TO CART</button>

        </div>
    );
}

export default Product;
