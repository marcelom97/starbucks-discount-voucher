import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../assets/logo.png';

export default function NavBar() {
  return (
    <nav className='flex justify-around items-center font-semibold text-green-700 hover:no-underline text-xl'>
      <div className='flex justify-around w-full'>
        <Link to='/' className='hover:text-green-600'>
          <h4>Home</h4>
        </Link>
        <Link to='/activatevoucher' className='hover:text-green-600'>
          <h4>Voucher</h4>
        </Link>
      </div>
      <div>
        <Link to='/'>
          <img src={Img} alt='logo' width='256' height='256' />
        </Link>
      </div>
      <div className='flex justify-around w-full'>
        <Link to='/voucherresults' className='hover:text-green-600'>
          <h4>Results</h4>
        </Link>
        <Link to='/apply' className='hover:text-green-600'>
          <h4>Apply</h4>
        </Link>
      </div>
    </nav>
  );
}
