import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

// Define columns for the table
const columns = [
  { id: 'srNo', label: 'Sr. No', minWidth: 50 },
  { id: 'courseCode', label: 'Course Code', minWidth: 100 },
  { id: 'courseName', label: 'Training Course Name', minWidth: 250 },
  { id: 'duration', label: 'Training Duration (Days)', minWidth: 100, align: 'right' },
];

// Data for the rows
const rows = [
  { srNo: 1, courseCode: 'FT01', courseName: 'Fundamentals of Bearing Maintenance Technology', duration: 3 },
  { srNo: 2, courseCode: 'FT02', courseName: 'Basics of Rotating Machinery', duration: 3 },
  { srNo: 3, courseCode: 'FT03', courseName: 'Fundamentals of Lubrication for Rotary Machines', duration: 2 },
  { srNo: 4, courseCode: 'FT04', courseName: 'Bearing Damage & Root Cause Analysis', duration: 2 },
  { srNo: 5, courseCode: 'FT07', courseName: 'Basics of Vibration Analysis - Level 1', duration: 2 },
  { srNo: 6, courseCode: 'FT08', courseName: 'Lubrication of Rotary Machines and Oil Analysis', duration: 2 },
  { srNo: 7, courseCode: 'FT09', courseName: 'Health Management of Pump and Motor', duration: 2 },
  { srNo: 8, courseCode: 'FT11', courseName: 'Maintenance Practices & Failure Analysis', duration: 2 },
  { srNo: 9, courseCode: 'FT12', courseName: 'Bearing Reliability in Aggregate and Cement Industries', duration: 2 },
  { srNo: 10, courseCode: 'FT14', courseName: 'Bearing Reliability in Steel Processing Industry', duration: 2 },
  { srNo: 11, courseCode: 'FT15', courseName: 'Root Cause Analysis & Approach', duration: 2 },
  { srNo: 12, courseCode: 'FT16', courseName: 'Mounting & Dismounting of Bearings', duration: 2 },
  { srNo: 13, courseCode: 'FT17', courseName: 'Bearing Reliability in Thermal Power Plants', duration: 2 },
  { srNo: 14, courseCode: 'FT18', courseName: 'Bearing Reliability & Lubrication in Wind Turbines', duration: 2 },
  { srNo: 15, courseCode: 'FT19', courseName: 'Bearing & Lubrication Basics for Automotive (CTT)', duration: 1 },
  { srNo: 16, courseCode: 'FT20', courseName: 'Basics & Bearing Applications in Automotive Applications', duration: 1 },
  { srNo: 17, courseCode: 'FT21', courseName: 'Basics of Lubrication & Oil Management System – Automotive Applications', duration: 1 },
];

// StickyHeadTable Component
export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  // Pagination handlers
  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    
    <Paper
    sx={{
      width: '100%',
      height:'100%',
      // overflow: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto', // Ensures horizontal centering
     
    }}
  >
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'black' }}>
              {columns.map(({ id, label, minWidth, align }) => (
                <TableCell
                  key={id}
                  align={align}
                  style={{ minWidth }}
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  hover
                  key={row.srNo}
                  sx={{
                    backgroundColor: '#201E43',
                    color: '#508C9B',
                    '&:hover': {
                      backgroundColor: '#2E2C5B',
                    },
                  }}
                >
                  {columns.map(({ id, align }) => (
                    <TableCell
                      key={id}
                      align={align}
                      sx={{ color: '#508C9B' }}
                    >
                      {row[id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
 
  );
}
