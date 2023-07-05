import { Pets } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})
export default function Navbar() {
  return <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>TAN DEV</Typography>
        <Pets/>
      </StyledToolbar>
    </AppBar>
}
