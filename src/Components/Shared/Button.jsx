import React from 'react';

const Button = ({ children, outline }) => {
  // const { outline } = props;
  return (
    <div>
      <div
        className={`btn ${
          outline ? 'btn-outline' : ''
        } btn-success font-semibold tracking-wide px-6`}
      >
        {children}
      </div>
    </div>
  );
};

export default Button;
