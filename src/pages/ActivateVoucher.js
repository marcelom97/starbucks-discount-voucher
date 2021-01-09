import React from 'react';
import { Row, Col, InputGroup, Button, Form } from 'react-bootstrap';

import axios from '../utils/axios';

export default function ActivateVoucher() {
  const [voucherId, setVoucherId] = React.useState('');
  const [validated, setValidated] = React.useState(false);

  async function handleSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    try {
      const response = await axios.post(`/api/v1/voucher/${voucherId}`);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 404) {
        alert(error.response.data.message);
      }
    }

    setValidated(true);
  }

  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>Enter your Voucher ID to activate your voucher.</h1>
      </Col>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Voucher ID</label>
            <InputGroup size='lg'>
              <Form.Control
                required
                type={'text'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Voucher ID'}
                onChange={(e) => setVoucherId(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6 d-flex flex-row-reverse'>
            <Button type='submit' variant='primary' size='lg' style={{ backgroundColor: '#046240', border: 'none' }}>
              Activate
            </Button>
          </Col>
          <Col />
        </Row>
      </Form>
    </Col>
  );
}
