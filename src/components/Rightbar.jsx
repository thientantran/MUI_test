import { Box } from "@mui/material";

export default function Rightbar() {
  return <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
    <Box position='fixed'>
      Here
    </Box>
  </Box>
}
