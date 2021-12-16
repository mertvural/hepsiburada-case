import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { colorFilter } from './DataSlice'

const ColorFilter = () => {

    const { value, colorActiveText } = useSelector(state => state.datas)

    const dispatch = useDispatch()

    let colorLength = [],
    colorData = [];

    value.map((item) => {

        if (!colorLength.includes(item.colorId)) {
            colorLength.push(item.colorId);
        }
    })

    colorLength.map((item) => {
       let dataNew = value.filter(x => x.colorId === item)
       colorData.push(dataNew)
    })


    return (
        <>
            <h2>Renk</h2>
            <ul>

                {
                    colorData.map((item,index) => (
                        <li key={index}>                                 
                            <label className={colorActiveText === true ? "active" : ""} onClick={() => dispatch(colorFilter(item[0].colorId))} htmlFor={item[0].color}>
                                {item[0].color}             
                                <span className="num"> ({item.length})</span>                            
                            </label>
                        </li>
                    ))
                   
                }

            </ul>
        </>
    )
}

export default ColorFilter
