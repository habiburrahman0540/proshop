import {Row,Col,ListGroup,Image,Card,Button} from 'react-bootstrap'
import products from '../products'
import Rating from './Rating'
const ProductScreen = ({match})=>{
    const product = products.find(p=>p._id === match.params.id)
    return(
        <Row className="py-3">
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price : ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description : {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            <strong>
                            ${product.price}
                            </strong>
                         
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Status:
                            </Col>
                            <Col>
                            <strong>
                            {product.countInStock >0? 'In stock':'Out of Stock'}
                            </strong>
                         
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn btn-success btn-block" type="button" disabled={product.countInStock===0}>
                                Add to Card
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
        </Row>
    )
}
export default ProductScreen;