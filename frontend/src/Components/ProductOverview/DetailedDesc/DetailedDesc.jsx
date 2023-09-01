import React from "react";
import "./DetailedDesc.css";
import pdf from "../../../Static/Images/pdf.webp";

function DetailedDesc(props) {
  const rowStyle = {
    borderBottom: "1px solid #ccc", // Add a 1px solid line at the bottom of each row
  };
  console.log(props.row, "New");
  return (
    <div className="detailedDesc" style={{ margin: "auto" }}>
      <h1
        style={{
          backgroundColor: "#182e49",
          color: "#fff",
          width: "50rem",
          textAlign: "center",
        }}
      >
        DETAILED DESCRIPTION
      </h1>
      <div className="pdfDetail"></div>
      <div className="specification">
        <table>
          <tr>
            <th>Tech Specs</th>
            <th>Value</th>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Compund Number</td>
            <td>{props.rows ? props.rows.data[0].CompoundNumber : <></>}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Material</td>
            <td>{props.rows ? props.rows.data[0].Material : ""}</td>
          </tr>
          {/* <tr style={rowStyle}>
            <td className="hh1">Material Sub Type</td>
            <td>{props.row.MaterialSubtype}</td>
          </tr> */}
          <tr style={rowStyle}>
            <td className="hh1">Color</td>
            <td>{props.rows ? props.rows.data[0].Color : ""}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">
              Durometer <span></span>
              {props.rows
                ? props.rows.data[0].DurometerScale.substring(
                    0,
                    props.rows.data[0].DurometerScale.indexOf(",")
                  )
                : ""}
            </td>
            <td>{props.rows ? props.rows.data[0].Durometer : ""}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Durometer Scale</td>
            <td>{props.rows ? props.rows.data[0].DurometerScale : ""}</td>
          </tr>

          <tr style={rowStyle}>
            <td className="hh1">Type</td>
            <td>
              {props.rows ? props.rows.data[0].CrossSectionalGeometry : ""}
            </td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Size</td>
            <td>
              {props.rows &&
              props.rows.data[0] &&
              props.rows.data[0].SizeStandard
                ? props.rows.data[0].SizeStandard.split(" ")[0].concat(
                    props.rows.data[0].SizeAS568 
                  )
                : ""}
            </td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Cross Section (mm)</td>
            <td>
              {props.rows ? props.rows.data[0].CrossSectionalDiameter : ""}
            </td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Inside Diameter (mm)</td>
            <td>{props.rows ? props.rows.data[0].InsideDiameter : ""}</td>
          </tr>

          <tr style={rowStyle}>
            <td className="hh1">High Temp (&deg;C)</td>
            <td>{props.rows ? props.rows.data[0].HighTemperature : ""}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Low Temp (&deg;C)</td>
            <td>{props.rows ? props.rows.data[0].LowTemperature : ""}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DetailedDesc;
