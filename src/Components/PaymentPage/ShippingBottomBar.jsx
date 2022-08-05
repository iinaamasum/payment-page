import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';

const ShippingBottomBar = () => {
  return (
    <section className="container mx-auto px-4 md:px-14">
      <div className="sm:flex items-center justify-between text-center mb-5">
        <Link to="/" className="inline-flex items-center mb-5 sm:mb-0">
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
