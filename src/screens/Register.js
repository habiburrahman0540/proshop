import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Button, Form,Row,Col} from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {register} from '../actions/userActions'
import FormContainer from '../components/FormContainer'
const Register = ({location,history}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword]= useState('')
    const [confirmPassword,setConfirmPassword]= useState('')
    const [message,setMessage]= useState('')
    const dispatch = useDispatch();
    

    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userRegister = useSelector(state=>state.userRegister);
    const {error,loading,userInfo} = userRegister
    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])

const submitHandler = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            setMessage('Password do not match')
        }else{
            dispatch(register(name,email,password))
        }
        
    }
    return (
        <FormContainer>
           <h1>Register User</h1>
           {message && <Message variant='danger'>{message}</Message>}
           {error && <Message variant='danger'>{error}</Message>}
           {loading && <Loader/>}
           <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control 
                        required
                        type='name'
                        value={name}
                        placeholder="Please Enter your name"
                        onChange={(e)=>setName(e.target.value)}
                    >
                    </Form.Control>

                </Form.Group>
                   <Form.Group controlId='email'>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control 
                    required
                        type='email'
                        value={email}
                        placeholder="Please Enter your register email"
                        onChange={(e)=>setEmail(e.target.value)}
                    >
                    </Form.Control>

                </Form.Group>
                <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        required
                        type='password'
                        placeholder='Please enter a valid password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        >
                        </Form.Control>
                </Form.Group>
                  <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                        type='password'
                        placeholder='Please enter a confirm password'
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        required
                        >
                        </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Register</Button>
           </Form>
           <Row className='py-3'>
                <Col>
                Have account to login ?<Link to={redirect ? `/login?redirect=${redirect}` : '/register'}>Login</Link>
                </Col>
           </Row>
        </FormContainer>
    );
};

export default Register;