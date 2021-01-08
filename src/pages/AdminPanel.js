import React from 'react';
import { Col } from 'react-bootstrap';

export default function AdminPanel() {
  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <div>
          <h1 className={'intro-text font-weight-bold pt-5'}>Admin Panel placeholder</h1>
        </div>
        <div>There will be a panel with confirmation dialog to trigger results</div>
      </Col>
    </Col>
  );
}
