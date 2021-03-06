import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({cart}) => {

    const totalItems = cart.reduce((total, pd) => total + pd.quantity, 0);
    const itemsPrice = cart.reduce((total, pd) => total + Number(pd.price * pd.quantity), 0);
    const shippingPrice = cart.reduce((total, pd) => total + Number(pd.shipping), 0);

    return (
        <div className="cart">
            <h3>Order Summery</h3>
            <p>Total items added: {totalItems}</p>
            <p>Items price: ${itemsPrice.toFixed(2)}</p>
            <p>Shipping price: ${shippingPrice.toFixed(2)}</p>
            <p>Tax: ${(itemsPrice * 0.05).toFixed(2)}</p>
            <h4 className="highlighted">Total: ${(itemsPrice + shippingPrice + itemsPrice * 0.05).toFixed(2)}</h4>

            <Link to="/review">
                <button className="order-btn">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;