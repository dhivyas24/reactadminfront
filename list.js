import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import AssignmentIcon from '@mui/icons-material/Assignment';




import ClassIcon from '@mui/icons-material/Class';
import CheckIcon from '@mui/icons-material/Check';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DescriptionIcon from '@mui/icons-material/Description';

export const mainListItems = (
  <div>
   
    <ListItem  className="link">
      <ListItemIcon  >
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="CLASS" />
    </ListItem><br/><br/>
    <ListItem className="link">
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
      <ListItemText primary="ATTENDANCE" />
    </ListItem><br/><br/>
    <ListItem className="link">
      <ListItemIcon>
        <ImportContactsIcon />
      </ListItemIcon>
      <ListItemText primary="EXAMS" />
    </ListItem><br/><br/>
    <ListItem className="link">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="N-B" />
    </ListItem><br/><br/>
    <ListItem className="link">
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="P-T" />
    </ListItem><br/><br/>
  </div>
);

