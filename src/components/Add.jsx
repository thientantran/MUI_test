import { Add as AddIcon } from '@mui/icons-material';
import { Box, Fab, Modal, Tooltip, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
const UserBox = styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  marginBottom:'20px'
})
export default function Add() {
  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip onClick={handleOpen} title='Delete' sx={{position:"fixed", bottom:20, left:30 }}>
      {/* Tooltips display informative text when users hover over, focus on, or tap an element. */}
        <Fab color="primary" aria-label='add'>
          <AddIcon/>
        </Fab>
      </Tooltip>
      <Modal sx={{display:'flex',alignItems:'center', justifyContent:'center'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5}>
        <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
      </Box>
    </Modal>
    </>
  )
}
