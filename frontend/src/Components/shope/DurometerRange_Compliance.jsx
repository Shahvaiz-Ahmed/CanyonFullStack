import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

const DurometerRange_Compliance = () => {
  const {
    hardArray,
    setselectedhardness,
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

  const hardnessItems = [
    "Spring Steel",
    "10 - 29 (Softest)",
    "30 - 50 (Very Soft)",
    "51 - 65 (Soft)",
    "66 - 75 (Medium)",
    "76 - 85 (Hard)",
    "86 - 95 (Very Hard)",
    "Over 96 (Hardest)",
  ];

  return (
    <div>
      {hardnessItems.map((item, index) => (
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

export default DurometerRange_Compliance;
