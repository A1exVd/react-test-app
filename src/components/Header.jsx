import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
  return (
      <AppBar position="fixed" elevation={1} sx={{ backgroundColor: "white", height: "3.5rem", color: "rgb(59 130 246)"}}>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
          <div></div>
          <Typography variant="h5" component="div" sx={{marginLeft: '6rem'}}>
            Food
          </Typography>
          <Box>
            <Button size='small' variant='contained'>Sign Up</Button>
            <Button size='small' variant='text' color="inherit">Sign In</Button>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
          >
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
