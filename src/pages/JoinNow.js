import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function JoinNow() {
  const history = useHistory();

  function handleJoinNow(e) {
    e.preventDefault();
    history.push('/home');
  }

  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>Join the world's hottest coffee brand</h1>
      </Col>
      <br />
      <Col>
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Last Name</label>
            <InputGroup size='lg'>
              <FormControl
                type={'text'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Last Name'}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6'>
            <label>First Name</label>
            <InputGroup size='lg'>
              <FormControl
                type={'text'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'First Name'}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Email</label>
            <InputGroup size='lg'>
              <FormControl
                type={'email'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Email'}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Username</label>
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
            <label>Date of birth</label>
            <InputGroup size='lg'>
              <FormControl type={'date'} aria-label='Large' aria-describedby='inputGroup-sizing-sm' />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Password</label>
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
          <Col className='col-6'>
            <label>Repeat Password</label>
            <InputGroup size='lg'>
              <FormControl
                type={'password'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Repeat Password'}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6 d-flex flex-row-reverse'>
            <Button
              variant='primary'
              size='lg'
              style={{ backgroundColor: '#046240', border: 'none' }}
              onClick={(e) => handleJoinNow(e)}
            >
              Sign Up
            </Button>
          </Col>
          <Col />
        </Row>
      </Col>
      <br />
      <br />
      <br />
      <br />
    </Col>
  );
}
