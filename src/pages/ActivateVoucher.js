import React from 'react';
import { Row, Col, InputGroup, Button, Form, Modal } from 'react-bootstrap';

import axios from '../utils/axios';

export default function ActivateVoucher() {
  const [voucherId, setVoucherId] = React.useState('');
  const [validated, setValidated] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    try {
      const response = await axios.post(`/api/v1/voucher/${voucherId}`);
      const data = await response.data;
      console.log(data.path);
      await window.open(data.path);
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 404) {
        setMessage(error.response.data.message);
        handleShow();
      }
    }

    setValidated(true);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{message}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
    </>
  );
}
