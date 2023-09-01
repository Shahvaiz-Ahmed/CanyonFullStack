import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";

const CheckboxeListSub = () => {
  const { submaterialArray, setselectedSubmaterial } = useContext(UserContext);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.value;
    if (event.target.checked) {
      setselectedSubmaterial((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedSubmaterial((prevItems) =>
        prevItems.filter((id) => id !== itemId)
      );
    }
  };

  const submaterialItems = [
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
    <div
      style={{
        position: "relative",
        top: 0,
        bottom: 0,
      }}
    >
      {submaterialItems.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={item}
            onChange={handleCheckboxChange}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxeListSub;
