import React from 'react'
import { useDispatch } from 'react-redux'
import { lowestPrice, highestPrice, newest,oldest } from './DataSlice'


const Alignment = () => {

    const dispatch = useDispatch()

    return (
        <>
            <h2>Sıralama</h2>
            <ul>
                <li>
                    <input name="colorFilter" type="radio" className="check" id="enDusukFiyat" />
                    <label htmlFor="enDusukFiyat" onClick={() => dispatch(lowestPrice("enDusukFiyat"))}>En Düşük Fiyat</label>
                </li>
                <li>
                    <input name="colorFilter" type="radio" className="check" id="enYuksekFiyat" />
                    <label htmlFor="enYuksekFiyat" onClick={() => dispatch(highestPrice("enYuksekFiyat"))}> En Yüksek Fiyat</label>
                </li>
                <li>
                    <input name="colorFilter" type="radio" className="check" id="enYeniAZ" />
                    <label htmlFor="enYeniAZ" onClick={() => dispatch(newest("enYeniAZ"))}> En Yeniler (A{'>'}Z)</label>
                </li>
                <li>
                    <input name="colorFilter" type="radio" className="check" id="enYeniZA" />
                    <label htmlFor="enYeniZA" onClick={() => dispatch(oldest("enYeniZA"))}> En Yeniler (Z{'>'}A)</label>
                </li>
            </ul>
        </>
    )
}

export default Alignment



