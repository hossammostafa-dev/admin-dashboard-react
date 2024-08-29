import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../dashbard/Header";

const Team = () => {
  const theme = useTheme();

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
      width: 80,
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
      field: "access",
      headerName: "Access",
      width: 120,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <>
            <Box
              sx={{
                p: "5px",
                textAlign: "center",
                borderRadius: "5px",
                width: 102,
                flex: 1,
                backgroundColor:
                  access === "Admin"
                    ? theme.palette.primary.dark
                    : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  color: "white",
                }}
              >
                {access === "Admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "Manager" && <SecurityOutlinedIcon />}
                {access === "User" && <LockPersonOutlinedIcon />}
                {access}
              </Typography>
            </Box>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Box sx={{ height: 500, width: "98%", mx: "auto", my: "auto" }}>
        <Header title={"Teme"} info={"managing the teme members"} />
        <DataGrid sx={{ mt: 2 }} rows={rows} columns={columns} />
      </Box>
    </>
  );
};
export default Team;
