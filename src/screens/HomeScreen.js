import React, {useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {listProduct} from "../actions/productActions"
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import Loading from '../components/Loader'
import Message from '../components/Message'
function HomeScreen() {
  const dispatch= useDispatch();
  const productList = useSelector(state=>state.productList);
  const {loading,error,products} =productList
  useEffect(() => {
    dispatch(listProduct());
  },[dispatch]);
  return (
    <div>
      <h1 className="p-3">Latest Products</h1>
      {loading?<Loading/>
      :error ?<Message variant='danger'>{error}</Message>
      :<Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>}
      
    </div>
  );
}

export default HomeScreen;
