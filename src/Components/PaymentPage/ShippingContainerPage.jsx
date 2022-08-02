import React from 'react';
import DeliveryMethod from './DeliveryMethod';
import PaymentMethod from './PaymentMethod';
import ProductCart from './ProductCart';
import ShippingBottomBar from './ShippingBottomBar';
import ShippingInfo from './ShippingInfo';
import ShippingTopBar from './ShippingTopBar';

const ShippingContainerPage = () => {
  return (
    <div>
      <ShippingTopBar />
      <div className="flex items-start justify-center  gap-8">
        <div className="w-[50%]">
          <ShippingInfo />
        </div>
        <div className="w-[25%] flex flex-col gap-y-16">
          <PaymentMethod />
          <DeliveryMethod />
        </div>
        <div className="w-[25%]">
          <ProductCart />
        </div>
      </div>
      <ShippingBottomBar />
    </div>
  );
};

export default ShippingContainerPage;
