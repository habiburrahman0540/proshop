import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getUserDetails} from '../actions/userActions'
import Loader from '../components/Loader'
import {Row,Col,Card,ListGroup} from 'react-bootstrap'
const ProfileScreen = ({history}) => {
    
    
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.userDetails);
    const {loading,users} = userDetails;
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin;
    
    console.log(users)
    useEffect(()=>{
                dispatch(getUserDetails('profile'))
    },[dispatch,history,userInfo])
 
    return (
        <Row className='py-3'>
            <Col md={3}>
                <h2>User Profile</h2>
            
           {loading && <Loader/>}
          
           <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Name :</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                </Card>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row>
    );
}

export default ProfileScreen;