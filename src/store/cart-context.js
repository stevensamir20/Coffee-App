import React, { useReducer, useEffect } from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (itemId) => {}
});

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartInitializer = (initialCartState = defaultCartState) =>
  JSON.parse(localStorage.getItem("localCart")) || initialCartState;

const cartReducer = (state, action) => {

    if (action.type === 'ADD_TO_CART') {

        const updatedTotalAmount = state.totalAmount + action.item.price;
        console.log(state);
        const updatedItems = state.items.concat(action.item); 

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'REMOVE_FROM_CART') {

        const updatedTotalAmount = state.totalAmount - action.item.price;
        const updatedItems = state.items.filter(item => item !== action.item);
       
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return cartInitializer;
}

export const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState, cartInitializer)

    useEffect(() => {
        localStorage.setItem("localCart", JSON.stringify(cartState));
    }, [cartState]);
    
    const addItemToCart = (item) => {
        dispatchCartAction({
            type: 'ADD_TO_CART',
            item: item
        });
    };

    const removeItemFromCart = (item) => {
        dispatchCartAction({
            type: 'REMOVE_FROM_CART',
            item: item
        });
    };
  
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}> {props.children} </CartContext.Provider>
};

export default CartContext;