import Grid from '@mui/material/Grid2'
import Item from '@mui/material/Grid2'
import List from '@mui/material/List'
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from '@mui/material/Typography'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  const menuItem = [
    {
      title: 'INFORMATION',
      titleItems: ['Pricing', 'About us', 'Events', 'Blog']
    },
    {
      title: 'LEGAL',
      titleItems: ['Temrms of use', 'License agreement', 'Privacy policy', 'Copyright Information']
    },
    {
      title: 'SUPPORT',
      titleItems: ['FAQ', 'Search guide', 'Contact']
    }
  ]

  return (
    <footer>
      <Grid container spacing={0} sx={{width: '100%', height: '15rem', padding: '0.5rem'}}>
          {menuItem.map(item => (
            <Grid size={3} key={item.title} sx={{}}>
              <Typography  sx={{marginLeft: '1rem', color: "rgb(59 130 246)"}}>
                {item.title}
              </Typography>
              <List sx={{"& .MuiTypography-root": {fontSize: '0.7rem'}}}> 
                {item.titleItems.map((titleItem) => (
                <ListItem key={titleItem} sx={{'&:hover': { color: 'rgb(59 130 246)', cursor: 'pointer'}}}>
                  <ListItemText primary={titleItem} />
                </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        <Grid size={3}>
          <Grid>
            <InstagramIcon sx={{'&:hover': { color: 'purple', cursor: 'pointer'}}}/>    
            <YouTubeIcon sx={{'&:hover': {color:'red', cursor: 'pointer'}}}/>
            <TelegramIcon sx={{'&:hover': {color:'rgb(59 130 246)', cursor: 'pointer'}}}/>    
          </Grid>
        </Grid>
        <Grid size={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Typography sx={{fontSize: '0.6rem'}}>@ 2024 Copyright. All rights reserved.</Typography>
        </Grid>
      </Grid>
    </footer>
  )
}