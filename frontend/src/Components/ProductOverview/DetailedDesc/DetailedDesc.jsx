import React from "react";
import "./DetailedDesc.css";
// import pdf from "../../../Static/Images/pdf.webp";

function DetailedDesc(props) {
  const rowStyle = {
    borderBottom: "1px solid #ccc", // Add a 1px solid line at the bottom of each row
  };
  // console.log(props.row);
  return (
    <div className="detailedDesc" style={{margin: 'auto'}}>
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
            <td>
              {props.row.CompoundNumber ? props.row.CompoundNumber : <></>}
            </td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Material</td>
            <td>{props.row.Material}</td>
          </tr>
          {/* <tr style={rowStyle}>
            <td className="hh1">Material Sub Type</td>
            <td>{props.row.MaterialSubtype}</td>
          </tr> */}
          <tr style={rowStyle}>
            <td className="hh1">Color</td>
            <td>{props.row.Color}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">
              Durometer <span></span>
              {props.row.DurometerScale.substring(
                0,
                props.row.DurometerScale.indexOf(",")
              )}
            </td>
            <td>{props.row.Durometer}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Durometer Scale</td>
            <td>{props.row.DurometerScale}</td>
          </tr>

          <tr style={rowStyle}>
            <td className="hh1">Type</td>
            <td>{props.row.CrossSectionalGeometry}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Size</td>
            <td>
              {props.row.SizeStandard.split(" ")[0].concat(props.row.SizeAS568)}
            </td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Cross Section (mm)</td>
            <td>{props.row.CrossSectionalDiameterCS}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Inside Diameter (mm)</td>
            <td>{props.row.InsideDiameterID}</td>
          </tr>
          
          <tr style={rowStyle}>
            <td className="hh1">High Temp (&deg;C)</td>
            <td>{props.row.HighTemperatureC}</td>
          </tr>
          <tr style={rowStyle}>
            <td className="hh1">Low Temp (&deg;C)</td>
            <td>{props.row.LowTemperatureC}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default DetailedDesc;
