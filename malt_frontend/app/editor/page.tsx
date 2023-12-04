'use client';
import React, { SyntheticEvent, useState } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CircularProgress,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SubmitButton from '../components/SubmitButton';
import Link from 'next/link';
import GlobalTable from '../components/GlobalTable';
import FunctionsTable from '../components/FunctionsTable';
import { CleaningServices, Delete, FileOpen } from '@mui/icons-material';
import NavBar from '../components/NavBar';

enum Page {
  Home,
  Editor,
  Guide,
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function MaltApp() {
  const [file, setFile] = useState<File>();
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isApiError, setIsApiError] = useState(false);
  const [isFileError, setIsFileError] = useState(false);
  const [response, setResponse] = useState('');

  const [showGlobalTable, setShowGlobalTable] = useState(false);
  const [showLocalTables, setShowLocalTables] = useState(false);

  const [globalTable, setGlobalTable] = useState({});
  const [localTables, setLocalTables] = useState({});

  function cleanPage() {
    setFile(undefined);
    setCode('');
    setIsLoading(false);
    setIsApiError(false);
    setIsFileError(false);
    setResponse('');
    setGlobalTable({});
    setLocalTables({});
    setShowGlobalTable(false);
    setShowLocalTables(false);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    setIsFileError(false);
    let files = e.target.files;

    if (files == null) {
      return;
    }

    let file = files[0];

    const fr = new FileReader();

    fr.onload = function () {
      setCode(fr.result as string);
    };

    const splittedFileName = file.name.split('.');
    const ext = splittedFileName[splittedFileName.length - 1];

    // reset the value of html input element to trigger onchange again even if you insert the same file
    e.target.value = '';

    if (ext === 'malt') {
      fr.readAsText(file);
      setFile(file);
    } else {
      setIsFileError(true);
    }
  }

  function handleTextArea(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCode(e.target.value);
    setIsFileError(false);
  }

  async function submitCode(isScanner: boolean) {
    try {
      // clean data from previous response
      setResponse('');
      setGlobalTable({});
      setLocalTables({});
      // setShowGlobalTable(false);
      // setShowFunctionsTable(false);

      // new request, loading...
      setIsLoading(true);

      // clean previous error if happened
      setIsApiError(false);

      const url = isScanner
        ? 'http://127.0.0.1:8080/api/lexer'
        : 'http://127.0.0.1:8080/api/parser';

      const res = await fetch(url, {
        cache: 'no-cache',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: code }),
      });

      const data = await res.json();

      setIsLoading(false);
      setResponse(data.message);
      setGlobalTable(data.globalTable);
      setLocalTables(data.localTables);
    } catch (e) {
      setIsLoading(false);
      setIsApiError(true);
      console.error('Errore richiesta HTTP');
    }
  }

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    isGlobalTable: boolean
  ) => {
    const value = e.target.checked;

    if (isGlobalTable) {
      setShowGlobalTable(value);
    } else {
      setShowLocalTables(value);
    }
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='md'>
        <NavBar page={Page.Editor} />

        <p>
          Per eseguire MALT serve caricare un file testuale oppure scrivere
          direttamente un testo.
        </p>
        <Box height={20}></Box>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              component='label'
              variant='outlined'
              startIcon={<FileOpen />}
            >
              Carica codice da file
              <VisuallyHiddenInput
                type='file'
                onChange={(e) => handleFileInput(e)}
              />
            </Button>
          </Grid>
          <Grid item>
            <Button
              component='label'
              variant='outlined'
              startIcon={<CleaningServices />}
              onClick={cleanPage}
            >
              Pulisci
            </Button>
          </Grid>
        </Grid>
        {isFileError && (
          <>
            <Box height={20} />
            <Alert severity='error' variant='outlined'>
              <AlertTitle>Errore</AlertTitle>
              Il file inserito non ha estensione .malt
            </Alert>
          </>
        )}

        <Box height={40}></Box>
        <TextField
          id='outlined-basic'
          label='Codice MALT'
          variant='outlined'
          multiline={true}
          fullWidth={true}
          minRows={20}
          maxRows={30}
          value={code}
          onChange={(e) => handleTextArea(e)}
        />
        <Box height={40}></Box>
        <Grid container spacing={2}>
          <Grid item>
            <SubmitButton
              handleSubmit={() => submitCode(true)}
              isLoading={isLoading}
              text={'Esegui Scanner'}
              disable={code.length == 0}
            />
          </Grid>
          <Grid item>
            <SubmitButton
              handleSubmit={() => submitCode(false)}
              isLoading={isLoading}
              text={'Esegui Parser'}
              disable={code.length == 0}
            />
          </Grid>
        </Grid>
        <Box height={40}></Box>
        <Box textAlign={'center'}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            !isApiError &&
            response.length != 0 && (
              <TextField
                id='outlined-basic'
                label='Risultato Compilazione'
                variant='outlined'
                multiline={true}
                fullWidth={true}
                minRows={10}
                maxRows={10}
                value={response}
                disabled={true}
              />
            )
          )}
        </Box>
        {isApiError && (
          <Alert severity='error' variant='outlined'>
            <AlertTitle>Errore</AlertTitle>
            Impossibile comunicare con il server!
          </Alert>
        )}
        {Object.keys(globalTable).length != 0 && (
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleCheckbox(e, true)}
                checked={showGlobalTable}
              />
            }
            label='Mostra Tabella Globale'
          />
        )}
        {Object.keys(localTables).length != 0 && (
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleCheckbox(e, false)}
                checked={showLocalTables}
              />
            }
            label='Mostra Tabelle Locali'
          />
        )}
        {showGlobalTable && <GlobalTable data={globalTable} />}
        {showLocalTables && <FunctionsTable data={localTables} />}
      </Container>
    </ThemeProvider>
  );
}
