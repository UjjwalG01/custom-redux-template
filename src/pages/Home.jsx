import React, { useEffect, useState } from 'react';
import { add } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

function Home() {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchedProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data)
        };
        fetchedProducts();
    }, [products]);

    const addProduct = async (product) => {
        dispatch(add(product));
    }

    return (
        <div className='container'>
            <div className='product-section'>
                {
                    products.length > 0 && products.map((product) => (
                        <div className='product-card'>
                            <img src={product.image} alt="img" />
                            <h3>Product Name: {product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <button onClick={addProduct(product)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home