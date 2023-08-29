import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { UserContext } from "../../../../../../Downloads/Canyon_Full_Stack/canyoncomponents/src/UserContext.jsx";
import { useContext } from "react";
import { useEffect } from "react";
import './css/ItemsData.css'
import { useState } from "react";

const rows = [
  {
    id: 1,
    code: "Snow",
    population: "Jon",
    size: 35,
    density: 47,
    hardness: 57,
  },
  {
    id: 2,
    code: "Lannister",
    population: "Cersei",
    size: 42,
    density: 45,
    hardness: 47,
  },
  {
    id: 3,
    code: "Lannister",
    population: "Jaime",
    size: 45,
    density: 42,
    hardness: 97,
  },
  {
    id: 4,
    code: "Stark",
    population: "Arya",
    size: 16,
    density: 43,
    hardness: 47,
  },
  {
    id: 5,
    code: "Targaryen",
    population: "Daenerys",
    size: 23,
    density: 43,
    hardness: 17,
  },
  {
    id: 6,
    code: "Melisandre",
    population: "Ehtisham Bhai",
    size: 150,
    density: 73,
    hardness: 7,
  },
  {
    id: 7,
    code: "Clifford",
    population: "Ferrara",
    size: 44,
    density: 43,
    hardness: 77,
  },
  {
    id: 8,
    code: "Frances",
    population: "Rossini",
    size: 36,
    density: 48,
    hardness: 67,
  },
  {
    id: 9,
    code: "Roxie",
    population: "Harvey",
    size: 65,
    density: 43,
    hardness: 47,
  },
];

export default function DataTable() {

  const [pageSize, setPageSize] = useState(5); // Initial page size

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };
  const {
    id1,
    cs1,
    isChanged,
    isFlipped,
    search,
    setFilteredCount,
    item,
    lowtemp,
    hightemp,
    size,
    cs,
    id,
    selectedbrand,
    // selectedSubmaterial,
    selectedmaterial,
    selectedhardness,
    selectedcolor,
    price,
    setprice,
    // productWithOnlineStatus,
  } = useContext(UserContext);

  const filteredProducts =
    item?.filter((product) => {
      const lowerCaseSearch = search.toLowerCase();

      const isWithinTemperatureRange =
        product.LowTemperatureC >= -70 &&
        product.LowTemperatureC <= lowtemp &&
        product.HighTemperatureC >= hightemp &&
        product.HighTemperatureC <= 360;

      const matchesSearch =
        !search ||
        (product.ItemNo &&
          product.ItemNo.toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, "")
            .includes(lowerCaseSearch.replace(/[^a-zA-Z0-9]/g, ""))) ||
        (product.Description &&
          product.Description.toLowerCase().includes(lowerCaseSearch)) ||
        (product.DurometerScale &&
          product.DurometerScale.toLowerCase().includes(lowerCaseSearch)) ||
        (product.Description2 &&
          product.Description2.toLowerCase().includes(lowerCaseSearch)) ||
        (product.Color &&
          product.Color.toLowerCase().includes(lowerCaseSearch)) ||
        (product.DurometerScale &&
          product.DurometerScale.toLowerCase().includes(lowerCaseSearch)) ||
        (product.Material &&
          product.Material.toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, "")
            .includes(lowerCaseSearch.replace(/[^a-zA-Z0-9]/g, ""))) ||
        (product.SearchDescription &&
          product.SearchDescription.replace(/-/g, "")
            .toLowerCase()
            .includes(lowerCaseSearch.replace(/-/g, ""))) ||
        (product.CompoundNumber &&
          product.CompoundNumber.toLowerCase().includes(lowerCaseSearch));

      const matchesColor =
        !selectedcolor ||
        (product.Color && product.Color.includes(selectedcolor));
      const matchesBrand =
        !selectedbrand ||
        (product.Brand && product.Brand.includes(selectedbrand));
      const matchesHardness =
        !selectedhardness ||
        (product.DurometerRange &&
          product.DurometerRange.includes(selectedhardness));
      const matchesMaterial =
        !selectedmaterial ||
        (product.Material && product.Material.includes(selectedmaterial));
      // const matchessubMaterial = !selectedSubmaterial || (product.MaterialNotes && product.MaterialNotes.includes(selectedSubmaterial));
      const matchesCS =
      !cs1 ||
      (product.CrossSectionalDiameterCS &&
        product.CrossSectionalDiameterCS.toString().includes(cs1.toString()));
    const matchesID =
      !id1 ||
      (product.InsideDiameterID &&
        product.InsideDiameterID.toString().includes(id1.toString()));

      const matchesSize =
        !size ||
        (product.SizeStandard &&
          product.SizeStandard.toLowerCase().includes(size.toLowerCase()));

      return (
        isWithinTemperatureRange &&
        matchesSearch &&
        matchesColor &&
        matchesBrand &&
        matchesHardness &&
        matchesMaterial &&
        matchesCS &&
        matchesID &&
        matchesSize
      );
    }) || [];

  useEffect(() => {
    setFilteredCount(filteredProducts.length);
  }, [filteredProducts]);

  const columns = [
    { field: "ItemNo", headerName: "Item No", maxWidth: 120, headerClassName: 'header-cell' },
    { field: "Color", headerName: "Color", maxWidth: 90, headerClassName: 'header-cell' },
    {
      field: "CrossSectionalGeometry",
      headerName: "CS",
      maxWidth: 80,
      headerClassName: 'header-cell'
    },
    { field: "Color", headerName: "Brand", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "Material", headerName: "Material", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "Brand", headerName: "Brand", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "CrossSectionalDiameterCS", headerName: "CS", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "Durometer", headerName: "Type", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "HighTemperatureC", headerName: "High Temp", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "LowTemperatureC", headerName: "Low Temp", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "InsideDiameterID", headerName: "ID", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "UnitCost", headerName: "Price", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "qnty", headerName: "Quantity", maxWidth: 90, headerClassName: 'header-cell' },
    { field: "Color", headerName: "Color", maxWidth: 90, headerClassName: 'header-cell' },

  ];

  

  return (
    <div style={{ height: 800, minWidth: "100%" }}>
      <DataGrid
        rows={filteredProducts}
        columns={columns}
        getRowId={(row) => row.ItemNo} // Changed to 'row'
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        pagination
        paginationMode="client"
        pageSizeOptions={[ 25, 50, 100]} // Updated page size options
      />
    </div>
  );
}
