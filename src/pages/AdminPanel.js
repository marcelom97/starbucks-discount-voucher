import React from 'react';
import { Col, Button, Row, Modal } from 'react-bootstrap';
import { AuthContext } from '../context';
import { useHistory } from 'react-router-dom';

import axios from '../utils/axios';

export default function AdminPanel() {
  const authContext = React.useContext(AuthContext);
  const history = useHistory();

  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function ActivateHandler(event) {
    event.preventDefault();
    try {
      const response = await axios.post('/api/v1/voucher/activate');
      const status = await response.status;
      if (status === 200) {
        setMessage(response.data.message);
        handleShow();
      }
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 404) {
        setMessage(error.response.data.message);
        handleShow();
      }
    }
  }

  async function RejectHandler(event) {
    event.preventDefault();
    try {
      const response = await axios.post('/api/v1/voucher/reject');
      const status = await response.status;
      if (status === 200) {
        setMessage(response.data.message);
        handleShow();
      }
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 404) {
        setMessage(error.response.data.message);
        handleShow();
      }
    }
  }

  React.useEffect(() => {
    console.log(authContext);
    if (!authContext.loggedIn) {
      history.push('/admin');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{message}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Col className={'d-flex justify-content-center'}>
        <Col>
          <h4 className={'intro-text'}>
            To Activate the Voucher Points System Calculation click the Activate button and to Reject click the Reject
            button.
          </h4>
        </Col>
      </Col>
      <br />
      <br />
      <Col>
        <Col>
          <Row>
            <Col className={'d-flex justify-content-center'}>
              <Button
                variant='primary'
                size='lg'
                style={{ backgroundColor: '#046240', border: 'none' }}
                onClick={(e) => ActivateHandler(e)}
              >
                Activate
              </Button>
            </Col>
            <Col className={'d-flex justify-content-center'}>
              <Button
                variant='primary'
                size='lg'
                style={{ backgroundColor: '#046240', border: 'none' }}
                onClick={(e) => RejectHandler(e)}
              >
                Reject
              </Button>
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  );
}
