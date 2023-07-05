import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
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
      <Box width={400} height={300} bgcolor='white' p={3} borderRadius={5}>
        <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>

        <UserBox>
          <Avatar sx={{width:30, height:30}} src='https://townsquare.media/site/252/files/2021/08/attachment-blackpink-jisoo-blonde-e1628094363838.jpg'/>
          <Typography fontWeight={500} variant='span'>Jisoo</Typography>
        </UserBox>

        <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="What you want to say?  "
          variant="standard"
        />

        <Stack direction='row' gap={1} mb={3} mt={2}>
          <EmojiEmotions color='primary'/>
          <Image color='secondary'/>
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>

        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
          <Button>Post</Button>
          <Button sx={{width:'100px'}}><DateRange/></Button>
        </ButtonGroup>
      </Box>
    </Modal>
    </>
  )
}
