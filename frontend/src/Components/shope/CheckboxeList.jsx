import React, { useContext, useState } from "react";
import { UserContext } from "../../../../../../Downloads/Canyon_Full_Stack/canyoncomponents/src/UserContext.jsx";

const CheckboxeList = () => {
  const {
    baseMaterialTypeArray,
    selectedmaterial,
    setselectedmaterial,
    checkboxStates,
    setCheckboxStates,
  } = useContext(UserContext);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);

    if (event.target.checked) {
      setselectedmaterial((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedmaterial((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };

  return (
    <div
      style={{
        position: "relative",
        top: 0,
        bottom: 0,
      }}
    >
      {baseMaterialTypeArray &&
        Object.entries(baseMaterialTypeArray).map(([index, brand]) => (
          <div key={index}>
            <input
              type="checkbox"
              value={brand}
              onClick={handleCheckboxChange}
              checked={checkboxStates[brand] || false}
            />
            <label>{brand}</label>
          </div>
        ))}
    </div>
  );
};

export default CheckboxeList;
