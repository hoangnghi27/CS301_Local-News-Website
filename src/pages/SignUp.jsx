import React from 'react';
import "../styles/SignUp.scss";
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import InputGroup  from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
export default function SignUp() {
return (
    <>
    <div className='sign up'>
        <Container className='row mt-5 mb-3 md-6'>
            <div className='panel'>
            <div className='panel-heading'>
            <h3 className='panel-title'>Sign up</h3></div></div>
            <Form.Label htmlFor='username'>Username
            </Form.Label>
            <InputGroup className='mb-3'>
        <Form.Control
          placeholder="Your username..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
            </InputGroup>
            <Form.Label htmlFor='email'>Email
            </Form.Label>
            <InputGroup className='mb-3' type="email">
        <Form.Control
          placeholder="Your email..."
          aria-label="Email"
          aria-describedby="basic-addon2"
        />
            </InputGroup>
            <Form.Label html htmlFor='password'>Password
            </Form.Label>
            <InputGroup className='mb-3' type="password">
        <Form.Control
          placeholder="Create password..."
          aria-label="Password"
          aria-describedby="basic-addon3"
        />
            </InputGroup>
            <Form.Label html htmlFor='password'>Confirm Password
            </Form.Label>
            <InputGroup className='mb-3' type="password">
        <Form.Control
          placeholder="Type password again..."
          aria-label="Password"
          aria-describedby="basic-addon4"
        />
            </InputGroup>
            <Form.Label html htmlFor='password'>Phone Number
            </Form.Label>
            <InputGroup className='mb-3' type="number">
        <Form.Control
          placeholder="Your phone number..."
          aria-label="Phone number"
          aria-describedby="basic-addon5"
        />
            </InputGroup>
            <Form.Label html htmlFor='password'>Address
            </Form.Label>
            <InputGroup className='mb-3' type="text">
        <Form.Control
          placeholder="Your address..."
          aria-label="Address"
          aria-describedby="basic-addon6"
        />
            </InputGroup>
            <div className='d-grid mt-3 mb-2'>
            <Button as='input'variant='primary' type='submit' value='Sign up' size='sm'></Button></div>
            </Container>
        </div>
      </>);
}
