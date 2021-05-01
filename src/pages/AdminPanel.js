import React from 'react';
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
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{message}</h4>
        </Modal.Body>
        <Modal.Footer>
          <button variant='danger' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal> */}

      <div className={'flex justify-center'}>
        <div>
          <div>
            To Activate the Voucher Points System Calculation click the Activate button and to Reject click the Reject
            button.
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div className={'flex justify-center'}>
              <button onClick={(e) => ActivateHandler(e)}>Activate</button>
            </div>
            <div className={'flex justify-center'}>
              <button onClick={(e) => RejectHandler(e)}>Reject</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
