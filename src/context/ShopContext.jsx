import { createContext, use } from "react";
import { products } from "../assets/assets";
import { useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const dileveryFee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const value = { products, currency, dileveryFee, search, setSearch, showSearch, setShowSearch };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;