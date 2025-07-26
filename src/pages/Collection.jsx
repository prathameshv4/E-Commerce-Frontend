import React, { use, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import { useState } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

    const { products } = useContext(ShopContext);
    const { productsTemp } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedType, setSelectedType] = useState([]);
    const [sortBy, setSortBy] = useState('');

    const toggleCategory = (e) => {
        const value = e.target.value;
        if (selectedCategory.includes(value)) {
            setSelectedCategory(selectedCategory.filter(item => item !== value));
        } else {
            setSelectedCategory([...selectedCategory, value]);
        }
    }

    const toggleType = (e) => {
        const value = e.target.value;
        if (selectedType.includes(value)) {
            setSelectedType(selectedType.filter(item => item !== value));
        } else {
            setSelectedType([...selectedType, value]);
        }
    }

    const applyFilter = () => {

        let productCopy = [...products];

        if (selectedCategory.length > 0) {
            productCopy = productCopy.filter(item => selectedCategory.includes(item.category));
        }
        if (selectedType.length > 0) {
            productCopy = productCopy.filter(item => selectedType.includes(item.subCategory));
        }

        setFilteredProducts(productCopy);
    }

    const sortProducts = (e) => {
        const value = e.target.value;
        let productCopy = [...filteredProducts];

        switch (value) {
            // case 'relavant':
            //     productCopy.sort((a, b) => a.price - b.price);
            //     break;
            case 'low-high':
                productCopy.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                productCopy.sort((a, b) => b.price - a.price);
                break;
            default:
                productCopy = productsTemp;
        }
        setFilteredProducts(productCopy);

    }

    useEffect(() => {
        console.log('in useEffect - [selectedCategory, selectedType]');
        applyFilter();
    }, [selectedCategory, selectedType]); //dependancy

    useEffect(() => {
        if (sortBy) sortProducts({ target: { value: sortBy } });
    }, [sortBy]); //dependancy



    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-5'>

            {/* filter options */}
            <div className='min-w-60'>
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <img onClick={() => setShowFilter(!showFilter)} className={`h-3 ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} />
                </p>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'}`}>
                    <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory} />Men
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory} />Women
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory} />Kids
                        </p>
                    </div>
                </div>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'}`}>
                    <p className='mb-3 text-sm font-medium '>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleType} />Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleType} />Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleType} />Winterwear
                        </p>
                    </div>
                </div>

            </div>

            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    <select onChange={(e) => setSortBy(e.target.value)} className='border border-gray-300 rounded text-sm px-2 py-1'>
                        <option selected="selected" value="default">Select Sort by</option>
                        {/* <option value="relavant">Sort by: Relavant</option> */}
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {
                        filteredProducts.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Collection
