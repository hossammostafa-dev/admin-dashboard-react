import { Box, Typography, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Typography textAlign={"center"} color={theme.palette.error.main}>
          There is no desgin yet
          <br />
          <br />
          please try again leter...
        </Typography>
      </Box>
    </>
  );
};
export default NotFound;
