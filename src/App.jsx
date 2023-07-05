import { Box, Stack } from '@mui/material'
import Add from './components/Add'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Box>
      {/* Box và conainter tương tự nhau, để bọc lại, dùng như thẻ div, khác nhau là container có margin x autos */}
      {/* Trong box có flex, giúp điều chỉnh tỷ lệ */}
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='center'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>
    </Box>
  )
}

export default App
