import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";
import "./css/shopright.css";
import CustomPaginationActionsTable from "./ItemDetails";
import { useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import ColorToggleButton from "./ColorToggleButton";
import TemperatureToogle from "./TemperatureToogle";
import ItemsData from "./ItemsData";
const ShopRight = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  const {
    isdraweropen,
    setisdraweropen,
    filteredCount,
    isFlipped,
    setIsFlipped,
    isChanged,
    setIsChanged,
  } = useContext(UserContext);
  const [search, setsearch] = useState(false);
  const [unit, setunit] = useState();

  const handledrawer = () => {
    setisdraweropen(() => {
      return isdraweropen(true);
    });
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleChange = () => {
    setIsChanged(!isChanged);
  };

  const { setnumberofrecords } = useContext(UserContext);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "76.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "large",
            }}
          >
            {filteredCount ? filteredCount : "0"} Results
          </h2>

          <div
            className="toggles"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <span>Temperature: </span>

              <TemperatureToogle />
            </div>
            <span></span>
            <div>
              <span> Size: </span>

              <ColorToggleButton />
            </div>
          </div>
        </div>
        <div>
          {/* <CustomPaginationActionsTable /> */}
          <ItemsData/>
        </div>
      </div>
    </>
  );
};

export default ShopRight;
