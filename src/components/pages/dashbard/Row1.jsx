import { Stack, useTheme } from "@mui/material";
import Row1Paper from "./Row1Paper";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={1}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between" }}
      mt={2}
    >
      <Row1Paper
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subTitle={"Email Sent"}
        incrase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />

      <Row1Paper
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subTitle={"Sales obained"}
        incrase={"+21%"}
        data={data2}
        scheme={"category10"}
      />

      <Row1Paper
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subTitle={"New clients"}
        incrase={"+5%"}
        data={data3}
        scheme={"accent"}
      />

      <Row1Paper
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic recired"}
        incrase={"+43%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
};
export default Row1;
