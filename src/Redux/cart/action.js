import cartActionTypes from "./action-types";

export const addProductsToCart =(payload)=>({
    type: cartActionTypes.ADD_PRODUCTS,
    payload

})

export const RemoveProducts =(payload)=>({
    type:cartActionTypes.REMOVE_PRODUCTS,
    payload
})

export const IncrementItem= (payload)=>({
    type: cartActionTypes.INCREMENT_ITEM,
    payload
})

export const DecrementItem= (payload)=>({
    type: cartActionTypes.DECREMENT_ITEM,
    payload
})