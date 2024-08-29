import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../pages/line/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { transctions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={2}>
      <Paper sx={{ maxWidth: "900px", flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              variant="h6"
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>

            <Typography variant="body2" ml={4}>
              $59,347,32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isdashbard={true} header={false} />
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          maxHeight: "360px",
          overflow: "auto",
          p: 0.5,
          minWidth: "328px",
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            variant="h6"
            fontWeight={"bold"}
            p={1.2}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {transctions.map((item) => {
          return (
            <>
              <Paper
                sx={{
                  minWidth: "250px",
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: "5px",
                }}
              >
                <Box>
                  <Typography variant="body1" fontWeight={"600"}>
                    {item.txId}
                  </Typography>

                  <Typography variant="body2">{item.user}</Typography>
                </Box>

                <Typography variant="body1">{item.data}</Typography>

                <Typography
                  color={theme.palette.getContrastText(
                    theme.palette.error.main
                  )}
                  variant="body2"
                  p={1}
                  bgcolor={theme.palette.error.main}
                  borderRadius={1.4}
                >
                  ${item.cost}
                </Typography>
              </Paper>
            </>
          );
        })}
      </Paper>
    </Stack>
  );
};
export default Row2;
