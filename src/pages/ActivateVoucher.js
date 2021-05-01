import React from 'react';
import { Dialog } from '@headlessui/react';

import axios from '../utils/axios';

export default function ActivateVoucher() {
  const [voucherId, setVoucherId] = React.useState('');
  const [validated, setValidated] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    if (voucherId.length >= 16) {
      try {
        const response = await axios.post(`/api/v1/voucher/${voucherId}`);
        const data = await response.data;
        if (response.status === 200) {
          console.log(data.path);
          await window.open(data.path);
        }
        if (response.status === 404) {
          setMessage(data.message);
          handleShow();
        }
      } catch (error) {
        console.log(error.response);
        if (error.response.status === 404) {
          setMessage('There was an error on generating your Voucher, Please try later.');
          handleShow();
        }
      }
    } else {
      setMessage('Voucher ID must be at least 16 characters');
      handleShow();
    }

    setValidated(true);
  }

  return (
    <div>
      <div>
        <div className='flex justify-center'>
          <h1 className='font-semibold text-2xl pt-20'>Enter your Voucher ID to activate your voucher.</h1>
        </div>
        <form>
          <div className='flex justify-center'>
            <div className='flex flex-col space-y-2'>
              <label className='font-semibold'>Voucher ID</label>
              <input
                className='rounded-md border border-green-800 focus:border-green-900 w-96 p-2 text-black'
                required
                type='text'
                placeholder='Voucher ID'
                onChange={(e) => setVoucherId(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className='flex justify-center'>
              <button
                className='rounded-md bg-green-700 text-white p-2 hover:bg-green-600'
                type='submit'
                onClick={() => {
                  setShow(true);
                }}
              >
                Activate
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
