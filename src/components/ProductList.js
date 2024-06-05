import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
import productsData from '../products.json'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setProducts(productsData); 
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs='3' className='mb-3 mt-3'>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;