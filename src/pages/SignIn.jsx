import React from 'react';
import "../styles/SignIn.scss";
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import InputGroup  from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
export default function SignIn() {
return (
    <>
    <div className='sign-in'>
        <Container className='row mt-5 mb-3 md-6'>
            <div className='panel'>
              <div className='panel-heading'>
                <h3 className='panel-title'>Sign in</h3>
              </div>
            </div>
            <Form.Label className='email' htmlFor='email' size="lg">Email
            </Form.Label>
            <InputGroup className='mx-3' type="email">
        <Form.Control
          placeholder="Email..."
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
            </InputGroup>
            <Form.Label html htmlFor='password'>Password
            </Form.Label>
            <InputGroup className='mx-3' type="password" size="lg">
        <Form.Control
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon2"
        />
            </InputGroup>
            <div className='d-grid mt-5 mb-2'>
            <Button as='input'variant='primary' type='submit' value='Sign in' size='lg'></Button>
            </div>
            </Container>
        </div>
      </>);
}
