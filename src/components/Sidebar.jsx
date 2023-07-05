import { AccountBox, Groups, Home, ModeNight, Newspaper, Person2, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
export default function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <List>
        {/* 1 items */}
        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage"/>
          </ListItemButton>
        </ListItem>
        {/* end items */}
        <ListItem disablePadding>
          <ListItemButton component="a" href='#groups'>
            <ListItemIcon>
              <Groups/>
            </ListItemIcon>
            <ListItemText primary="Groups"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#friend'>
            <ListItemIcon>
              <Person2/>
            </ListItemIcon>
            <ListItemText primary="Friends"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton  component="a" href='#settings'>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton  component="a" href='#pages'>
            <ListItemIcon>
              <Newspaper/>
            </ListItemIcon>
            <ListItemText primary="Pages"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton  component="a" href='#market'>
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="Marketplace"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton  component="a" href='#profile'>
            <ListItemIcon>
              <AccountBox/>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton  component="a">
            <ListItemIcon>
              <ModeNight/>
            </ListItemIcon>
            <Switch/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
