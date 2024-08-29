import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "./Header";

const Dashbard = () => {
  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Header title={"Dashboard"} info={"Welcom to your Dashboared"} />
        <Box>
          <Button
            sx={{ textTransform: "capitalize", padding: "6px 8px" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Downlode Repors
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};
export default Dashbard;
