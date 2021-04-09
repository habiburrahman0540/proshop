import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
const Product = ({ product}) => {

  return (
    <Card className="my-2 p-2 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
        <Card.Title as="h3">${product.price}</Card.Title>
          <Link to={`/product/${product._id}`}>
            {product.countInStock === 0 ?(<Button variant="danger" disabled type="button">Out of Stock</Button>):(<Button variant="success" type="button">Details</Button>) }
        
          </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
