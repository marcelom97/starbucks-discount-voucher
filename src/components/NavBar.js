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
          {location.pathname === '/home' ? (
            <Link to='/signout' className='link'>
              <h4>Sign Out</h4>
            </Link>
          ) : (
            <Link to='/signin' className='link'>
              <h4>Sign In</h4>
            </Link>
          )}
        </Col>
        <Col>
          {location.pathname === '/home' ? (
            <Link to='/apply' className='link'>
              <h4>Apply</h4>
            </Link>
          ) : (
            <Link to='/joinnow' className='link'>
              <h4>Join_Now</h4>
            </Link>
          )}
        </Col>
      </Row>
    </Nav>
  );
}
