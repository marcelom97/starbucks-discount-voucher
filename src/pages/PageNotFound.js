import React from 'react';
import { Col } from 'react-bootstrap';

export default function PageNotFound() {
  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>
          We can't find the page you required,
          <br /> grab a coffee and come back later.
        </h1>
      </Col>
    </Col>
  );
}
