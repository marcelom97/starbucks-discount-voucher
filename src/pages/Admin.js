import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context';

import axios from '../utils/axios';

export default function Admin() {
  const authContext = React.useContext(AuthContext);

  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/login', {
        email,
        password,
      });
      const data = response.data;
      authContext.setLoggedIn(true);
      authContext.setToken(data.token);
      authContext.setRefreshToken(data.refreshToken);
      if (response.status === 200) {
        history.push('/adminpanel');
      }
    } catch (error) {
      // TODO: handle unauthorized status
      console.error(error.response);
    }
  }

  React.useEffect(() => {
    console.log(authContext);
    // eslint-disable-next-line
  }, []);

  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>Sign in to Admin Panel</h1>
      </Col>
      <br />
      <Col>
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Email</label>
            <InputGroup size='lg'>
              <FormControl
                type={'email'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Email'}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6'>
            <label>Password</label>
            <InputGroup size='lg'>
              <FormControl
                type={'password'}
                aria-label='Large'
                aria-describedby='inputGroup-sizing-sm'
                placeholder={'Password'}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col />
        </Row>
        <br />
        <Row>
          <Col />
          <Col className='col-6 d-flex flex-row-reverse'>
            <Button
              variant='primary'
              size='lg'
              style={{ backgroundColor: '#046240', border: 'none' }}
              onClick={(e) => handleSignIn(e)}
            >
              Sign In
            </Button>
          </Col>
          <Col />
        </Row>
      </Col>
    </Col>
  );
}
