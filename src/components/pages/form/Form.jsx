import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm /* SubmitHandler*/ } from "react-hook-form";
import Header from "../dashbard/Header";

const data = [
  {
    value: "Usre",
    label: "Usre",
  },
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;

const Form = () => {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
  };

  // insert the alert//
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //\ End insert the alert//\
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Header title={"Create User"} info={"Create a new User profile"} />
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={errors.firstName}
          helperText="Incorrect entry & minLength 5"
          {...register("firstName", { required: true, minLength: 5 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />

        <TextField
          error={errors.lastName}
          helperText="Incorrect entry & minLength 5"
          {...register("lastName", { required: true, minLength: 5 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={errors.email}
        {...register("email", { required: true, pattern: emailRegex })}
        helperText="Incorrect email"
        label="Email"
        variant="filled"
      />

      <TextField
        error={errors.contactNumber}
        {...register("contactNumber", { required: true, pattern: phoneRegex })}
        helperText="Incorrect Number (XXX) XXX-XXXX"
        label="Contact Number"
        variant="filled"
      />

      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        helperText="Please select your currency"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">
          Create New User
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity="info">The Account Was Crated Correctly</Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};
export default Form;
