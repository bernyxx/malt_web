'use client';
import React from 'react';
import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import monitorImage from '../public/monitor_image.jpg';

// TODO: cambiare freccia con una bianca

const page = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const maltTest = `title titoloTesto = "Valori Nutrizionali";
list nomeProdotto = ["Riso", "Pane", "Zucchina", "Cioccolato"];
list calorie = ["332", "265", "17", "546" ];

markdown(titoloTesto);

for(idx, len(nomeProdotto)){

  text formatstring = "Prodotto: %t, Calorie: %t kcal";
  ulist line = format(formatstring, nomeProdotto[idx], calorie[idx]);

  markdown(line);
}`;

  const mdTest = `# Valori Nutrizionali
- Prodotto: Riso, Calorie: 332 kcal
- Prodotto: Pane, Calorie: 265 kcal
- Prodotto: Zucchina, Calorie: 17 kcal
- Prodotto: Cioccolato, Calorie: 546 kcal`;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth={'lg'}>
        <h1> MALT </h1>
        <Box height={20}></Box>

        <Image
          src={monitorImage}
          alt='immagine malt'
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
        <Box height={20}></Box>
        <p>
          MALT è un linguaggio che consente di ottenere un file Markdown a
          partire da un nuovo linguaggio procedurale.
        </p>
        <p>
          Vuoi creare un pdf che contiene una tabella o una lunga lista di
          prodotti contenuti nel tuo database? Se la risposta è sì sei nel posto
          giusto!
        </p>
        <p>
          MALT ti consente di iterare liste come nei classici linguaggi di
          programmazione (C/C++, Java, Python...) per produrre liste markdown (e
          molto altro) generate a run-time a partire dai dati forniti.
        </p>
        <p>
          Nell&apos;esempio qui sotto viene mostrato come iterare due liste e
          generare una lista non ordinata sfruttando i dati appena letti.
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
              value={maltTest}
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
              value={mdTest}
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
        <Box textAlign='left'>
          <Link href='/editor' passHref>
            <Button
              variant='outlined'
              size='large'
              style={{ border: '2px solid' }}
            >
              EDITOR MALT
            </Button>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default page;
