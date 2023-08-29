import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../../../../Downloads/Canyon_Full_Stack/canyoncomponents/src/UserContext.jsx";

const Color = () => {
  const { colorArray, setselectedcolor, shouldClearCheckboxes, checkboxStates, setCheckboxStates } = useContext(UserContext);


  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);
    if (event.target.checked) {
      setselectedcolor((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedcolor((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };
  useEffect(() => {
    if (shouldClearCheckboxes) {
      setselectedcolor([]); // Clear the selected checkboxes
    }
  }, [shouldClearCheckboxes]);

  return (
    <div>
      {colorArray && Object.entries(colorArray).map(([index, brand]) => (
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

export default Color;

