import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { lowestPrice, highestPrice, newest, oldest } from './DataSlice'

const TopAlignment = () => {

    const dispatch = useDispatch()

    function handleChange(e) {
        let val = parseInt(e.target.value);
        switch (val) {
            case 1:
                dispatch(lowestPrice("enDusukFiyat"))
                break;
            case 2:
                dispatch(highestPrice("enYuksekFiyat"))
                break;
            case 3:
                dispatch(newest("enYeniAZ"))
                break;
            case 4:
                dispatch(oldest("enYeniZA"))
                break;
            default:
                break;
        }
    }

    return (
        <>
            <select name="alignment" className="btn" onChange={handleChange}>
                <option value="0" defaultValue>Sıralama</option>
                <option value="1">En Düşük Fiyat</option>
                <option value="2">En Yüksek Fiyat</option>
                <option value="3">En Yeniler(A{'>'}Z)</option>
                <option value="4">En Yeniler(Z{'>'}A)</option>
            </select>
        </>
    )
}

export default TopAlignment