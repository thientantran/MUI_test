import { Add, Settings } from '@mui/icons-material'
import { Button, Typography, styled } from '@mui/material'
import './App.css'
function App() {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: 'black',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue'
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white'
    }
  }))
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button variant='contained' color='otherColor' size='small' startIcon={<Settings />}>
        Contained
      </Button>
      <Button variant='contained' size='small' sx={{ marginLeft: '10px' }} color='success' startIcon={<Add />}>
        Add
      </Button>
      <Typography variant='h1' component='h2'>
        h1. Heading
      </Typography>
      <CustomButton>My Unique Button</CustomButton>
    </div>
  )
}

export default App
