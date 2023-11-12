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
import SymbolTable from './SymbolTable';

const GlobalTable = (props: { data: any }) => {
  return (
    <>
      <h2>Tabella Globale</h2>
      <SymbolTable data={props.data} />
      <Box height={20} />
    </>
  );
};

export default GlobalTable;
