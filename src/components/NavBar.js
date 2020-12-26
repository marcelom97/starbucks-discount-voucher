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
            Home
          </Link>
        </Col>
        <Col>
          <Link to='/menu' className='link'>
            Menu
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
            Sign In
          </Link>
        </Col>
        <Col>
          <Link to='/joinnow' className='link'>
            Join_Now
          </Link>
        </Col>
      </Row>
    </Nav>
  );
}
