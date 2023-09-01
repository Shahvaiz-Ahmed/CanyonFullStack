import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

const Color = () => {
  const {
    colorArray,
    setselectedcolor,
    shouldClearCheckboxes,
    checkboxStates,
    setCheckboxStates,
    color,setColor,
  } = useContext(UserContext);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);
    if (event.target.checked) {
      setColor((prevItems) => [...prevItems, itemId]);
    } else {
      setColor((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };

  useEffect(() => {
    if (shouldClearCheckboxes) {
      setselectedcolor([]); // Clear the selected checkboxes
    }
  }, [shouldClearCheckboxes]);

  const colorItems = [
    "Black",
    "Blue",
    "Brown",
    "Green",
    "White",
    "Red",
    "Yellow",
    "Orange",
    "Transluscent",
    "Transluscent yellow",
    "Transluscent amber",
    "Purple",
    "Tan",
    "Gray",
    "Off-White",
    "Transluscent Brown",
  ];

  return (
    <div>
      {colorItems.map((item, index) => (
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

export default Color;
