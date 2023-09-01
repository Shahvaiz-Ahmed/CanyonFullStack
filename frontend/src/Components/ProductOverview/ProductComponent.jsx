import "./ProductComponent.css";
import React, { useContext } from "react";
import product from "../../Static/Images/product.webp";
import BasicTable from "./BasicTable";
import DetailedDesc from "./DetailedDesc/DetailedDesc";
import Layout from "../Layout/Layout";
import CheckPrice from "../CheckPrice/CheckPrice";
import { useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";

function ProductComponent() {
  const { productid } = useParams();
  // console.log(productid);

  const { item, cartlocalArray } = useContext(UserContext);
  // console.log(item);

  const filteredRows = item
    ? item.filter((row, index) => {
        return row.ItemNo === productid;
      })
    : null;
  // console.log(filteredRows);

  const filteredRowsquantity = cartlocalArray
    ? cartlocalArray.filter((row, index) => {
        return row.ItemNo === productid;
      })
    : null;
  // console.log("hellllllo", filteredRowsquantity);

  return (
    <Layout>
      <div className="productComponent ">
        {filteredRows[0] ? (
          filteredRows.map((row, index) => {
            if (index === 0) {
              return (
                <>
                  <div className="productDesc" style={{}}>
                    <img
                      src={product}
                      alt="product"
                      style={{
                        width: "20rem",
                        marginLeft: "1rem",
                        position: "absolute",
                      }}
                    />

                    <div
                      className="productInfo"
                      style={{ margin: 'auto' }}
                    >
                      <h1
                        style={{
                          backgroundColor: "#182E49",
                          color: "#fff",
                          textAlign: "center",
                        }}
                      >
                        {row.SearchDescription}
                      </h1>

                      <p>
                        Color: <span>{row.Color}</span>{" "}
                        <span id="circleColor"></span>{" "}
                      </p>
                      <p
                        style={{
                          width: "50rem",
                          fontSize: "1.5rem",
                          fontWeight: "600",
                        }}
                      >
                        {row.SizeStandard.split(" ")[0].concat(row.SizeAS568)}
                        <span></span> {row.CrossSectionalGeometry}
                        <span></span> made from <span></span>
                        {/* CP80BK21-OR-204; */}
                        {row.SearchDescription.split("-")[0] }; a <span></span>  
                        {/* 80 */}
                        {row.Durometer}
                        <span></span>
                        {/* Shore A */}
                        {row.DurometerScale} durometer <span></span>
                        {/* Canrez */}
                        {row.Description.split(" ")[0]}  {row.Description.split(" ")[2]}
                        . This material is <span></span>
                        {row.Color}, Clean Room Manufactured  {row.Description.split(" ")[5]}  {row.Description.split(" ")[6]} Encapsulated, High
                        Temp, and Silicon Lubricated.
                      </p>
                      <BasicTable row={row} />

                      <CheckPrice
                        row={row}
                        filteredRowsquantity={filteredRowsquantity}
                        id={productid}
                      />
                    </div>
                  </div>
                  <DetailedDesc row={row} />
                </>
              );
            }
          })
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
}

export default ProductComponent;
