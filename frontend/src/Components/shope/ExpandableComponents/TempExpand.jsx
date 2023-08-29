import React, { useState } from "react";
import SliderComponent from "../SliderComponent.jsx";
const TempExpand = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      
      
        <div>
          {" "}
          <SliderComponent />
        </div>
     
    </div>
  );
};

export default TempExpand;
