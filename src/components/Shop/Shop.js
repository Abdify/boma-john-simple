import React, { useState } from 'react';
import fakeData from "../../fakeData";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    let previousCartItems = [];
    if( localStorage.getItem('cartItem') ){
        previousCartItems = JSON.parse(localStorage.getItem("cartItem"));
    }
    const [cart, setCart] = useState(previousCartItems);

    function handleAddProduct(product) {
        const newCart = [...cart, product];
        setCart(newCart);
        localStorage.setItem('cartItem', JSON.stringify(newCart));
    }

    


    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((product) => (
                    <Product 
                        handleAddProduct={() => handleAddProduct(product)} 
                        product={product}>
                    </Product>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;