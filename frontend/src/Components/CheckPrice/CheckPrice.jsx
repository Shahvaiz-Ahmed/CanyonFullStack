import React, { useContext, useState, useEffect } from "react";
import "../CheckPrice/Checkprice.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { UserContext } from "../../UserContext";
import { toast, success, error } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
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

const CheckPrice = (props) => {
  const { productid } = useParams();

  const existingArray = JSON.parse(localStorage.getItem("cart")) || [];
  const navigate = useNavigate();

  const [isopen, setisopen] = useState(false);
  const [isquantity, setisquantity] = useState(0);
  const { cartlocalArray } = useContext(UserContext);
  const [priceArrayRes, setpriceArrayRes] = useState();
  const [priceArray, setpriceArray] = useState([]);

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
  const [islocalquantity, setislocalquantity] = useState(
    props.rows ? props.rows.data[0].quantity : null
  );

  const [selectedPriceInfo, setSelectedPriceInfo] = useState({}); // New state for selected price info

  useEffect(() => {
    const totalPrice = qntyinput * props.rows.data[0].price;
    settotalprice(totalPrice);
    axios
      .get(
        `https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/SandboxNoExtentions/ODataV4/Company('My%20Company')/itemsaleprice`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            $filter: `ItemNo eq '${props.row.data[0].id}'`,
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
  }, [qntyinput, props.rows.data[0].price, priceArrayRes]);

  useEffect(() => {
    if (priceArrayRes && priceArrayRes.length > 0) {
      const selectedPrice = priceArrayRes.find(
        (price) => price.ItemNo === props.row.ItemNo
      );

      if (selectedPrice) {
        setSelectedPriceInfo(selectedPrice);
      } else {
        // If no specific price info is found, set a default UnitPrice
        setSelectedPriceInfo({ UnitPrice: props.row.originalPrice });
      }
    }
  }, [
    islocalquantity,
    priceArrayRes,
    props.row.ItemNo,
    props.row.originalPrice,
  ]);

  return (
    <div>
      <h2>Enter a quantity to Check Price</h2>
      <div className="contain">
        <div className="flex">
          <input
            style={{ marginLeft: "-0.6rem" }}
            type="number"
            className="qnty"
            value={islocalquantity}
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
            onClick={() => {
              if (priceArrayRes) {
                priceArrayRes
                  .filter((k) => k.ItemNo === props.row.ItemNo)
                  .map((i) => {
                    // console.log(i);
                    setpriceArray((prev) => [...prev, i]);
                    console.log(priceArray);
                  });
              }
              if (props.row.qnty === 0 || props.row.qnty < islocalquantity) {
                toast.error("No quantity available");
                navigate(`/request-quote/${props.row.SearchDescription}`);
              } else {
                if (
                  islocalquantity != null &&
                  islocalquantity != 0 &&
                  islocalquantity <= props.row.qnty
                ) {
                  setisopen(!isopen);
                } else {
                  // Check if quantity is more than 9 for discounted price
                  if (props.row.qnty > 9) {
                    // Calculate 5% discounted price
                    const originalPrice = props.row.originalPrice; // Replace this with the actual price property
                    const newpricediscount = originalPrice * 0.95; // 5% discount

                    // Display the discounted price
                    console.log("Discounted Price:", newpricediscount);
                  }
                }
              }
            }}
          >
            {" "}
            {props.row.qnty === 0 || islocalquantity > props.row.qnty
              ? "Request Quote"
              : "CHECK PRICE"}
          </Button>
        </div>

        {isopen && islocalquantity <= props.row.qnty && islocalquantity != 0 ? (
          <div className="bord">
            <div className="table">
              <hr />
              <TableContainer
                component={Paper}
                style={{ width: "70rem", marginLeft: "-4rem" }}
              >
                <Table style={{ width: "30rem" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "600" }}>
                        Quantity
                      </TableCell>
                      <TableCell style={{ fontWeight: "600" }}>
                        Estimated Ship Time
                      </TableCell>
                      <TableCell style={{ fontWeight: "600" }}>
                        Unit Cost
                      </TableCell>
                      <TableCell style={{ fontWeight: "600" }}>
                        Total Price
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedPriceInfo && (
                      <TableRow key={selectedPriceInfo.ItemNo}>
                        <TableCell style={{ borderTop: "1px solid #ccc" }}>
                          {islocalquantity}
                        </TableCell>
                        <TableCell style={{ borderTop: "1px solid #ccc" }}>
                          Today or Tomorrow
                        </TableCell>
                        <TableCell
                          style={{
                            borderTop: "1px solid #ccc",
                            fontWeight: "600",
                          }}
                        >
                          {/* { value.MinimumQuantity === islocalquantity ? value.UnitPrice : 'null'} */}
                          $
                          {isquantity > 9 && isquantity <= 29
                            ? (selectedPriceInfo.UnitPrice * 0.8641).toFixed(2)
                            : isquantity >= 30 && isquantity < 99
                            ? (selectedPriceInfo.UnitPrice * 0.7406).toFixed(2)
                            : isquantity >= 100 && isquantity < 499
                            ? (selectedPriceInfo.UnitPrice * 0.7037).toFixed(2)
                            : isquantity >= 500 && isquantity < 999
                            ? (selectedPriceInfo.UnitPrice * 0.6852).toFixed(2)
                            : isquantity >= 1000 && isquantity < 2499
                            ? (selectedPriceInfo.UnitPrice * 0.6665).toFixed(2)
                            : isquantity >= 2500
                            ? (selectedPriceInfo.UnitPrice * 0.6356).toFixed(2)
                            : selectedPriceInfo.UnitPrice}
                        </TableCell>
                        <TableCell
                          style={{
                            borderTop: "1px solid #ccc",
                            fontWeight: "600",
                          }}
                        >
                          $
                          {isquantity > 9 && isquantity <= 29
                            ? (
                                selectedPriceInfo.UnitPrice *
                                islocalquantity *
                                0.8563
                              ).toFixed(2)
                            : isquantity >= 30 && isquantity < 99
                            ? (
                                selectedPriceInfo.UnitPrice *
                                islocalquantity *
                                0.7356
                              ).toFixed(2)
                            : isquantity >= 100 && isquantity < 499
                            ? (
                                selectedPriceInfo.UnitPrice *
                                islocalquantity *
                                0.7012
                              ).toFixed(2)
                            : isquantity >= 500 && isquantity < 999
                            ? (
                                selectedPriceInfo.UnitPrice *
                                islocalquantity *
                                0.684
                              ).toFixed(2)
                            : isquantity >= 1000 && isquantity < 2499
                            ? (
                                selectedPriceInfo.UnitPrice *
                                islocalquantity *
                                0.6667
                              ).toFixed(2)
                            : isquantity >= 2500
                            ? (
                                selectedPriceInfo.UnitPrice *
                                islocalquantity *
                                0.6323
                              ).toFixed(2)
                            : (
                                selectedPriceInfo.UnitPrice * islocalquantity
                              ).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Button
                className="addtocart"
                style={{
                  color: "#fff",
                  width: "14rem",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                }}
                onClick={() => {
                  setisCartopen(!isCartopen);

                  const existingItemIndex = existingArray.findIndex(
                    (item) => item.ItemNo === props.row.ItemNo
                  );

                  if (existingItemIndex !== -1) {
                    existingArray[existingItemIndex].quantity = qntyinput;

                    existingArray[existingItemIndex].TotalPrice = totalprice;
                    localStorage.setItem("cart", JSON.stringify(existingArray));
                    toast.success("updates successfully ");
                    setlocalcartArray(existingArray);
                  } else {
                    try {
                      const newRow = {
                        ...props.row,
                        quantity: qntyinput,
                        TotalPrice: totalprice,
                      };
                      existingArray.push(newRow);

                      const existingItemIndex = existingArray.findIndex(
                        (item) => item.ItemNo === props.row.ItemNo
                      );
                      const qntty = parseInt(
                        existingArray[existingItemIndex].quantity
                      );

                      setqnty(qntty);
                      const nullIndex = existingArray.indexOf(null);
                      if (nullIndex !== -1) {
                        existingArray.splice(nullIndex, 1);
                      }

                      setlocalcartArray(existingArray);
                      setcartCountBtn((cartCountBtn) => cartCountBtn + 1);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify(existingArray)
                      );
                      toast.success("Successfully added");
                    } catch (error) {
                      toast.error(
                        "Failed to add item to cart. Please try again later."
                      );
                    }
                  }
                }}
              >
                Add to Cart
              </Button>
              <hr />
            </div>
            <div className="flex" style={{ marginTop: "2rem" }}>
              <AiFillInfoCircle size={20} />
              <p style={{ fontSize: "1.1rem" }}>
                Try increasing your qunatity for better value.
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* <DiscountTable /> */}
      {/* Table goes here */}
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

export default CheckPrice;
