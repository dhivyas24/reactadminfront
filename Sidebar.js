


import ClassIcon from '@mui/icons-material/Class';
import CheckIcon from '@mui/icons-material/Check';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DescriptionIcon from '@mui/icons-material/Description';

import SidebarLink from "./SidebarLink";

  function Sidebar(){
  return(

    <div className="sidebar">

       <br/> <SidebarLink text="CLASS"  Icon={ClassIcon} /><br/>
       <br/><SidebarLink text="ATTENDANCE"  Icon={CheckIcon} /><br/>
       <br/><SidebarLink text="EXAMS"  Icon={ImportContactsIcon} /><br/>
       <br/><SidebarLink text="NB" Icon={DescriptionIcon} /><br/>
       <br/><SidebarLink text="P-T" Icon={DescriptionIcon} /><br/>
    
    </div>
  );
  }

export default Sidebar;
