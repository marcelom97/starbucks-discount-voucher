import React from 'react';
import { Col, Table } from 'react-bootstrap';

export default function VoucherResults() {
  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <Col className={'col-8'}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>AMKA</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>placeholder</td>
                <td>placeholder</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>placeholder</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>placeholder</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Col>
    </Col>
  );
}
