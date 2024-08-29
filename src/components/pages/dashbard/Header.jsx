import { Typography, useTheme, Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Header = ({ title, info }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ color: theme.palette.info.light, fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{info}</Typography>
    </Box>
  );
};
export default Header;
