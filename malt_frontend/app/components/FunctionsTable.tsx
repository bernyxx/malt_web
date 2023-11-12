'use client';

import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import SymbolTable from './SymbolTable';

interface MapData {
  [key: string]: { [key: string]: VarDescriptor };
}

interface VarDescriptor {
  varName: string;
  varType: string;
  value: string;
  listValue: [];
  params: [];
}

const FunctionsTable = (props: { data: MapData }) => {
  const tables = [];

  for (const blockKey in props.data) {
    tables.push(
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls={blockKey}
          id={blockKey}
        >
          {blockKey}
        </AccordionSummary>
        <AccordionDetails>
          <SymbolTable data={props.data[blockKey]} />
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <>
      <h2>Tabelle Locali</h2>
      {tables}
      <Box height={20} />
    </>
  );
};

export default FunctionsTable;
