import React, { useState } from 'react';
import { Col, Row, InputGroup, Button, Form } from 'react-bootstrap';

import axios from '../utils/axios';

export default function Apply() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [fathersname, setFathersname] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [adt, setAdt] = useState(null);
  const [afm, setAfm] = useState(null);
  const [amka, setAmka] = useState(null);
  const [unemploymentNumber, setUnemploymentNumber] = useState(null);
  const [unemploymentDuaDate, setUnemploymentDuaDate] = useState(null);

  const [validated, setValidated] = useState(false);

  async function handleSubmit(event) {
    const form = event.currentTarget;

    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log('Validation');
    }
    // TODO: validate the form not to be submited if there are empty fields
    if (birthdate > '1984-12-31') {
      try {
        const response = await axios.post('/api/v1/unemployed', {
          firstname,
          lastname,
          birthdate,
          adt,
          fathersname,
          afm,
          amka,
          unemploymentNumber,
          unemploymentDuaDate,
        });
        if (response.status === 201) {
          alert('Your application was created successfully'); // TODO: make this alert a modal
        }
      } catch (error) {
        console.log(error.response);
        alert('There was an error on creating your application'); // TODO: make this alert a modal
      }
    } else {
      alert('Your age must be at least 1985-01-01'); // TODO: make this alert a modal
    }

    setValidated(true);
  }

  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <div>
          <div className={'d-flex justify-content-center'}>
            <h1 className={'intro-text font-weight-bold pt-5'}>Unemployment Discount Application</h1>
          </div>
          <p>
            Υποψήφιοι δικαιούχοι ενός κουπονιού είναι άτομα που έχουν γεννηθεί μετά την 31η /12/1984 (κριτήριο ηλικίας)
            και έχουν ενεργή εγγραφή στο μητρώο πελατών της εταιρείας κατά την υποβολή της αίτησης. Κάθε κουπόνι
            αντιστοιχεί σε μία οικονομική αξία και ο δικαιούχος της μπορεί να την εξαργυρώσει σε καταστήματα της
            εταιρείας ανά τον κόσμο.
          </p>
        </div>
      </Col>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col />
          <Col className='col-6'>
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <InputGroup size='lg'>
                  <Form.Control
                    required
                    type={'text'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={'First Name'}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <InputGroup size='lg'>
                  <Form.Control
                    required
                    type={'text'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={'Last Name'}
                    onChange={(e) => setLastname(e.target.value)}
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
                <Form.Label>Father's Name</Form.Label>
                <InputGroup size='lg'>
                  <Form.Control
                    required
                    type={'text'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={"Father's Name"}
                    onChange={(e) => setFathersname(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label>Birth Date</Form.Label>
                <InputGroup size='lg'>
                  <Form.Control
                    required
                    type={'date'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    onChange={(e) => setBirthdate(e.target.value)}
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
            <Form.Label>Identity Card Number</Form.Label>
            <InputGroup size='lg'>
              <Form.Control
                required
                type={'text'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Identity Card Number'}
                onChange={(e) => setAdt(e.target.value)}
              />
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
                <Form.Label>AFM</Form.Label>
                <InputGroup size='lg'>
                  <Form.Control
                    required
                    type={'number'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={'AFM'}
                    onChange={(e) => setAfm(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label>AMKA</Form.Label>
                <InputGroup size='lg'>
                  <Form.Control
                    required
                    type={'number'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={'AMKA'}
                    onChange={(e) => setAmka(e.target.value)}
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
                <Form.Label>Unemployment Number</Form.Label>
                <InputGroup size='lg'>
                  <Form.Control
                    required
                    type={'text'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    placeholder={'Unemployment Number'}
                    onChange={(e) => setUnemploymentNumber(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label>Due Date</Form.Label>
                <InputGroup size='lg'>
                  <Form.Control
                    required
                    type={'date'}
                    aria-label='Large'
                    aria-describedby='inputGroup-sizing-sm'
                    onChange={(e) => setUnemploymentDuaDate(e.target.value)}
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
          <Col className='col-6 d-flex flex-row-reverse'>
            <Button variant='primary' size='lg' type='submit' style={{ backgroundColor: '#046240', border: 'none' }}>
              Apply
            </Button>
          </Col>
          <Col />
        </Row>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Col>
  );
}
