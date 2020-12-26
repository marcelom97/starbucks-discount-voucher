import React from 'react';
import { Row, Image } from 'react-bootstrap';

import Mocha from '../assets/mocha.png';

export default function LandingPage() {
  return (
    <>
      <Row className={'d-flex justify-content-center'}>
        <h1 className={'intro-text font-weight-bold pt-5'}>Starbucks Voucher Discount Application</h1>
      </Row>
      <Row className={'d-flex justify-content-between'}>
        <Image src={Mocha} width={'382px'} height={'682px'} />
        <div className={'d-flex align-items-end'}>
          <div className={'pb-5'} style={{ width: '270px' }}>
            <h1 className={'pb-5 intro-text'}>Enjoy your coffee the way you want it.</h1>
          </div>
        </div>
      </Row>
      <Row></Row>
    </>
  );
}
