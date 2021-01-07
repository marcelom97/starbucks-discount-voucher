import React from 'react';
import { Col } from 'react-bootstrap';

export default function FailedApplication() {
  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>
          Something went wrong with your <br />
          application. Please try again.
        </h1>
      </Col>
    </Col>
  );
}
