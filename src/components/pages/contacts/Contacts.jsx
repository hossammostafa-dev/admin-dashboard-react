import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./datacontacts";
//import { useTheme } from '@emotion/react';
import { Box } from "@mui/material";
import Header from "../dashbard/Header";

const Contacts = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "register_id",
      headerName: "Register ID",
      width: 30,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "adderss",
      headerName: "Adderss",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "city",
      headerName: "City",
      width: 30,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Zip Code",
      headerName: "Zip Code",
      width: 30,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <Box sx={{ height: 500, width: "98%", mx: "auto", my: "auto" }}>
      <Header
        title={"Contacts"}
        info={"List of contacts for future refefence"}
      />
      <DataGrid
        sx={{ mt: 2 }}
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};
export default Contacts;
