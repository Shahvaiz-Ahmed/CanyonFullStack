import React, {  useContext } from "react";
// import axios from "axios";
import { UserContext  } from "../../../UserContext";

const CheckboxeListSub = () => {
  const { submaterialArray, setselectedSubmaterial} = useContext(UserContext);
  // const [brands, setBrands] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/ODataV4/Company(%27My%20Company%27)/itemattributee",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //         params: {
  //           $filter: "Name eq 'Material'",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setBrands(res.data.value[0].Values.split(","));
  //     })
  //     .catch((error) => {
  //       console.error("Error retrieving brands:", error);
  //     });
  // }, [accessToken]);

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

  return (
    <div style={{
      position: 'relative',
      top: 0,
      bottom: 0
    }} >
      {submaterialArray && Object.entries(submaterialArray).map(([index, brand]) => (
        <div key={index}>
          <input
            type="checkbox"
            value={brand}
            onChange={handleCheckboxChange}
          />
          <label>{brand}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxeListSub;

