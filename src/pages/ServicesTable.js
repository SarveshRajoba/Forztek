import React, { useState } from 'react';
import {rows,columns} from '../data/TrainingSolutions';
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
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto', // Ensures horizontal centering
      }}
    >
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
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
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundColor: '#000000',
                      color: '#000000',
                    },
                  }}
                >
                  {columns.map(({ id, align }) => (
                    <TableCell
                      key={id}
                      align={align}
                      sx={{ color: 'inherit' }}
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
