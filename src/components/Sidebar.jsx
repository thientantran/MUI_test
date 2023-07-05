import { Box } from '@mui/material'
import React from 'react'
export default function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{backgroundColor:"skyblue", display:{xs:"none", sm:"block"}}}>Sidebar</Box>
  )
}
