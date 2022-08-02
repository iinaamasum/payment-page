import React from 'react';
import ShippingBottomBar from './ShippingBottomBar';
import ShippingInfo from './ShippingInfo';
import ShippingTopBar from './ShippingTopBar';

const ShippingContainerPage = () => {
  return (
    <div>
      <ShippingTopBar />
      <div className="">
        <ShippingInfo />
      </div>
      <ShippingBottomBar />
    </div>
  );
};

export default ShippingContainerPage;
