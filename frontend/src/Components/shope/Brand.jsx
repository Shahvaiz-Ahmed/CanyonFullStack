import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

const Brand = () => {
  const {
    brandArray,
    setselectedbrand,
    shouldClearCheckboxes,
    checkboxStates,
    setCheckboxStates,
  } = useContext(UserContext);

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

  const brandItems = [
    "Canyon Components",
    "CanRez™ (Canyon Components)",
    "Chemraz® (Greene Tweed)",
    "Kalrez® (Dupont)",
    "Parker Seal® (Parker)",
    "Parofluor® (Parker)",
    "Simriz® (Freudenberg)",
  ];

  return (
    <div>
      {brandItems.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={item}
            onChange={handleCheckboxChange}
            checked={checkboxStates[item] || false}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default Brand;
