import React, { useState } from 'react';
import Button from '../Shared/Button';

const ShippingInfo = () => {
  const [location, setLocation] = useState('India');
  const [logInData, setLogInData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      address: e.target.address.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      city: e.target.city.value,
      post_code: e.target.post_code.value,
      phone: e.target.phone_number.value,
      country: location,
    };

    setLogInData(data);
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <section className="container mx-auto px-7 md:pl-14 my-10 md:my-5">
      {/* login and sign up btn  */}
      <form onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <input
            type="submit"
            value="Log In"
            className="btn btn-success font-semibold tracking-wide px-6"
          />
          <Button outline={true}>Sign Up</Button>
        </div>
        {/* shipping information  */}
        <h3 className="mt-10 font-medium">Shipping Information</h3>

        {/* email and address  */}
        <div className="md:flex items-center py-2 gap-3 mb-2 mt-1">
          <input
            type="text"
            name="email"
            placeholder="Email"
            class="input w-full max-w-xs border-2 border-gray-300 mb-5 md:mb-0"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
        </div>

        {/* first and last name */}
        <div className="md:flex items-center py-2 gap-3 my-2">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            class="input w-full max-w-xs border-2 border-gray-300 mb-5 md:mb-0"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
        </div>

        {/* city and post code  */}
        <div className="md:flex items-center py-2 gap-3 my-2">
          <input
            type="text"
            name="city"
            placeholder="City"
            class="input w-full max-w-xs border-2 border-gray-300 mb-5 md:mb-0"
          />
          <input
            type="text"
            name="post_code"
            placeholder="Post Code"
            class="input w-full max-w-xs border-2 border-gray-300"
          />
        </div>

        {/* phone and location  */}
        <div className="md:flex items-center py-2 gap-3 my-2">
          <input
            type="test"
            name="phone_number"
            placeholder="Phone"
            class="input w-full max-w-xs border-2 border-gray-300 mb-5 md:mb-0"
          />
          <select
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            class="select w-full max-w-xs border-2 border-gray-300"
          >
            <option value="India" selected>
              India
            </option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="America">America</option>
            <option value="Poland">Poland</option>
            <option value="England">England</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default ShippingInfo;
