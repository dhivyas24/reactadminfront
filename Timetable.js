import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function createData(Day,I,II,III,IV,V,VI,VII,VIII) {
  return { Day,I,II,III,IV,V,VI,VII,VIII };
}

const rows = [
  createData(
  'Monday',
  'Maths',
  'Maths',
  'Maths',
  'Maths',
  'Maths',
  'Maths',
  'Maths',
  'Maths',
  
  ),
  createData(
      'Tuesday',
      'Maths',
      'Maths',
      'Maths',
      'Maths',
      'Maths',
      'Maths',
      'Maths',
      'Maths',
  ),
  createData( 
    'Wednesday',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
  ),
  createData(
   'Thursday',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
    'Maths',
  ),
  createData(
    'Friday',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
   ),
   createData(
    'Saturday',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
     'Maths',
   ),
];


export default function Timetable() {
  return (
    <React.Fragment>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>I</TableCell>
            <TableCell>II</TableCell>
            <TableCell>III</TableCell>
            <TableCell>IV</TableCell>
            <TableCell>V</TableCell>
            <TableCell>VI</TableCell>
            <TableCell>VII</TableCell>
            <TableCell>VIII</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Day}>
                   <TableCell>{row.Day}</TableCell>
              <TableCell>{row.I}</TableCell>
              <TableCell>{row.II}</TableCell>
              <TableCell>{row.III}</TableCell>
              <TableCell>{row.IV}</TableCell>
              <TableCell>{row.V}</TableCell>
              <TableCell>{row.VI}</TableCell>
              <TableCell>{row.VII}</TableCell>
              <TableCell>{row.VIII}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}