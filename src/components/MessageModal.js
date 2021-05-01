import React from 'react';
import { Dialog } from '@headlessui/react';

export default function MessageModal({ show, setShow, message }) {
  return (
    <Dialog open={show} onClose={() => setShow(false)}>
      <Dialog.Overlay />

      <Dialog.Title>Warning</Dialog.Title>
      <Dialog.Description></Dialog.Description>

      <p>{message}</p>

      <button onClick={() => setShow(false)}>Deactivate</button>
      <button onClick={() => setShow(false)}>Cancel</button>
    </Dialog>
  );
}
