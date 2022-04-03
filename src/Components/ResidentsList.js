import React from "react";

function ResidentsList({ cart }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {cart.map((item, index) => (
          <li key={index} className="slide-up-fade-in">
            {capitalizeFirstLetter(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResidentsList;
