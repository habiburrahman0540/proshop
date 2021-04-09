import React, { useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import FormContainer from "../components/FormContainer";
import {useDispatch,useSelector} from 'react-redux'
import {saveShippingAddress} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps';
const ShippingScreen = ({history}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart)
    const {shippingAddress} = cart;

 const submitHandler =(e)=>{
     e.preventDefault();
     dispatch(saveShippingAddress({address,city,postalCode,country}))
     history.push('/payment');
    }
    const [address,setAddress] = useState(shippingAddress.address);
    const [city,setCity] = useState(shippingAddress.city);
    const [postalCode,setPostalCode] = useState(shippingAddress.postalCode);
    const [country,setCountry] = useState(shippingAddress.country);
    return (
        <FormContainer>
            <CheckoutSteps step1 step2/>
           <h1>Shipping Address</h1>
           <Form onSubmit={submitHandler}>
                <Form.Group controlid="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder='Enter Address'
                    value={address?address:''}
                    onChange={(e)=>setAddress(e.target.value)}
                    >
                    </Form.Control>
                   
                </Form.Group>
                 <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control controlid='city'
                        type="text"
                        placeholder="Enter city"
                        value={city?city:''}
                        onChange={(e)=>setCity(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlid="postalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter Postal code" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlid="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Enter Country Name" value={country} onChange={(e)=>setCountry(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary">Continue</Button>
           </Form>
        </FormContainer>
    );
};

export default ShippingScreen;
