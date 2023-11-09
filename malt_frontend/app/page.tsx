'use client';
import React from 'react';
import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

// TODO: cambiare freccia con una bianca

const page = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth={'sm'}>
        <h1 style={{ textAlign: 'center' }}> MALT </h1>
        <Box height={20}></Box>
        <Image
          src='https://images.unsplash.com/photo-1619410283995-43d9134e7656'
          alt='foto monitor'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
        <Box height={20}></Box>
        <p style={{ textAlign: 'center' }}>
          MALT è un linguaggio che consente di ottenere un file Markdown a
          partire da un nuovo linguaggio procedurale.
        </p>
        <Box height={50}></Box>
        <Grid
          container
          alignItems={'center'}
          justifyContent={'space-between'}
          spacing={0}
        >
          <Grid item xs={5}>
            <TextField
              id='outlined-basic'
              label='MALT'
              variant='outlined'
              value={'prova'}
              multiline={true}
              disabled={true}
              fullWidth
              sx={{
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'white',
                },
              }}
            />
          </Grid>
          <Grid item xs={'auto'}>
            <Image src='arrow.svg' alt='arrow' height={30} width={30}></Image>
          </Grid>
          <Grid item xs={5}>
            <TextField
              id='outlined-basic'
              label='Markdown'
              variant='outlined'
              value={'prova'}
              multiline={true}
              disabled={true}
              fullWidth
              sx={{
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'white',
                },
              }}
            />
          </Grid>
        </Grid>
        <Box height={40}></Box>
        <Box textAlign='center'>
          <Link href='/editor' passHref>
            <Button
              variant='outlined'
              size='large'
              style={{ border: '2px solid' }}
            >
              Prova ora
            </Button>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default page;
