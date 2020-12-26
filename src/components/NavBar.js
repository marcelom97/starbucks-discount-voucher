import React from 'react';
import { Nav, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Img from '../assets/logo.png';

export default function NavBar() {
  return (
    <Nav className='justify-content-around align-items-center link'>
      <Row>
        <Col>
          <Link to='/' className='link'>
            <h4>Home</h4>
          </Link>
        </Col>
        <Col>
          <Link to='/menu' className='link'>
            <h4>Menu</h4>
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
          <Link to='/signin' className='link'>
            <h4>Sign In</h4>
          </Link>
        </Col>
        <Col>
          <Link to='/joinnow' className='link'>
            <h4>Join_Now</h4>
          </Link>
        </Col>
      </Row>
    </Nav>
  );
}
