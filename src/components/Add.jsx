import { Add as AddIcon } from '@mui/icons-material'
import { Fab, Tooltip } from '@mui/material'
import React from 'react'
export default function Add() {
  return (
    <>
      <Tooltip title='Delete' sx={{position:"fixed", bottom:20, left:30 }}>
      {/* Tooltips display informative text when users hover over, focus on, or tap an element. */}
        <Fab color="primary" aria-label='add'>
          <AddIcon/>
        </Fab>
      </Tooltip>
    </>
  )
}
