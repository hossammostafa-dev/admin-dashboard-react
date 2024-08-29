import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./datainvoices";
import Header from "../dashbard/Header";

const Invoices = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
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
      width: 150,
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
  ];
  return (
    <Box sx={{ height: 500, width: "98%", mx: "auto", my: "auto" }}>
      <Header title={"Invoices"} info={"List fo invoices balaces"} />
      <DataGrid
        sx={{ mt: 2 }}
        checkboxSelection
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};
export default Invoices;
