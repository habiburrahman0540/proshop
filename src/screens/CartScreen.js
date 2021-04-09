import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
import {addToCart,removeItemFromCard} from '../actions/cartActions';
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap';
import { useDispatch,useSelector} from 'react-redux';
import Message from '../components/Message'
const CartScreen= ({match,location,history})=> {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1 ;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty));
        }
       
    },[dispatch,productId,qty]);
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;
    const removeFromCardHandler = (id)=>{
      dispatch(removeItemFromCard(id))
    }
    const checkoutHandler =()=>{
        history.push('/login?redirect=shipping')
    }
    return (
        <Row className="py-5">
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ?
                (<Message variant='info'>Your cart is empty <Link to='/'>Go back</Link></Message>) :
                (<ListGroup variant='flush'>
                      {cartItems.map(item=>(
                            <ListGroup.Item key={item.id}>
                            <Row>
                            <Col md={2}>
                                <Image src={item.image} alt={item.name} fluid rounded/>
                            </Col>
                            <Col md={3}>
                               <Link to={`/product/${item.id}`}>{item.name}</Link> 
                            </Col>
                            <Col md={2}>
                                ${item.price}
                            </Col>
                            <Col md={2}>
                                <Form.Control
                                as="select"
                                value={item.qty}
                                onChange={(e)=>dispatch(addToCart(item.id, Number(e.target.value)))}
                                >
                                    {
                                        [...Array(item.countInStock).keys()].map((x)=>(
                                            <option value={x+1} key={x+1} >{x+1}</option>
                                        ))
                                    }
                                </Form.Control>
                            </Col>
                            <Col md={1}>
                                    <Button onClick={()=>removeFromCardHandler(item.id)} type='button' variant='light'><i className="fas fa-trash"></i></Button>
                            </Col>
                        </Row>
                        </ListGroup.Item>
                      ))}
                </ListGroup>)
            }
            </Col>
            {cartItems.length === 0 ? "" : (
                       <Col md={4} className="my-5">
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col md={6}>Subtotal Items</Col>
                                <Col md={6}>{cartItems.reduce((acc,item)=>acc + item.qty ,0)}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item> 
                            <Row>
                                <Col md={6}>Subtotal</Col>
                            <Col md={6}>${cartItems.reduce((acc,item)=>acc + item.qty * item.price ,0).toFixed(2)}</Col>
                             </Row>
                            </ListGroup.Item>
                      
                             <ListGroup.Item>
                                 <Button className="btn-block" type="button" onClick={checkoutHandler}>
                                        Proceed To Checkout
                                 </Button>
                             </ListGroup.Item>
                    </ListGroup>
             </Card>
            </Col>
     
            )}
        </Row>
    );
}

export default CartScreen;