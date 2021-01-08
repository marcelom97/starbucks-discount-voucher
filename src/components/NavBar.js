import React from 'react';
import { Nav, Row, Col, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import Img from '../assets/logo.png';

export default function NavBar() {
  const location = useLocation();
  return (
    <Nav className='justify-content-around align-items-center link'>
      <Row>
        <Col>
          <Link to='/' className='link'>
            <h4>Home</h4>
          </Link>
        </Col>
        <Col>
          <Link to='/activatevoucher' className='link'>
            <div>
              <h4>Activate Voucher</h4>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/'>
            <Image src={Img} width={'128'} height={'128'} />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/voucherresults' className='link'>
            <h4>Results</h4>
          </Link>
        </Col>
        <Col>
          <Link to='/apply' className='link'>
            <h4>Apply</h4>
          </Link>
        </Col>
      </Row>
    </Nav>
  );
}
