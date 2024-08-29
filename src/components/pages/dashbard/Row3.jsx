import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pie/Pie";
import Bar from "../../pages/bar/Bar";
import Geoagraphy from "../../pages/geoagraphy/Geoagraphy";
const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} mt={2} gap={3} flexWrap={"wrap"}>
      <Paper sx={{ width: "32%", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={"600"}
          p={"30px 30px 0 30px"}
        >
          Campaign
        </Typography>
        <Pie isDashbord={true} header={false} />

        <Typography align="center" mt={"15px"}>
          $48,352 revenue generated
        </Typography>

        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ width: "32%", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={"600"}
          p={"30px 30px 0 30px"}
        >
          Sales Quantity
        </Typography>

        <Bar isDashbord={true} header={false} />
      </Paper>

      <Paper sx={{ width: "32%", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={"600"}
          p={"30px 30px 0 30px"}
        >
          Geography Based Traffic
        </Typography>

        <Geoagraphy isDashbord={true} header={false} />
      </Paper>
    </Stack>
  );
};
export default Row3;
