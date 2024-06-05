import React from 'react';
import { Card, CardBody, CardTitle, CardText, Input, Button,CardImg } from 'reactstrap';

const CartItem = ({ item, onQuantityChange, onRemoveItem }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardImg top src={item.image} alt={item.name} />
        <CardText>Quantity:</CardText>
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value, 10))}
        />
        <Button  className='mt-2 bg-btn' onClick={() => onRemoveItem(item.id)}>
          Remove
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;