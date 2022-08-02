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
      <div className="md:flex md:flex-row-reverse items-start justify-center gap-8">
        <div className="w-full md:w-[25%] md:mr-14">
          <ProductCart />
        </div>
        <div className="w-full md:w-[25%] flex flex-col gap-y-16 px-5 md:px-0 mt-5 md:mt-0">
          <PaymentMethod />
          <DeliveryMethod />
        </div>
        <div className="w-full md:w-[50%]">
          <ShippingInfo />
        </div>
      </div>
      <ShippingBottomBar />
    </div>
  );
};

export default ShippingContainerPage;
