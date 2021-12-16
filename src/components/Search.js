import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchText } from './DataSlice'


const Search = () => {

    const dispatch = useDispatch()

    let inputVal =  function(e) {
        
       let val = e.target.value;

       if(val.length>1) {
        dispatch(searchText(val))
       }

       if(val.length<=0) {
        dispatch(searchText(0))
       }

    }

    return (
        <>
            <div className="search">
                <input type="text" className="input" placeholder="25 milyon’dan fazla ürün içerisinde ara"
                    onKeyUp={(e) => {
                        inputVal(e)
                    }} />
                <i className="icon-search"></i>
            </div>
        </>
    )
}

export default Search
