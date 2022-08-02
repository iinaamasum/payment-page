import React from 'react';
import DeliveryMethod from './DeliveryMethod';
import PaymentMethod from './PaymentMethod';
import ShippingBottomBar from './ShippingBottomBar';
import ShippingInfo from './ShippingInfo';
import ShippingTopBar from './ShippingTopBar';

const ShippingContainerPage = () => {
  return (
    <div>
      <ShippingTopBar />
      <div className="flex items-center justify-center  gap-8">
        <ShippingInfo />
        <div className="flex flex-col">
          <PaymentMethod />
          <DeliveryMethod />
        </div>
      </div>
      <ShippingBottomBar />
    </div>
  );
};

export default ShippingContainerPage;
