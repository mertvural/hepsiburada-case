import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { brandFilter } from './DataSlice'

const BrandFilter = () => {

    const { value, brandActiveText } = useSelector(state => state.datas)

    const dispatch = useDispatch()

    let brandLength = [],
        brandData = [];

    value.map((item) => {

        if (!brandLength.includes(item.brandId)) {
            brandLength.push(item.brandId);
        }
    })

    brandLength.map((item) => {
        let dataNew = value.filter(x => x.brandId === item)
        brandData.push(dataNew)
    })

    return (
        <>
            <h2>Marka</h2>
            <ul>
                {
                    brandData.map((item, index) => (
                        <li key={index}>                                 
                        <label className={brandActiveText === true ? "active" : ""} onClick={() => dispatch(brandFilter(item[0].brandId))} htmlFor={item[0].color}>
                            {item[0].brand}             
                            <span className="num"> ({item.length})</span>                            
                        </label>
                    </li>
                    ))
                }

            </ul>
        </>
    )
}

export default BrandFilter