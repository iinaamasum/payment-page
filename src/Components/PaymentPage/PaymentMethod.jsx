import React from 'react';
import card from '../../Assets/logo/card.png';
import discover from '../../Assets/logo/discover.png';
import master from '../../Assets/logo/master_card.png';
import paypal from '../../Assets/logo/paypal.png';
import visa from '../../Assets/logo/Visa_Logo.png';
import vp from '../../Assets/logo/vp_card.png';
import Button from '../Shared/Button';

const PaymentMethod = () => {
  return (
    <section>
      <h4 className="font-medium">Payment Method</h4>
      <div className="flex gap-1">
        <Button outline={true}>
          <img className="w-32 h-7 object-contain" src={paypal} alt="" />
        </Button>
        <Button outline={true}>
          <img className="w-32 h-7 object-contain" src={visa} alt="" />
        </Button>
        <Button outline={true}>
          <img className="w-32 h-7 object-contain" src={master} alt="" />
        </Button>
      </div>
      <div className="flex gap-1 mt-2">
        <Button outline={true}>
          <img className="w-32 h-7 object-contain" src={discover} alt="" />
        </Button>
        <Button outline={true}>
          <img className="w-32 h-7" src={vp} alt="" />
        </Button>
        <Button outline={true}>
          <img className="w-32 h-7 object-contain" src={card} alt="" />
        </Button>
      </div>
    </section>
  );
};

export default PaymentMethod;
