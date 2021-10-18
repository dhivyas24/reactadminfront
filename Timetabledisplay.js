import Timetable from './Timetable';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Timetableisplay(){
    return(
  
<Grid item xs={12} sx={{ p: 4,paddingTop:30}}>
            
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column',overflowX: 'scroll'}}>
              <Timetable />
            </Paper>
          </Grid>
          );
        }
      
      export default Timetableisplay;
      