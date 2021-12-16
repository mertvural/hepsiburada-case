import React from 'react'
import { useSelector } from 'react-redux'


const SearchText = () => {

    const { searchTxt } = useSelector(state => state.datas)

    return (
        <>
            <article>
                <h1>iPhone iOS cep telefonu</h1>
                <small><span className="text-soft">Aranan Kelime:</span> <strong>{searchTxt}</strong></small>
            </article>
        </>
    )
}

export default SearchText
