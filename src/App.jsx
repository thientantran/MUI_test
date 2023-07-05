import { Container, Stack } from '@mui/material'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Container>
      {/* Box và conainter tương tự nhau, để bọc lại, dùng như thẻ div, khác nhau là container có margin x autos */}
      {/* Trong box có flex, giúp điều chỉnh tỷ lệ */}
      <Stack direction='row' spacing={2} justifyContent='center'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Container>
  )
}

export default App
