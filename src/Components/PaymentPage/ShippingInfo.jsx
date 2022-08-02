import React from 'react';
import Button from '../Shared/Button';

const ShippingInfo = () => {
  return (
    <section className="container mx-auto px-7 md:px-14">
      {/* login and sign up btn  */}
      <div className="flex gap-5">
        <Button outline={false}>Log In</Button>
        <Button outline={true}>Sign Up</Button>
      </div>
    </section>
  );
};

export default ShippingInfo;
