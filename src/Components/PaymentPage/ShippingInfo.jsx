import React from 'react';
import Button from '../Shared/Button';

const ShippingInfo = () => {
  return (
    <section className="container mx-auto px-7 md:px-14 my-5">
      {/* login and sign up btn  */}
      <div className="flex gap-5">
        <Button outline={false}>Log In</Button>
        <Button outline={true}>Sign Up</Button>
      </div>
      {/* shipping information  */}
      <h3 className="mt-10 font-medium">Shipping Information</h3>
      <form>
        {/* email and address  */}
        <div className="md:flex items-center py-2 gap-3 mb-2 mt-1">
          <input
            type="text"
            placeholder="Email"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Address"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
        </div>

        {/* first and last name */}
        <div className="md:flex items-center py-2 gap-3 my-2">
          <input
            type="text"
            placeholder="First Name"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
        </div>

        {/* city and post code  */}
        <div className="md:flex items-center py-2 gap-3 my-2">
          <input
            type="text"
            placeholder="City"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Post Code"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
        </div>

        {/* phone and location  */}
        <div className="md:flex items-center py-2 gap-3 my-2">
          <input
            type="Number"
            placeholder="Phone"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
          <select class="select w-full max-w-xs border-2 border-gray-300">
            <option selected>India</option>
            <option>Bangladesh</option>
            <option>America</option>
            <option>Poland</option>
            <option>England</option>
            <option>Canada</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default ShippingInfo;
