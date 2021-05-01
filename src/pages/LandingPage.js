import React from 'react';
import { useHistory } from 'react-router-dom';

import Mocha from '../assets/mocha.png';
import Machiatto from '../assets/machiatto.png';

export default function LandingPage() {
  const history = useHistory();

  return (
    <div className='font-semibold text-3xl'>
      <div className='flex justify-center'>
        <div className='pt-5'>Starbucks Voucher Discount Application</div>
      </div>
      <div className='flex justify-between'>
        <img src={Mocha} alt='mocha' width='382px' height='682px' />
        <div className='flex items-end'>
          <div>
            <div className=''>Enjoy your coffee the way you want it.</div>
          </div>
        </div>
      </div>
      <div className='flex flex-row-reverse'>
        <div className='w-2/6'> Apply for a discount voucher and enjoy more coffee with fewer cost.</div>
      </div>
      <div className='flex justify-between'>
        <div>
          <div className='w-3/6'>
            Create an account and apply with your unemployment card to redeem 20% discount on every product.
          </div>
          
          <div className='flex justify-center'>
            <button
              className='rounded-md bg-green-700 text-white p-2 hover:bg-green-600'
              onClick={() => history.push('/apply')}
            >
              Apply Now
            </button>
          </div>
        </div>
        <img src={Machiatto} alt='machiatto' width='657px' height='875px' />
      </div>
    </div>
  );
}
