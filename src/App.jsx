import { Add, Settings } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import './App.css'
function App() {
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button variant='contained' color='secondary' size='small' startIcon={<Settings />}>
        Contained
      </Button>
      <Button variant='contained' size='small' sx={{ marginLeft: '10px' }} color='success' startIcon={<Add />}>
        Add
      </Button>
      <Typography variant='h1' component='h2'>
        h1. Heading
      </Typography>
      <Button
        variant='contained'
        sx={{
          backgroundColor: 'skyblue',
          color: 'black',
          margin: 5,
          '&:hover': {
            backgroundColor: 'lightblue'
          },
          '&:disabled': {
            backgroundColor: 'gray',
            color: 'white'
          }
        }}
      >
        My Unique Button
      </Button>
    </div>
  )
}

export default App
