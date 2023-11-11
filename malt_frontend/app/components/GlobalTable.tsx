'use client';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';

const GlobalTable = (props: { data: any }) => {
  console.log(props.data);

  const table = [];
  const data = props.data;
  for (const key in data) {
    let listValue = '';
    let params = '';

    if (data[key].listValue.length > 0) {
      for (let el of data[key].listValue) {
        listValue += ' | ' + el;
      }
      listValue += ' |';
    }

    if (data[key].params.length > 0) {
      for (let el of data[key].params) {
        params += ' | ' + el;
      }
      params += ' |';
    }

    table.push(
      <TableRow key={key}>
        <TableCell>{data[key].varName}</TableCell>
        <TableCell>{data[key].varType}</TableCell>
        <TableCell>{data[key].value}</TableCell>

        <TableCell>{listValue}</TableCell>
        <TableCell>{params}</TableCell>
      </TableRow>
    );
  }

  return (
    <>
      <h2>Tabella Globale</h2>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>ListValue</TableCell>
            <TableCell>Params</TableCell>
          </TableHead>
          <TableBody>{table}</TableBody>
        </Table>
      </TableContainer>
      <Box height={20} />
    </>
  );
};

export default GlobalTable;
