 import {PRODUCTS_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,
    PRODUCTS_DRTAILS_REQUEST,PRODUCT_DRTAILS_SUCCESS,PRODUCT_DRTAILS_FAIL} 
 from '../constants/productConstants.js'  
 
 export const productListReducer = (state={products:[]},action)=>{
   
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {loading:true,products:[]}
        case PRODUCT_LIST_SUCCESS:
            return{loading:false,products:action.payload}
        case PRODUCT_LIST_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state;
    }
}
export const productDetailsReducer =(state={product: { reviews:[]}},action)=>{
        switch(action.type){
            case PRODUCTS_DRTAILS_REQUEST:
                return {loading:true,...state}
            case PRODUCT_DRTAILS_SUCCESS:
                return {loading:false,product:action.payload}
            case PRODUCT_DRTAILS_FAIL:
                return {loading:false,error:action.payload}
            default:
                return state
        }
}

