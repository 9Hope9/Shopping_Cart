import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Alert } from 'reactstrap';
import '../App.css';

const ProductCard = ({ product }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    let existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      existingCartItems[existingProductIndex].quantity++;
    } else {
      product.quantity = 1;
      existingCartItems.push(product);
    }    
    localStorage.setItem('cart', JSON.stringify(existingCartItems));  
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // Hide the alert after 2 seconds
  };

  return (
    <Card>
      <CardImg top src={product.image} alt={product.name} />
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardText>{product.price}</CardText>
        <Button className='bg-btn' onClick={handleAddToCart}>
          Add to Cart
        </Button>
        {showAlert && <Alert color="success" style={{ marginTop: '10px' }}>Your data is added in cart.</Alert>}
      </CardBody>
    </Card>
  );
};

export default ProductCard;
