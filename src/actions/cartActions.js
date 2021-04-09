import {CART_ADD_ITEM,CARD_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS} from '../constants/cartConstants'
import axios from 'axios'
export const addToCart = (id,qty)=>async(dispatch,getState)=>{
        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({
            type:CART_ADD_ITEM,
            payload:{
                id:data._id,
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock,
                qty
            }
        });
        localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}
 export const removeItemFromCard =(id)=>(dispatch,getState)=>{
        dispatch({
            type:CARD_REMOVE_ITEM,
            payload:id
        });
     localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
 }
 export const saveShippingAddress =(data)=>(dispatch)=>{
        dispatch({
            type:CART_SAVE_SHIPPING_ADDRESS,
            payload:data
        })
        localStorage.setItem("shippingAddress",JSON.stringify(data))
 }