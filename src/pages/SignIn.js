import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function SignIn() {
  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>Sign in to enjoy a new experience</h1>
      </Col>
      <br />
      <Col>
        <Row>
          <Col />
          <Col className='col-6'>
            <InputGroup size='lg'>
              <FormControl
                type={'text'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Username'}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6'>
            <InputGroup size='lg'>
              <FormControl
                type={'password'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Password'}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6 d-flex flex-row-reverse'>
            <Button variant='primary' size='lg' style={{ backgroundColor: '#046240', border: 'none' }}>
              Sign In
            </Button>
          </Col>
          <Col />
        </Row>
      </Col>
    </Col>
  );
}
