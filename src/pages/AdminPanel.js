import React from 'react';
import { Col } from 'react-bootstrap';
import { AuthContext } from '../context';
import { useHistory } from 'react-router-dom';

export default function AdminPanel() {
  const authContext = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    console.log(authContext);
    if (!authContext.loggedIn) {
      history.push('/admin');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Col>
      <Col className={'d-flex justify-content-center'}>
        <div>
          <h1 className={'intro-text font-weight-bold pt-5'}>Admin Panel placeholder</h1>
        </div>
      </Col>
    </Col>
  );
}
