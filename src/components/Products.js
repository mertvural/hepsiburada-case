import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'


const Products = () => {

    const data = useSelector(state => state.datas.value)
    
   
    return (
        <>
            <ul className="products-list">
                {
                    data.map((item, index) => (
                        <Product key={index} item={item} />
                    ))
                }
            </ul>
        </>
    )
}

export default Products
