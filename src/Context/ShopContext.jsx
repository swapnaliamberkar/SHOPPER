import React, { createContext ,useState} from 'react'
import all_product from '../Compontents/Assets/all_product'


export const ShopContext = createContext(null);

const getDeaultCart =( ) =>{
    let cart= {};
    for (let index =0; index < all_product.length+1 ; index++)
    {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider =(props)=>{
   
    const [cartItems, setCartItems] = useState(getDeaultCart())
    

    const addTocart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromcart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmout = () =>{
        let totalAmout = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                totalAmout += itemInfo.new_price * cartItems[item];
            }
            }
            return totalAmout;
    }

    const getTotalCartItems =()=>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
   
    const contextValue = {getTotalCartItems, getTotalCartAmout, all_product, cartItems, addTocart, removeFromcart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
