import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';

const ShippingBottomBar = () => {
  return (
    <section className="container mx-auto px-7 md:px-14">
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <HiOutlineArrowNarrowLeft className="mr-5" /> Back
        </Link>

        <div className="flex items-center gap-4">
          <Button outline={true}>Continue Shopping</Button>
          <Button outline={false}>Proceed Payment</Button>
        </div>
      </div>
    </section>
  );
};

export default ShippingBottomBar;
