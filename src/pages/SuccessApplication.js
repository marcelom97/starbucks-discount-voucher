import React from 'react';
import { Col } from 'react-bootstrap';

export default function SuccessApplication() {
  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>
          Your application for a discount voucher <br />
          was sent successfully. You will be notified <br />
          when the results are ready.
        </h1>
      </Col>
    </Col>
  );
}
