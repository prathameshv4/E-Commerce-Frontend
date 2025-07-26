import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);


    return search ? (
        <div className='boorder-t border-b bg-gray-50 text-center'>

            <div className='inline-flex items-center justify-center border border-gray-300 px-5 my-5 mx-3 rounded-md w-3/4'>
                <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 text-sm outline-none bg-inherit' />
                <img src={assets.search_icon} className='w-4' alt="" />
            </div>
            <img onClick={() => setShowSearch(false)} src={assets.cross_icon} className='w-3 inline cursor-pointer' alt="" />

        </div>
    ) : null;
}

export default SearchBar
