import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import {Row,Col,Card,ListGroup,Button,Image} from "react-bootstrap"
import CheckoutSteps from "../components/CheckoutSteps"
import {useSelector,useDispatch} from "react-redux"
import Message from "../components/Message"
const PlaceOrderScreen = () => {
    const cart = useSelector(state=>state.cart);
    cart.ItemPrice = cart.cartItems.reduce((acc,item)=>acc + item.qty * item.price ,0).toFixed(2);
    cart.ShippingPrice = (cart.ItemPrice > 100 ? 10 : 0).toFixed(2);
    cart.taxPrice = ((0.05)*cart.ItemPrice).toFixed(2);
    cart.totalPrice = (Number(cart.ItemPrice) + Number(cart.ShippingPrice) + Number(cart.taxPrice)).toFixed(2)
   const placeOrder = ()=>{

   }
    return (
        <div>
            <CheckoutSteps/>
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>shipping address: </strong>
                                {cart.shippingAddress.address},{cart.shippingAddress.city},
                                {" "}
                                {cart.shippingAddress.postalCode}
                                {" "}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                               <strong>Method : </strong> {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items :</h2>
                            {cart.cartItems.length === 0 ? (<Message variant="info">Cart is empty</Message>):(
                                <ListGroup variant="flush">
                                    {cart.cartItems.map((item,index)=>(
                                        <ListGroup.Item>
                                            <Row>
                                                <Col md={1}>
                                                <Image src={item.image} alt={item.name} fluid rounded/>
                                                </Col>
                                                <Col>
                                                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                                                </Col>
                                                <Col md={4}>{item.qty} x {item.price} = ${(item.qty * item.price).toFixed(2)}</Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                    <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Item :</Col>
                                    <Col>${cart.ItemPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping :</Col>
                                    <Col>${cart.ShippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax :</Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total :</Col>
                                    <Col>${cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type="button"
                                className="btn-block"
                                disabled={cart.cartItems === 0}
                                onClick={placeOrder}
                                >
                                   Place Order
                                </Button>
                            </ListGroup.Item>
                    </ListGroup>
                   </Card> 
                </Col>
            </Row>
        </div>
    );
};

export default PlaceOrderScreen;