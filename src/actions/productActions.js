import {PRODUCTS_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,
PRODUCTS_DRTAILS_REQUEST,PRODUCT_DRTAILS_SUCCESS,PRODUCT_DRTAILS_FAIL
} 
from "../constants/productConstants"
import axios from 'axios'
export const listProduct = () =>async(dispatch) =>{
    try{
        dispatch({type:PRODUCTS_LIST_REQUEST});
        const {data} = await axios.get('/api/products');
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.detail?error.response.data.detail:error.message
        });
    }
}
export const listProductDetails = (id)=>async(dispatch)=>{
        try{
            dispatch({type:PRODUCTS_DRTAILS_REQUEST});
            const {data} = await axios.get(`/api/products/${id}`);
            dispatch({
                type:PRODUCT_DRTAILS_SUCCESS,
                payload:data
            });
        }catch(error){
            dispatch({
                type:PRODUCT_DRTAILS_FAIL,
                payload:error.response && error.response.data.detail?
                error.response.data.detail
                :error.message
            });
        }
}