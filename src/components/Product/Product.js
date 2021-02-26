import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    console.log(props)
    return (
        <div className="product">
            <div>
                <img src={img} alt="product" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p>
                    <small>By {seller}</small>
                </p>
                <br/>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button className="order-btn" 
                        onClick={props.handleAddProduct}>
                            <i className="shopping cart icon"></i>
                            add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;