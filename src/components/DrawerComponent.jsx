import Drawer from "@mui/material/Drawer"
import Typography from "@mui/material/Typography"
import List from '@mui/material/List'
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles'
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react'
import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"


const useStyles = makeStyles({
  drawerPaper: {
    width: '15rem',
  },
})

export default function DrawerComponent() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const menuItem = [
    {
      text: 'Dashboard',
      icon: <HomeIcon  />
    },
    {
      text: 'User',
      icon: <PersonIcon />
    }, 
    {
      text: 'About',
      icon: <InfoIcon />
    }
  ]
  
  return (
    <div >
      <IconButton
        sx={{ position: 'fixed', zIndex: '1300', top: '0.75rem', left: '0.6rem', color: "rgb(59 130 246)"}}
        aria-label="open drawer"
        onClick={()=>{setOpen(!open)}}
        color='blue'
      > 
        <MenuIcon />
      </IconButton>
      <Drawer 
        sx={{width: '15rem', flexShrink: 0, "& .MuiDrawer-paperAnchorLeft": {top: '3.68rem', borderRight: 'none'}}}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{paper: classes.drawerPaper}}
      >
        <List>
          {menuItem.map(item => (
            <ListItem key={item.text} button='true' sx={{}}>
              <ListItemIcon sx={{minWidth: '3rem', color: "rgb(59 130 246)"}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{}}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}






