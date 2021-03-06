import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const ShopDataBase = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const previousItemsKey = getDatabaseCart();
        const previousItems = Object.keys(previousItemsKey);
        const previousCart = previousItems.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = previousItemsKey[key];
            return product;
        });
        setCart(previousCart);
    }, [])

    function handleAddProduct(product) {
        
        const sameProduct = cart.find((pd) => pd.key === product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = product.quantity + 1;
            product.quantity++;
            newCart = [...cart.filter(pd => pd.key !== product.key), product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((product) => (
                    <Product
                        showAddToCartBtn={true}
                        handleAddProduct={() => handleAddProduct(product)}
                        product={product}
                    ></Product>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default ShopDataBase;
