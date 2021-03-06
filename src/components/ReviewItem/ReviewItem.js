import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity, price, key} = props.product;
    return (
        <div className="item-container">
            <h4 className="product-name">{name}</h4>
            <h5>Price: {price}</h5>
            <h5>Quantity: {quantity}</h5>
            <h4>Total for this product: { price * quantity }</h4>
            <button className="order-btn" onClick={() => props.removeProduct(key)}>Remove item</button>

        </div>
    );
};

export default ReviewItem;