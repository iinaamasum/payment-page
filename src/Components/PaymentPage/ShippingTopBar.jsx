import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineLocalShipping } from 'react-icons/md';

const ShippingTopBar = () => {
  return (
    <section className="my-5 container mx-auto px-7 md:px-14">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-gray-600">
          Shipping and Payment
        </h4>
        <div className="flex items-center">
          <div className="border-2 rounded-full w-6 h-6 inline-flex items-center justify-center">
            <AiOutlineShoppingCart />
          </div>
          <div className="border-b-2 w-16 mx-1 border-gray-300"></div>
          <div className="bg-green-400 rounded-full w-6 h-6 inline-flex items-center justify-center">
            <MdOutlineLocalShipping color="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingTopBar;
