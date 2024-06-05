import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import { FaCheckCircle } from "react-icons/fa";
import CartItem from './CartItem';
import '../App.css'

const ShoppingCart = () => {
  const [cart, setCart] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart) localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (id, quantity) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const index = newCart.findIndex((item) => item.id === id);
      if (index !== -1) {
        newCart[index].quantity = quantity;
      }
      return newCart;
    });
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleFinalizePurchase = () => {
    setShowSuccessModal(true);
    console.log('Finalize purchase');
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  return (
    <Container>
      <Row>
        <h2>Shopping Cart</h2>
        {cart?.every((item) => item.quantity === 0) ? (
          <p>No products in cart.</p>
        ) : (
          cart?.map((item) => (
            <Col key={item.id} xs="3" className="mb-3">
              <CartItem
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
            </Col>
          ))
        )}
        <Col xs="12" className="mt-3">
          <Button className='bg-btn' onClick={handleFinalizePurchase}>
            Finalize Purchase
          </Button>
        </Col>
      </Row>
      <Modal isOpen={showSuccessModal} toggle={toggleSuccessModal}>
        <ModalBody>
          <div className="text-center">
            <FaCheckCircle className="text-success" size={80} />
            <h4>Success!</h4>
            <p>Your purchase has been finalized.</p>
            <Button className='bg-btn' onClick={toggleSuccessModal}>
              Close
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default ShoppingCart;
