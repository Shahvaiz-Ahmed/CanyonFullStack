import React, {useState, useEffect, useContext} from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";


const Price = () => {
  const { productid } = useParams();
  const [row, setrow] = useState();
    const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
    const navigate = useNavigate();
    // USE STATES BELOW
    const [isopen, setisopen] = useState(false);
    const [isquantity, setisquantity] = useState(0);
    const [priceArrayRes, setpriceArrayRes] = useState();
    const [priceArray, setpriceArray] = useState([]);

     // USER CONTEXT
     const {
      setisCartopen,
      isCartopen,
      cartCountBtn,
      setcartCountBtn,
      setlocalcartArray,
      setqntyinput,
      qntyinput,
      totalprice,
      settotalprice,
      qnty,
      accessToken,
      setqnty,
    } = useContext(UserContext);


    useEffect(() => {
      return () => {
        axios
          .get(`http://127.0.0.1:8000/api/products/?ItemNo=${productid}`)
          .then((res) => {
            console.log(res);
            setrow(res);
          });
      };
    }, [row, productid]);

    const [islocalquantity, setislocalquantity] = useState(
        row ? "Hello" : null
    )
console.log(row, "HELLSFKJDF");
  const [selectedPriceInfo, setSelectedPriceInfo] = useState({}); 
  useEffect(() => {
    const totalPrice = qntyinput * row;
    settotalprice(totalPrice);
    axios
      .get(
        `https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/SandboxNoExtentions/ODataV4/Company('My%20Company')/itemsaleprice`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            $filter: `ItemNo eq '${productid}'`,
          },
        }
      )

      .then((response) => {
        setpriceArrayRes(response.data.value);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // // console.log("quantity ", qntyinput);
  }, [qntyinput, row, priceArrayRes]);

//   useEffect(() => {
//     if (priceArrayRes && priceArrayRes.length > 0) {
//         const selectedPrice = priceArrayRes.find(
//             (price) => price.ItemNo === row
//         );
//         if (selectedPrice) {
//             setSelectedPriceInfo (selectedPrice);
//         }else {
//             setSelectedPriceInfo({UnitPrice: row})
//         }
//     }
//   }, [islocalquantity, priceArrayRes, row]);
  


   



  return (
    <div>
      <h2>Enter a Quantity to Check Price</h2>
      <div className="contain">
        <div className="flex">
          <input
            style={{ marginLeft: "-0.6rem" }}
            type="number"
            className="qnty"
            // value={islocalquantity}
            placeholder="Quantity"
            min={1}
            onChange={(event) => {
              setislocalquantity(parseInt(event.target.value));

              setisquantity(parseInt(event.target.value));
            }}
          />

          <Button
            className="btnqty"
            style={{ color: "#fff", marginLeft: "10px", fontWeight: "600" }}
            // onClick={() => {
            //   if (priceArrayRes) {
            //     priceArrayRes
            //       .filter((k) => k.ItemNo === props.row.ItemNo)
            //       .map((i) => {
            //         // console.log(i);
            //         setpriceArray((prev) => [...prev, i]);
            //         console.log(priceArray);
            //       });
            //   }
            //   if (props.row.qnty === 0 || props.row.qnty < islocalquantity) {
            //     toast.error("No quantity available");
            //     navigate(`/request-quote/${props.row.SearchDescription}`);
            //   } else {
            //     if (
            //       islocalquantity != null &&
            //       islocalquantity != 0 &&
            //       islocalquantity <= props.row.qnty
            //     ) {
            //       setisopen(!isopen);
            //     } else {
            //       // Check if quantity is more than 9 for discounted price
            //       if (props.row.qnty > 9) {
            //         // Calculate 5% discounted price
            //         const originalPrice = props.row.originalPrice; // Replace this with the actual price property
            //         const newpricediscount = originalPrice * 0.95; // 5% discount

            //         // Display the discounted price
            //         console.log("Discounted Price:", newpricediscount);
            //       }
            //     }
            //   }
            // }}
          >
            {" "}
            {/* {props.row.qnty === 0 || islocalquantity > props.row.qnty
              ? "Request Quote"
              : "CHECK PRICE"} */}
              CHECK PRICE
          </Button>
        </div>
      </div>
      <TableContainer
        component={Paper}
        style={{ width: "50rem", marginTop: "2rem" }}
      >
        <Table>
          <TableHead style={{ backgroundColor: "#182e49", color: "white" }}>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: "700",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: "2",
                  borderRight: "2px solid #E5E5E5",
                }}
              >
                Quantity
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: "2",
                  borderRight: "2px solid #E5E5E5",
                }}
              >
                Unit Price
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: "2",
                  borderRight: "2px solid #E5E5E5",
                }}
              >
                Discount
              </TableCell>
            </TableRow>
          </TableHead>
          {priceArrayRes ? (
            priceArrayRes.map((item, index) => (
              <TableBody key={index}>
                <TableRow
                  style={{
                    backgroundColor: index % 2 === 0 ? "white" : "#E5E5E5",
                    fontWeight: "600",
                  }}
                >
                  <TableCell
                    style={{
                      textAlign: "center",
                      lineHeight: "1",
                      borderRight: "2px solid #E5E5E5",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    {item.MinimumQuantity}{" "}
                    {priceArrayRes.length - 1 === index ? "+" : "-"}{" "}
                    {index + 1 < priceArrayRes.length
                      ? priceArrayRes[index + 1].MinimumQuantity - 1
                      : null}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center",
                      lineHeight: "1",
                      borderRight: "2px solid #E5E5E5",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    ${item.UnitPrice.toFixed(2)}
                  </TableCell>

                  <TableCell
                    style={{
                      textAlign: "center",
                      lineHeight: "1",
                      borderRight: "2px solid #E5E5E5",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    {index !== 0
                      ? (
                          (1 - item.UnitPrice / priceArrayRes[0].UnitPrice) *
                          100
                        ).toFixed(0) + "% off"
                      : "0% off"}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          ) : (
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading...
            </h3>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Price;
