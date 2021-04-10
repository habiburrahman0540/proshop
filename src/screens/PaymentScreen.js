import React,{useState} from 'react';
import CheckoutSteps from "../components/CheckoutSteps"
import FormContainer from "../components/FormContainer"
import {Form,Button, Col} from "react-bootstrap"
import {useSelector,useDispatch} from "react-redux"
import {savePaymentMethod} from "../actions/cartActions"
const PaymentScreen = ({history}) => {
    const cart = useSelector(state=>state.cart);
    const {shippingAddress} = cart;
    const dispatch=useDispatch();
    const SubmitHandler =(e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/placeorder')

    }
    const [paymentMethod,setPaymentMethod] = useState('PayPal')
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <Form onSubmit={SubmitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Payment Method</Form.Label>
                    <Col>
                    <Form.Check 
                    type="radio"
                    label="PayPal "
                    id="PayPal"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e)=>setPaymentMethod(e.target.value)}
                    checked
                    >                       
                    </Form.Check>
                    <i class="fab fa-cc-paypal fa-3x"></i>
                    </Col>
                </Form.Group>
                <Button type="submit" variant="primary">Continue</Button>
            </Form>
        </FormContainer>
    );
};

export default PaymentScreen;