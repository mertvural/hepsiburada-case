import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from './DataSlice'

const Products = (props) => {

    const dispatch = useDispatch()
  
    return (
        <>
            <li>
                <div className="img">
                    <img src={require(`../assets/images/${props.item.img}`).default} alt={props.item.name} title={props.item.name} />
                </div>
                <div className="desc">
                    <h5 className="title">
                        {props.item.name}
                    </h5>
                    <p className="d-flex flex-column filter-text">
                        <span>
                            <strong>Marka:</strong> {props.item.brand}
                        </span>
                        <span>
                            <strong>Renk:</strong> {props.item.color}
                        </span>
                    </p>
                    <p className="price">
                        {props.item.price} TL
                    </p>
                </div>

                {
                    props.item.isBasket ? (
                        <button className="btn btn-disabled">Bu ürünü sepete ekleyemezsiniz.</button>
                    ) : (
                        <button className="btn btn-basket" onClick={() => dispatch(addBasket(props.item.id))}>Sepete Ekle</button>
                    )
                }
            </li>
        </>
    )
}

export default Products
