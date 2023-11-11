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

interface Data {
  [key: string]: { [key: string]: VarDescriptor };
}

interface VarDescriptor {
  varName: string;
  varType: string;
  value: string;
  listValue: [];
  params: [];
}

const FunctionsTable = (props: { data: Data }) => {
  console.log(props.data);

  const generateTables = (data: Data) => {
    const tables = [];

    for (const blockKey in data) {
      const blockTableBody = [];

      for (const key in data[blockKey]) {
        let listValue = '';
        let params = '';

        if (data[blockKey][key].listValue.length > 0) {
          for (let el of data[blockKey][key].listValue) {
            listValue += ' | ' + el;
          }
          listValue += ' |';
        }

        if (data[blockKey][key].params.length > 0) {
          for (let el of data[blockKey][key].params) {
            params += ' | ' + el;
          }
          params += ' |';
        }

        blockTableBody.push(
          <TableRow key={key}>
            <TableCell>{data[blockKey][key].varName}</TableCell>
            <TableCell>{data[blockKey][key].varType}</TableCell>
            <TableCell>{data[blockKey][key].value}</TableCell>
            <TableCell>{listValue}</TableCell>
            <TableCell>{params}</TableCell>
          </TableRow>
        );
      }
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
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>ListValue</TableCell>
                  <TableCell>Params</TableCell>
                </TableHead>
                <TableBody>{blockTableBody}</TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      );
    }

    console.log(tables);
    return tables;
  };

  return (
    <>
      <h2>Tabelle Locali</h2>
      {generateTables(props.data)}
      <Box height={20} />
    </>
  );
};

export default FunctionsTable;
