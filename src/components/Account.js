import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';

const Account = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const storedAccount = localStorage.getItem('account');
    if (storedAccount) {
      setAccount(JSON.parse(storedAccount));
    }
  }, []);

  useEffect(() => {
    if(account)
    localStorage.setItem('account', JSON.stringify(account));
  }, [account]);

  const handleInputChange = (e) => {
    setAccount((prevAccount) => ({ ...prevAccount, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      <Row>
        <Col xs="12">
          <h2>Account</h2>
        </Col>
        <Col xs="12">
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" value={account?.name} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" value={account?.email} onChange={handleInputChange} />
            </FormGroup>         
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
