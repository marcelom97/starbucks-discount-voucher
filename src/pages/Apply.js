import React, { useState } from 'react';
import axios from '../utils/axios';

export default function Apply() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [fathersname, setFathersname] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [adt, setAdt] = useState(null);
  const [afm, setAfm] = useState(null);
  const [amka, setAmka] = useState(null);
  const [unemploymentNumber, setUnemploymentNumber] = useState(null);
  const [unemploymentDuaDate, setUnemploymentDuaDate] = useState(null);

  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(event) {
    const form = event.currentTarget;

    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log('Validation');
    }
    if (birthdate > '1984-12-31') {
      try {
        const response = await axios.post('/api/v1/unemployed', {
          firstname,
          lastname,
          birthdate,
          adt,
          fathersname,
          afm,
          amka,
          unemploymentNumber,
          unemploymentDuaDate,
        });
        console.log(response.data);
        if (response.status === 201) {
          setMessage(response.data.message);
          handleShow();
        }
      } catch (error) {
        console.log(error.response);
        if (error.response.status === 400) {
          console.log(typeof error.response.data.error.split(','));
          console.log(error.response.data.error.split(','));
          setMessage(error.response.data.error.split(','));
          handleShow();
        } else {
          setMessage('There was an error on creating your application');
          handleShow();
        }
      }
    } else {
      setMessage('Your age must be at least 1985-01-01');
      handleShow();
    }

    setValidated(true);
  }

  return (
    <div className='flex justify-center'>
      {/* <Modal show={show} onHide={handleClose} size={'lg'}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            {typeof message === 'object'
              ? message.map((el) => {
                  return <p>{el}</p>;
                })
              : message}
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
      <div className='flex flex-col'>
        <div className='flex flex-col align-center text-center pt-5'>
          <h1 className='font-semibold'>Unemployment Discount Application</h1>
          <p>
            Υποψήφιοι δικαιούχοι ενός κουπονιού είναι άτομα που έχουν γεννηθεί μετά την 31η /12/1984 (κριτήριο ηλικίας)
            και έχουν ενεργή εγγραφή στο μητρώο πελατών της εταιρείας κατά την υποβολή της αίτησης. Κάθε κουπόνι
            αντιστοιχεί σε μία οικονομική αξία και ο δικαιούχος της μπορεί να την εξαργυρώσει σε καταστήματα της
            εταιρείας ανά τον κόσμο.
          </p>
        </div>
        <form onSubmit={handleSubmit} className='flex justify-center pt-20'>
          <div>
            <div className='flex space-x-8'>
              <div className='flex flex-col'>
                <label>First Name</label>
                <input
                  className='rounded-md border border-green-800 focus:border-green-900 w-44 p-2 text-black'
                  required
                  type='text'
                  placeholder='First Name'
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label>Last Name</label>
                <input
                  className='rounded-md border border-green-800 focus:border-green-900 w-44 p-2 text-black'
                  required
                  type='text'
                  placeholder='Last Name'
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className='flex space-x-8'>
              <div className='flex flex-col'>
                <label>Father's Name</label>
                <input
                  className='rounded-md border border-green-800 focus:border-green-900 w-44 p-2 text-black'
                  required
                  type='text'
                  placeholder="Father's Name"
                  onChange={(e) => setFathersname(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label>Birth Date</label>
                <input
                  className='rounded-md border border-green-800 focus:border-green-900 w-44 p-2 text-black'
                  required
                  type='date'
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label>Identity Card Number</label>
              <input
                className='rounded-md border border-green-800 focus:border-green-900 w-96 p-2 text-black'
                required
                type='text'
                placeholder='Identity Card Number'
                onChange={(e) => setAdt(e.target.value)}
              />
            </div>
            <div className='flex space-x-8'>
              <div className='flex flex-col'>
                <label>AFM</label>
                <input
                  className='rounded-md border border-green-800 focus:border-green-900 w-44 p-2 text-black'
                  required
                  type='number'
                  placeholder='AFM'
                  onChange={(e) => setAfm(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label>AMKA</label>
                <input
                  className='rounded-md border border-green-800 focus:border-green-900 w-44 p-2 text-black'
                  required
                  type='number'
                  placeholder='AMKA'
                  onChange={(e) => setAmka(e.target.value)}
                />
              </div>
            </div>
            <div class='flex space-x-8'>
              <div className='flex flex-col'>
                <label>Unemployment Number</label>
                <input
                  className='rounded-md border border-green-800 focus:border-green-900 w-44 p-2 text-black'
                  required
                  type='text'
                  placeholder='Unemployment Number'
                  onChange={(e) => setUnemploymentNumber(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label>Due Date</label>
                <input
                  className='rounded-md border border-green-800 focus:border-green-900 w-44 p-2 text-black'
                  required
                  type='date'
                  onChange={(e) => setUnemploymentDuaDate(e.target.value)}
                />
              </div>
            </div>
            <div className='flex justify-center pt-10'>
              <button className='rounded-md bg-green-700 text-white p-2 hover:bg-green-600' type='submit'>
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
