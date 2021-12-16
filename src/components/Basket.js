import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteProduct} from './DataSlice'

const Basket = () => {

    const { basketVal, basketProductLength } = useSelector(state => state.datas)

    const dispatch = useDispatch()
    
    return (
        <>
            <div className="basket">
                <a hrefLang="#" className="btn">
                    Sepetim
                    <span className="total">
                        {basketProductLength}
                    </span>
                    <ul>
                        {
                            basketVal.map(item => (
                                <li key={item.id}>
                                    <div className="img">
                                    <img src={require(`../assets/images/${item.img}`).default} alt={item.name} title={item.name} />
                                    </div>
                                    <div className="desc">
                                        <h5>
                                            {item.name}
                                        </h5>
                                        <button className="btn btn-delete" onClick={() => dispatch(deleteProduct(item.id))}>Kaldır</button>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </a>

            </div>
        </>
    )
}

export default Basket
