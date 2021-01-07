import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function ActivateVoucher() {
  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>Enter your Voucher ID to activate your voucher.</h1>
      </Col>
      <br />
      <Col>
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Voucher ID</label>
            <InputGroup size='lg'>
              <FormControl
                type={'text'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Voucher ID'}
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
              Activate
            </Button>
          </Col>
          <Col />
        </Row>
      </Col>
    </Col>
  );
}
