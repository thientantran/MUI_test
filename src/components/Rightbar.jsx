import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import * as React from 'react';
export default function Rightbar() {
  return <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
    <Box position='fixed'>
      <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={4} sx={{display: "flex", justifyContent:'center'}}>
        <Avatar alt="jisoo" src="https://media.vov.vn/sites/default/files/styles/large/public/2023-06/1_21.jpeg.jpg" />
        <Avatar alt="jisoo" src="https://vtv1.mediacdn.vn/thumb_w/660/562122370168008704/2023/5/1/1682911569-image-2023-04-30t222544-16829350353852129229632.png" />
        <Avatar alt="jisoo" src="https://i.mydramalist.com/6BVYd_5_c.jpg" />
        <Avatar alt="jisoo" src="https://ss-images.saostar.vn/w800/pc/1676043149351/saostar-tngc8l9lrrpml6tt.jpg" />
        <Avatar alt="jisoo" src="https://www.rollingstone.com/wp-content/uploads/2023/03/jisoo.jpg?w=1581&h=1054&crop=1" />
      </AvatarGroup>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
      <ImageList cols={3} variant="woven" rowHeight={100} gap={8}>
        <ImageListItem>
        <img alt="jisoo" src="https://media.vov.vn/sites/default/files/styles/large/public/2023-06/1_21.jpeg.jpg" />
        </ImageListItem>
        <ImageListItem>
        <img alt="jisoo" src="https://vtv1.mediacdn.vn/thumb_w/660/562122370168008704/2023/5/1/1682911569-image-2023-04-30t222544-16829350353852129229632.png" />
        </ImageListItem>
        <ImageListItem>
        <img alt="jisoo" src="https://i.mydramalist.com/6BVYd_5_c.jpg" />
        </ImageListItem>
        <ImageListItem>
        <img alt="jisoo" src="https://ss-images.saostar.vn/w800/pc/1676043149351/saostar-tngc8l9lrrpml6tt.jpg" />
        </ImageListItem>
        <ImageListItem>
        <img alt="jisoo" src="https://www.rollingstone.com/wp-content/uploads/2023/03/jisoo.jpg?w=1581&h=1054&crop=1"  />
        </ImageListItem>
      </ImageList>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Converstations</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://znews-photo.zingcdn.me/w660/Uploaded/bzivoxbp/2020_04_29/Jisoo_BLACKPINK_su_kien_Dior_1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Mình cưới nha em"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Vợ yêu Jisoo
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://www.thewikifeed.com/wp-content/uploads/2021/01/jisoo-kim-1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Love you forever"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Kim Ji So
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://upload.wikimedia.org/wikipedia/commons/4/46/210928_Jisoo.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="I love you"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Jisoo
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
  </Box>
}
