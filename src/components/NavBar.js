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
          <Link to='/' className='link'>
            Menu
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={Img} width={'96'} height={'96'} roundedCircle />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/' className='link'>
            Sign In
          </Link>
        </Col>
        <Col>
          <Link to='/' className='link'>
            Join_Now
          </Link>
        </Col>
      </Row>
    </Nav>
  );
}
