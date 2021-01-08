import React from 'react';
import { Row, Image, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Mocha from '../assets/mocha.png';
import Machiatto from '../assets/machiatto.png';

export default function LandingPage() {
  const history = useHistory();

  return (
    <>
      <Row className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>Starbucks Voucher Discount Application</h1>
      </Row>
      <Row className={'d-flex justify-content-between'}>
        <Image src={Mocha} width={'382px'} height={'682px'} />
        <div className={'d-flex align-items-end'}>
          <div className={'pb-5'} style={{ width: '390px' }}>
            <h1 className={'pb-5 intro-text'}>Enjoy your coffee the way you want it.</h1>
          </div>
        </div>
      </Row>
      <Row className={'d-flex flex-row-reverse'}>
        <div className={'pb-5'} style={{ width: '390px' }}>
          <h1 className={'pb-5 intro-text'}> Apply for a discount voucher and enjoy more coffee with fewer cost.</h1>
        </div>
      </Row>
      <Row className={'d-flex justify-content-between'}>
        <div style={{ width: '470px' }}>
          <h1 className={'intro-text'}>
            Create an account and apply with your unemployment card to redeem 20% discount on every product.
          </h1>
          <br />
          <div className='d-flex flex-row-reverse'>
            <Button
              variant='primary'
              size='lg'
              style={{ backgroundColor: '#046240', border: 'none' }}
              onClick={() => history.push('/apply')}
            >
              Apply Now
            </Button>
          </div>
        </div>
        <Image src={Machiatto} width={'657px'} height={'875px'} />
      </Row>
    </>
  );
}
