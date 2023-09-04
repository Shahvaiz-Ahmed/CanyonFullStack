import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

const Brand = () => {
  const {
    brandArray,
    setselectedbrand,
    shouldClearCheckboxes,
    checkboxStates,
    setCheckboxStates,
    url,setUrl,page_size
  } = useContext(UserContext);

  const handleCheckboxChange = (event) => {
    if(event.target.checked){ 
      setUrl(url+`&Brand=${e.target.value}`)
      }
      else if(!event.target.checked){
        setUrl( `http://127.0.0.1:8000/api/products/?limit=${page_size}`)
      }
    const itemId = event.target.value;
    const newCheckboxStates = { ...checkboxStates };
    newCheckboxStates[itemId] = event.target.checked;
    setCheckboxStates(newCheckboxStates);

    if (event.target.checked) {
      setselectedbrand((prevItems) => [...prevItems, itemId]);
    } else {
      setselectedbrand((prevItems) => prevItems.filter((id) => id !== itemId));
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
    <div
      style={{
        position: "relative",
        top: 0,
        bottom: 0,
        fontSize: "12px",
        width: "70%",
      }}
    >
      {brandItems.map((item, index) => (
        <div key={index} style={{ display: "flex",alignItems:"flex-start" }}>
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
