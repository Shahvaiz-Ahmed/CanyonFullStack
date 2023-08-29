import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../../Downloads/Canyon_Full_Stack/canyoncomponents/src/UserContext.jsx";

const Brand = () => {
  const { brandArray, setselectedbrand, shouldClearCheckboxes, checkboxStates, setCheckboxStates } = useContext(UserContext);
  

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;

    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);

    if (event.target.checked) {
      setselectedbrand((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedbrand((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };

  useEffect(() => {
    if (shouldClearCheckboxes) {
      setselectedbrand([]); // Clear the selected checkboxes
      setCheckboxStates({}); // Clear checkbox states
    }
  }, [shouldClearCheckboxes]);

  return (
    <div>
      {brandArray &&
        Object.entries(brandArray).map(([index, brand]) => (
          <div key={index}>
            <input
              type="checkbox"
              value={brand}
              onChange={handleCheckboxChange}
              checked={checkboxStates[brand] || false}
            />
            <label>{brand}</label>
          </div>
        ))}
    </div>
  );
};

export default Brand;
