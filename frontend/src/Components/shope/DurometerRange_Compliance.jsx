import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../../../../Downloads/Canyon_Full_Stack/canyoncomponents/src/UserContext.jsx";

const DurometerRange_Compliance = () => {
  const { hardArray, setselectedhardness, shouldClearCheckboxes, checkboxStates, setCheckboxStates } =
    useContext(UserContext);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);
    if (event.target.checked) {
      setselectedhardness((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedhardness((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };

  useEffect(() => {
    if (shouldClearCheckboxes) {
      setselectedhardness([]); // Clear the selected checkboxes
    }
  }, [shouldClearCheckboxes]);

  return (
    <div>
      {hardArray &&
        Object.entries(hardArray).map(([index, brand]) => (
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

export default DurometerRange_Compliance;
