import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { UserContext } from "../src/UserContext";

import Index from "./Components/Index";
//
//
//
// import RequestQuote from "./Components/REquestQutoe/RequestQuote";
//
//
//
// import SignIn from "./Components/Signin/signin";
//
//
//
// import Signup from "./Components/Signup/Signup";
//
//
//
// import Checkout from "./Components/CheckoutComponent/Checkout";
//
//
//
// import ProductComponent from "./Components/ProductOverview/ProductComponent.jsx";
//
//
//
// import CartPopup from "./Components/CartPage/CartPopup";



import { Toaster } from "react-hot-toast";



import axios from "axios";
// import OrderHistory from "./Components/OrderHistory/OrderHistory";
//
// import CenteredIcon from "./Components/CenteredIcon/CenteredIcon";

function App() {
  // const [size1, setsize1] = useState();
  //
  // const [cs1, setcs1] = useState();
  //
  // const [id1, setid1] = useState();
  //
  // const [Orderable, setOrderable] = useState(false);
  //
  //
  //
  // const [TotalOrderPrice, setTotalOrderPrice] = useState(0);
  //
  //
  //
  // const [sideMenuBar, setsideMenuBar] = useState(false);
  //
  //
  //
  // const [cartArray, setcartArray] = useState([]);
  //
  //
  //
  // const [price, setPrice] = useState([]);
  //
  //
  //
  // const [sideMenuBarDropDown, setsideMenuBarDropDown] = useState(false);
  //
  //
  //
  // const [sideMenuBarDropDownIndex, setsideMenuBarDropDownIndex] =
  //
  //   useState(false);
  //
  //
  //
  // const [size, setsize] = useState(0);
  //
  //
  //
  // const [cs, setCs] = useState(0);
  //
  //
  //
  // const [id, setid] = useState(0);
  //
  //
  //
  // const [search, setsearch] = useState("");
  //
  //
  //
  // const [selectedhardness, setselectedhardness] = useState([]);
  //
  //
  //
  // // API DATA BELOW
  //
  //
  //
  // const [material, setmaterial] = useState(null);
  //
  //
  //
  // const [SubMaterial, setSubMaterial] = useState(null);
  //
  //
  //
  // const [Color, setColor] = useState(null);
  //
  //
  //
  // const [DurometerRange_Compliance, setDurometerRange_Compliance] =
  //
  //   useState(null);
  //
  //
  //
  // const [Brand, setBrand] = useState(null);
  //
  //
  //
  // const [cartlocalArray, setlocalcartArray] = useState(
  //
  //   () => JSON.parse(localStorage.getItem("cart")) || []
  //
  // );
  //
  //
  //
  // const [cartCountBtn, setcartCountBtn] = useState(
  //
  //   Math.max(cartlocalArray.length, 0)
  //
  // );
  //
  //
  //
  // const [qntyinput, setqntyinput] = useState(0);
  //
  //
  //
  // const [qnty, setqnty] = useState();
  //
  //
  //
  // const [baseMaterialTypeArray, setbaseMaterialTypeArray] = useState([]);
  //
  //
  //
  // const [hardArray, sethardArray] = useState([]);
  //
  //
  //
  // const [colorArray, setcolorArray] = useState([]);
  //
  //
  //
  // const [brandArray, setbrandArray] = useState([]);
  //
  //
  //
  // const [submaterialArray, setsubmaterialArray] = useState([]);
  //
  //
  //
  // // const [Compliance, setCompliance] = useState(null)
  //
  //
  //
  // const [isCartopen, setisCartopen] = useState(false);
  //
  //
  //
  // // ITEM DETAILS API
  //
  //
  //
  // const [accessToken, setaccessToken] = useState();
  //
  //
  //
  // useEffect(() => {
  //
  //   axios
  //
  //     .get("https://canyoncomponents.vercel.app/api/data")
  //
  //
  //
  //     .then((res) => {
  //
  //       let a = JSON.parse(res.data);
  //
  //
  //
  //       setaccessToken(a.access_token);
  //
  //     })
  //
  //
  //
  //     .catch((error) => {
  //
  //       console.error(error);
  //
  //     });
  //
  // }, []);
  //
  //
  //
  // // const [material, setmaterial] = useState()
  //
  //
  //
  // const [item, setitem] = useState([]);
  //
  //
  //
  // const [numberofcecords, setnumberofcecords] = useState();
  //
  //
  //
  // const fetchData = (url) => {
  //
  //   axios
  //
  //     .get(url, {
  //
  //       headers: {
  //
  //         Authorization: `Bearer ${accessToken}`,
  //
  //       },
  //
  //     })
  //
  //     .then((res) => {
  //
  //       // console.log(res.data.value);
  //
  //
  //
  //       const items = res.data.value;
  //
  //
  //
  //       // ... rest of your code
  //
  //       let previousItemNo = null;
  //
  //
  //
  //       let productArray = [];
  //
  //
  //
  //       let baseMaterialTypeArray = [];
  //
  //
  //
  //       let hardArray = [];
  //
  //
  //
  //       let colorArray = [];
  //
  //
  //
  //       let brandArray = [];
  //
  //
  //
  //       let submaterial = [];
  //
  //
  //
  //       let currentProduct = null;
  //
  //
  //
  //       items?.forEach((item) => {
  //
  //         const isSameProduct = item.ItemNo === previousItemNo;
  //
  //
  //
  //         previousItemNo = item.ItemNo;
  //
  //
  //
  //         if (!isSameProduct) {
  //
  //           if (
  //
  //             currentProduct !== null &&
  //
  //             currentProduct.Online === "Online" &&
  //
  //             currentProduct.hasOwnProperty("Blocked") && // Check if the "Blocked" attribute exists
  //
  //             currentProduct.Blocked === false // Check if the "Blocked" attribute's value is false
  //
  //           ) {
  //
  //             productArray.push(currentProduct);
  //
  //           }
  //
  //
  //
  //           currentProduct = {
  //
  //             ItemNo: item.ItemNo,
  //
  //
  //
  //             qnty: item.Quantity,
  //
  //
  //
  //             price: item.UnitCost,
  //
  //
  //
  //             Description: item.Description,
  //
  //
  //
  //             Description2: item.Description2,
  //
  //
  //
  //             SearchDescription: item.SearchDescription,
  //
  //
  //
  //             LotSize: item.LotSize,
  //
  //
  //
  //             Blocked: item.Blocked,
  //
  //           };
  //
  //         }
  //
  //
  //
  //         const compoundNumberKey =
  //
  //           item.AttributeName.replace(/\s/g, "").replace(/[^\w\s]/gi, "") ||
  //
  //           "CompoundNumber";
  //
  //
  //
  //         currentProduct[compoundNumberKey] = item.AttributeValue;
  //
  //       });
  //
  //
  //
  //       if (currentProduct !== null && currentProduct.Online === "Online") {
  //
  //         productArray.push(currentProduct);
  //
  //       }
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "Material") {
  //
  //             const reqSize = baseMaterialTypeArray.find(
  //
  //               (item) => item === id[key]
  //
  //             );
  //
  //
  //
  //             if (!reqSize) {
  //
  //               baseMaterialTypeArray.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "DurometerRange") {
  //
  //             const reqSize = hardArray.find((item) => item === id[key]);
  //
  //
  //
  //             if (!reqSize) {
  //
  //               hardArray.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "Color") {
  //
  //             const reqSize = colorArray.find((item) => item === id[key]);
  //
  //
  //
  //             if (!reqSize) {
  //
  //               colorArray.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "Brand") {
  //
  //             const reqSize = brandArray.find((item) => item === id[key]);
  //
  //
  //
  //             if (!reqSize) {
  //
  //               brandArray.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "MaterialNotes") {
  //
  //             const reqSize = submaterial.find((item) => item === id[key]);
  //
  //
  //
  //             if (!reqSize) {
  //
  //               submaterial.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       setitem((prevItems) => [
  //
  //         ...prevItems,
  //
  //         ...productArray.filter((item) => !prevItems.includes(item)),
  //
  //       ]);
  //
  //
  //
  //       setbaseMaterialTypeArray((prevItems) => [
  //
  //         ...prevItems,
  //
  //         ...baseMaterialTypeArray.filter((item) => !prevItems.includes(item)),
  //
  //       ]);
  //
  //
  //
  //       sethardArray((prevItems) => [
  //
  //         ...prevItems,
  //
  //         ...hardArray.filter((item) => !prevItems.includes(item)),
  //
  //       ]);
  //
  //
  //
  //       setcolorArray((prevItems) => [
  //
  //         ...prevItems,
  //
  //         ...colorArray.filter((item) => !prevItems.includes(item)),
  //
  //       ]);
  //
  //
  //
  //       setbrandArray((prevItems) => [
  //
  //         ...prevItems,
  //
  //         ...brandArray.filter((item) => !prevItems.includes(item)),
  //
  //       ]);
  //
  //
  //
  //       setsubmaterialArray((prevItems) => [
  //
  //         ...prevItems,
  //
  //         ...submaterial.filter((item) => !prevItems.includes(item)),
  //
  //       ]);
  //
  //
  //
  //       // console.log(productArray);
  //
  //
  //
  //       // console.log(typeof hardArray);
  //
  //
  //
  //       // console.log(
  //
  //       //   baseMaterialTypeArray,
  //
  //
  //
  //       //   hardArray,
  //
  //
  //
  //       //   colorArray,
  //
  //
  //
  //       //   brandArray,
  //
  //
  //
  //       //   submaterial
  //
  //       // );
  //
  //
  //
  //       // Check if there is a next link
  //
  //       if (res.data["@odata.nextLink"]) {
  //
  //         // If there is, call the function again with the new URL
  //
  //         fetchData(res.data["@odata.nextLink"]);
  //
  //       }
  //
  //     })
  //
  //     .catch((error) => {
  //
  //       // Handle any error that occurs during the API call
  //
  //       console.error(error);
  //
  //     });
  //
  // };
  //
  //
  //
  // useEffect(() => {
  //
  //   dataGet();
  //
  //
  //
  //   fetchData(
  //
  //     "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/SandboxNoExtentions/ODataV4/Company(%27My%20Company%27)/itemapi"
  //
  //   );
  //
  // }, [accessToken]);
  //
  //
  //
  // const dataGet = async () => {
  //
  //   axios
  //
  //     .get(
  //
  //       "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/SandboxNoExtentions/ODataV4/Company('My%20Company')/itemsaleprice",
  //
  //
  //
  //       {
  //
  //         headers: {
  //
  //           Authorization: `Bearer ${accessToken}`,
  //
  //         },
  //
  //       }
  //
  //     )
  //
  //     .then((response) => {
  //
  //       setPrice(response.data.value);
  //
  //       console.log("API Response:", response.data.value[0]);
  //
  //     })
  //
  //     .catch((error) => {
  //
  //       console.error("Error:", error);
  //
  //     });
  //
  // };
  //
  //
  //
  // useEffect(() => {
  //
  //   axios
  //
  //     .get(
  //
  //       "https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/SandboxNoExtentions/ODataV4/Company(%27My%20Company%27)/itemapi?$top=800",
  //
  //
  //
  //       {
  //
  //         headers: {
  //
  //           Authorization: `Bearer ${accessToken}`,
  //
  //         },
  //
  //       }
  //
  //     )
  //
  //
  //
  //     .then((res) => {
  //
  //       // console.log(res.data.value);
  //
  //
  //
  //       const items = res.data.value;
  //
  //
  //
  //       // ... rest of your code
  //
  //       let previousItemNo = null;
  //
  //
  //
  //       let productArray = [];
  //
  //
  //
  //       let baseMaterialTypeArray = [];
  //
  //
  //
  //       let hardArray = [];
  //
  //
  //
  //       let colorArray = [];
  //
  //
  //
  //       let brandArray = [];
  //
  //
  //
  //       let submaterial = [];
  //
  //
  //
  //       let currentProduct = null;
  //
  //
  //
  //       items?.forEach((item) => {
  //
  //         const isSameProduct = item.ItemNo === previousItemNo;
  //
  //
  //
  //         previousItemNo = item.ItemNo;
  //
  //
  //
  //         if (!isSameProduct) {
  //
  //           if (
  //
  //             currentProduct !== null &&
  //
  //             currentProduct.Online === "Online" &&
  //
  //             currentProduct.hasOwnProperty("Blocked") && // Check if the "Blocked" attribute exists
  //
  //             currentProduct.Blocked === false // Check if the "Blocked" attribute's value is false
  //
  //           ) {
  //
  //             productArray.push(currentProduct);
  //
  //           }
  //
  //
  //
  //           currentProduct = {
  //
  //             ItemNo: item.ItemNo,
  //
  //
  //
  //             qnty: item.Quantity,
  //
  //
  //
  //             price: item.UnitCost,
  //
  //
  //
  //             Description: item.Description,
  //
  //
  //
  //             Description2: item.Description2,
  //
  //
  //
  //             SearchDescription: item.SearchDescription,
  //
  //
  //
  //             LotSize: item.LotSize,
  //
  //
  //
  //             Blocked: item.Blocked,
  //
  //           };
  //
  //         }
  //
  //
  //
  //         const compoundNumberKey =
  //
  //           item.AttributeName.replace(/\s/g, "").replace(/[^\w\s]/gi, "") ||
  //
  //           "CompoundNumber";
  //
  //
  //
  //         currentProduct[compoundNumberKey] = item.AttributeValue;
  //
  //       });
  //
  //
  //
  //       if (currentProduct !== null && currentProduct.Online === "Online") {
  //
  //         productArray.push(currentProduct);
  //
  //       }
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "Material") {
  //
  //             const reqSize = baseMaterialTypeArray.find(
  //
  //               (item) => item === id[key]
  //
  //             );
  //
  //
  //
  //             if (!reqSize) {
  //
  //               baseMaterialTypeArray.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "DurometerRange") {
  //
  //             const reqSize = hardArray.find((item) => item === id[key]);
  //
  //
  //
  //             if (!reqSize) {
  //
  //               hardArray.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "Color") {
  //
  //             const reqSize = colorArray.find((item) => item === id[key]);
  //
  //
  //
  //             if (!reqSize) {
  //
  //               colorArray.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "Brand") {
  //
  //             const reqSize = brandArray.find((item) => item === id[key]);
  //
  //
  //
  //             if (!reqSize) {
  //
  //               brandArray.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       productArray.map((id) => {
  //
  //         return Object.keys(id).forEach((key) => {
  //
  //           if (key === "MaterialNotes") {
  //
  //             const reqSize = submaterial.find((item) => item === id[key]);
  //
  //
  //
  //             if (!reqSize) {
  //
  //               submaterial.push(id[key]);
  //
  //             }
  //
  //           }
  //
  //         });
  //
  //       });
  //
  //
  //
  //       setitem(productArray);
  //
  //
  //
  //       setbaseMaterialTypeArray(baseMaterialTypeArray);
  //
  //
  //
  //       sethardArray(hardArray);
  //
  //
  //
  //       setcolorArray(colorArray);
  //
  //
  //
  //       setbrandArray(brandArray);
  //
  //
  //
  //       setsubmaterialArray(submaterial);
  //
  //
  //
  //       // console.log(productArray);
  //
  //
  //
  //       // console.log(typeof hardArray);
  //
  //
  //
  //       // console.log(
  //
  //       //   baseMaterialTypeArray,
  //
  //
  //
  //       //   hardArray,
  //
  //
  //
  //       //   colorArray,
  //
  //
  //
  //       //   brandArray,
  //
  //
  //
  //       //   submaterial
  //
  //       // );
  //
  //     })
  //
  //
  //
  //     .catch((error) => {
  //
  //       // Handle any error that occurs during the API call
  //
  //
  //
  //       console.error(error);
  //
  //     });
  //
  // }, [accessToken]);
  //
  //
  //
  // const [login, setlogin] = useState(() => {
  //
  //   const prevLogin = localStorage.getItem("login");
  //
  //
  //
  //   return prevLogin ? JSON.parse(prevLogin) : false;
  //
  // });
  //
  //
  //
  // const [userdetail, setuserdetail] = useState(() => {
  //
  //   const prevUserDetail = localStorage.getItem("userdetail");
  //
  //
  //
  //   return prevUserDetail ? JSON.parse(prevUserDetail) : null;
  //
  // });
  //
  //
  //
  // const [selectedcolor, setselectedcolor] = useState([]);
  //
  //
  //
  // const [selectedmaterial, setselectedmaterial] = useState([]);
  //
  //
  //
  // const [selectedSubmaterial, setselectedSubmaterial] = useState([]);
  //
  //
  //
  // const [selectedbrand, setselectedbrand] = useState([]);
  //
  //
  //
  // const [lowtemp, setlowtemp] = useState(0);
  //
  //
  //
  // const [hightemp, sethightemp] = useState(80);
  //
  //
  //
  // const [filteredCount, setFilteredCount] = useState(0);
  //
  //
  //
  // // Update local storage when login or userdetail change
  //
  //
  //
  // useEffect(() => {
  //
  //   localStorage.setItem("login", JSON.stringify(login));
  //
  // }, [login]);
  //
  //
  //
  // useEffect(() => {
  //
  //   localStorage.setItem("userdetail", JSON.stringify(userdetail));
  //
  // }, [userdetail]);
  //
  //
  //
  // const [totalprice, settotalprice] = useState(0);
  //
  //
  //
  // const [isChanged, setIsChanged] = useState(false);
  //
  //
  //
  // const [isFlipped, setIsFlipped] = useState(false);
  //
  //
  //
  // const [orderno, setorderno] = useState(null);
  //
  //
  //
  // const [value, setValue] = useState([0, 80]);
  //
  //
  //
  // const [shouldClearCheckboxes, setShouldClearCheckboxes] = useState(false);
  //
  //
  //
  // const [checkboxStates, setCheckboxStates] = useState({});
  //
  //
  //
  // const [selectedCountry, setselectedCountry] = useState();
  //
  //
  //
  // const [dataLoaded, setDataLoaded] = useState(false);
  //
  //
  //
  // const handleDataLoaded = () => {
  //
  //   setDataLoaded(true);
  //
  // };

  return (
    <>
      <>APPJS</>

      <div>

        {/*{!dataLoaded && <CenteredIcon onDataLoaded={handleDataLoaded} />}*/}

        {/*{dataLoaded && (*/}

          <div>

            <Toaster position="top-center" reverseOrder={false} />

            {/*<UserContext.Provider >*/}

              <Routes>
                <Route path="/hello" element={<Index />}/>
              </Routes>
              {/*  <Route path="/" element={<Index />} />*/}



              {/*  /!* <Route path='/' element={<CheckPrice/>}/> *!/*/}



              {/*  <Route*/}

              {/*    path="/Signin"*/}

              {/*    element={login ? <OrderHistory /> : <SignIn />}*/}

              {/*  />*/}



              {/*  <Route path="/Signup" element={<Signup />} />*/}



              {/*  <Route*/}

              {/*    path="/request-quote/:productid"*/}

              {/*    element={<RequestQuote />}*/}

              {/*  />*/}



              {/*  <Route path="/request-quote" element={<RequestQuote />} />*/}



              {/*  <Route*/}

              {/*    path="/CartPopup"*/}

              {/*    element={login ? <CartPopup /> : <SignIn />}*/}

              {/*  />*/}



              {/*  <Route*/}

              {/*    path="/Checkout"*/}

              {/*    element={login ? <Checkout /> : <SignIn />}*/}

              {/*  />*/}



              {/*  <Route*/}

              {/*    path="/product/:productid"*/}

              {/*    element={<ProductComponent />}*/}

              {/*  />*/}



              {/*  <Route path="/table" element={<OrderHistory />}></Route>*/}



              {/*  <Route path="/table/:userNo" element={<OrderHistory />}></Route>*/}

              {/*</Routes>*/}

            {/*</UserContext.Provider>{" "}*/}

          </div>

        )

      </div>

    </>
  )
}

export default App
