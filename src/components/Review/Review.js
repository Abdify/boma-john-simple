import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [CartItemDetail, setCartItemDetail] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCartItemDetail(cartProducts)
        // console.log(cart);
    }, [])
    
    function removeProduct(productKey) {
        const newCart = CartItemDetail.filter(pd => pd.key !== productKey);
        setCartItemDetail(newCart);
        removeFromDatabaseCart(productKey);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {CartItemDetail.map((pd) => (
                    <ReviewItem
                        removeProduct={removeProduct}
                        key={pd.key}
                        product={pd}
                    ></ReviewItem>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={CartItemDetail}></Cart>
            </div>
        </div>
    );
};

export default Review;