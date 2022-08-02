import React from 'react';

const DeliveryMethod = () => {
  return (
    <section>
      <h4 className="font-medium">Delivery Method</h4>
      <div className="grid grid-cols-2 gap-2">
        <button className="btn btn-outline btn-success font-semibold tracking-wide px-6 rounded-2xl">
          InPost - $12.00
        </button>
        <button className="btn btn-outline btn-success font-semibold tracking-wide px-6 rounded-2xl">
          COD - $14.00
        </button>

        <button className="btn btn-outline btn-success font-semibold tracking-wide px-6 rounded-2xl">
          FedEx - $13.00
        </button>
        <button className="btn btn-outline btn-success font-semibold tracking-wide px-6 rounded-2xl">
          DHL - $11.00
        </button>
      </div>
    </section>
  );
};

export default DeliveryMethod;
