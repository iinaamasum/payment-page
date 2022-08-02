import React from 'react';

const SelectedItemsCard = ({ product }) => {
  const { img, id, name, type, price } = product;
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <div class="avatar">
            <div class="w-16 h-16 rounded-full">
              <img src={img} alt="items" />
            </div>
          </div>
          <div className="">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="font-medium text-sm">{type}</p>
            <p className="text-gray-400">{id}</p>
          </div>
        </div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SelectedItemsCard;
