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

interface Data {
  [key: string]: VarDescriptor;
}

interface VarDescriptor {
  varName: string;
  varType: string;
  value: string;
  listValue: [];
  params: [];
}

const SymbolTable = (props: { data: Data }) => {
  const tableBody = [];

  for (const key in props.data) {
    let listValue = '';
    let params = '';

    if (props.data[key].listValue.length > 0) {
      for (let el of props.data[key].listValue) {
        listValue += ' | ' + el;
      }
      listValue += ' |';
    }

    if (props.data[key].params.length > 0) {
      for (let el of props.data[key].params) {
        params += ' | ' + el;
      }
      params += ' |';
    }

    tableBody.push(
      <TableRow key={key}>
        <TableCell>{props.data[key].varName}</TableCell>
        <TableCell>{props.data[key].varType}</TableCell>
        <TableCell>{props.data[key].value}</TableCell>

        <TableCell>{listValue}</TableCell>
        <TableCell>{params}</TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Value</TableCell>
          <TableCell>ListValue</TableCell>
          <TableCell>Params</TableCell>
        </TableHead>
        <TableBody>{tableBody}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default SymbolTable;
