import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import { useState } from 'react'
import Add from './components/Add'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

function App() {
  const [mode, setMode] =useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={'text.primary'}>
      {/* Box và conainter tương tự nhau, để bọc lại, dùng như thẻ div, khác nhau là container có margin x autos */}
      {/* Trong box có flex, giúp điều chỉnh tỷ lệ */}
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='center'>
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App
