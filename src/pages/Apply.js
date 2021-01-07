import React from 'react';
import { Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function Apply() {
  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>Unemployment Discount Application</h1>
      </Col>
      <br />
      <Col>
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Father's Name</label>
            <InputGroup size='lg'>
              <FormControl
                type={'text'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={"Father's Name"}
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
            <Row>
              <Col>
                <label>AFM</label>
                <InputGroup size='lg'>
                  <FormControl
                    type={'number'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={'AFM'}
                  />
                </InputGroup>
              </Col>
              <Col>
                <label>AMKA</label>

                <InputGroup size='lg'>
                  <FormControl
                    type={'number'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={'AMKA'}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6'>
            <Row>
              <Col>
                <label>Unemployment Number</label>
                <InputGroup size='lg'>
                  <FormControl
                    type={'text'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={'Unemployment Number'}
                  />
                </InputGroup>
              </Col>
              <Col>
                <label>Due Date</label>
                <InputGroup size='lg'>
                  <FormControl type={'date'} aria-label='Large' aria-describedby='inputGroup-sizing-sm' />
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6 d-flex flex-row-reverse'>
            <Button variant='primary' size='lg' style={{ backgroundColor: '#046240', border: 'none' }}>
              Apply
            </Button>
          </Col>
          <Col />
        </Row>
      </Col>
    </Col>
  );
}
