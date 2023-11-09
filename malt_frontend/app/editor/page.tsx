'use client';
import React, { SyntheticEvent, useState } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
} from '@mui/material';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SubmitButton from '../components/SubmitButton';
import Link from 'next/link';

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
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState('');

  function handleFileInput(e: React.FormEvent<HTMLLabelElement>) {
    let files = (e.target as HTMLInputElement).files;

    if (files == null) {
      return;
    }

    let file = files[0];

    const fr = new FileReader();

    fr.onload = function () {
      setCode(fr.result as string);
    };

    fr.readAsText(file);

    setFile(file);
    console.log(file.type);
  }

  function handleTextArea(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCode(e.target.value);
  }

  async function submitCode(isScanner: boolean) {
    try {
      setIsLoading(true);
      setIsError(false);

      const url = isScanner
        ? 'http://127.0.0.1:8080/api/launch-lexer'
        : 'http://127.0.0.1:8080/api/launch-parser';

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

      setResponse(data.content);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
      console.error('Errore richiesta HTTP');
    }
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Link href='/' style={{ textDecoration: 'none', color: 'white' }}>
          <h1 style={{ textAlign: 'center' }}> MALT </h1>
        </Link>
        <p>
          Per eseguire MALT serve caricare un file testuale oppure scrivere
          direttamente un testo.
        </p>
        <Box height={20}></Box>
        <Button
          component='label'
          variant='outlined'
          startIcon={<CloudUploadIcon />}
          onChange={(e) => handleFileInput(e)}
        >
          Carica file
          <VisuallyHiddenInput type='file' />
        </Button>

        <Box height={40}></Box>
        <TextField
          id='outlined-basic'
          label='Testo'
          variant='outlined'
          multiline={true}
          fullWidth={true}
          minRows={20}
          maxRows={30}
          value={code}
          onChange={(e) => handleTextArea(e)}
        />
        <Box height={40}></Box>
        <Box textAlign={'center'}>
          <ButtonGroup
            variant='contained'
            aria-label='medium button group'
            size='medium'
          >
            <SubmitButton
              handleSubmit={() => submitCode(true)}
              isLoading={isLoading}
              text={'Esegui Scanner'}
            />
            <SubmitButton
              handleSubmit={() => submitCode(false)}
              isLoading={isLoading}
              text={'Esegui Parser'}
            />
          </ButtonGroup>
        </Box>

        <Box height={40}></Box>
        <Box textAlign={'center'}>
          {isLoading ? (
            <CircularProgress />
          ) : isError ? (
            <Box />
          ) : (
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
          )}
        </Box>
        {isError ? (
          <Alert severity='error'>
            <AlertTitle>Errore</AlertTitle>
            Impossibile comunicare con il server!
          </Alert>
        ) : (
          <Box />
        )}
      </Container>
    </ThemeProvider>
  );
}
