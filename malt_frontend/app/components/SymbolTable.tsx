import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

const SymbolTable = (props: { data: any }) => {
  console.log(props.data);

  const tableData = (data: any) => {
    const table = [];
    for (const key in data) {
      table.push(
        <TableRow key={key}>
          <TableCell>{data[key].varName}</TableCell>
          <TableCell>{data[key].varType}</TableCell>
          <TableCell>{data[key].value}</TableCell>
        </TableRow>
      );
    }

    return table;
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Value</TableCell>
          </TableHead>
          <TableBody>{tableData(props.data)}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SymbolTable;
