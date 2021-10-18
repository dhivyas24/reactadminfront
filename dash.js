import * as React from 'react';
import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Timetable from './Timetable';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './list.css';
import {BrowserRouter as Router, Link } from "react-router-dom";

import Timetableisplay from './Timetabledisplay';
import { Avatar } from '@mui/material';

import {mainListItems} from'./list';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);

  
};




  return (
   
    <ThemeProvider theme={mdTheme}>
     
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
    {/*AppBar*/}
        <AppBar position="fixed" open={open}>

          <Toolbar
            sx={{
              pr: '24px', 
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
           
            >
         
             <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1}
            }
            sx={{
       
              ...(open && { display: 'none' }),
            }}
              

            >
             LOGO
            </Typography>
         <div style={{position: 'absolute', right: 0}}>
            <IconButton color="inherit" >
              <Badge badgeContent={4}  color="secondary" >
                <NotificationsIcon />
           
              </Badge>
  
            </IconButton>
            <IconButton color="inherit">
          <Avatar/>
          </IconButton>
          </div>
            </Toolbar>
        </AppBar>
         {/*AppBar* eND*/}

{/*lIST SIDEBAR*/}

        <Drawer variant="permanent" open={open} >
        
          <Toolbar
      
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
           <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             LOGO
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List  style = {{height:"100vh"}} > 
          <List >{mainListItems }</List>
    </List>
         
 </Drawer>
     {/*eND APP AND DRAWER START OF BODY*/}




          <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
             
    
             <Toolbar />



{/* /<Router> 
Button component={Link} to="/Timetabledisplay">
  Link
</Button>
    </Router>*/}
      

<Grid item xs={12} sx={{ p: 4}}>
<Grid item xs={12} sx={{ p:5}}>
<Button  style={{
       padding: "18px 36px",
   float:'center'
 }} >TimeTable</Button>
<Button
style={{
  float:'center',
padding: "18px 36px",

}} >  Class  </Button> 



{/*TIME TABLE CODE */}
</Grid>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column',overflowX: 'scroll',display:'fixcontent'}}>
              <Timetable />
            </Paper>
  </Grid>
            </Box>
        </Box>
 
       
    </ThemeProvider>
          
  );
}

export default function Dashboard() {
  return <DashboardContent />;
 
}