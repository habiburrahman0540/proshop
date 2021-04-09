import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from "./reducers/productReducers"
import {CartReducer} from './reducers/cartReducers'
import {UserLoginReducer,userRegisterReducer,userDetailsReducer} from './reducers/userReducers'
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:CartReducer,
    userLogin:UserLoginReducer,
    userRegister: userRegisterReducer,
    userDetails:userDetailsReducer
    
});
const cartItemsFromStroage = localStorage.getItem('cartItems') ? 
                            JSON.parse(localStorage.getItem('cartItems')) : []
const shippingAddressFromStroage = localStorage.getItem('shippingAddress') ?JSON.parse(localStorage.getItem('shippingAddress')) : {}
const userInfoFromStroage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState={
   cart: {
       cartItems:cartItemsFromStroage,
       shippingAddress:shippingAddressFromStroage
    },
   userLogin:{userInfo:userInfoFromStroage}
};
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;