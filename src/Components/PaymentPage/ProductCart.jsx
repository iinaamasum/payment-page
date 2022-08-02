import React from 'react';
import { MdOutlineLocalShipping } from 'react-icons/md';
import tShirt1 from '../../Assets/images/tShirt-1.jpg';
import tShirt2 from '../../Assets/images/tshirt-2.jpg';
import SelectedItemsCard from './SelectedItemsCard';

const ProductCart = () => {
  const cartProduct = [
    {
      id: 261311,
      name: 'T-Shirt',
      type: 'Summer Vibes',
      price: 89.99,
      img: `${tShirt1}`,
    },
    {
      id: 212315,
      name: 'Basic Slim',
      type: 'Fit T-Shirt',
      price: 69.99,
      img: `${tShirt2}`,
    },
  ];
  return (
    <section>
      <h3 className="font medium mb-3">Your Cart</h3>
      <div className="">
        {cartProduct.map((product) => (
          <SelectedItemsCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-4 font-medium">
        <button className="rounded-full w-[80%] bg-[#dddeee] px-5 py-3">
          Total Cost - $159.38
        </button>
      </div>
      <div className="flex items-center gap-5 w-[50%] mx-auto mt-10">
        <MdOutlineLocalShipping />
        <div className="text-gray-500">
          <p>You are 32.4km away</p>
          <p>from free shipping</p>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
