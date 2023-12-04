import {
  AppBar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Page from './Page';

const NavBar = (props: { page: Page }) => {
  return (
    <AppBar position='static'>
      <Toolbar disableGutters>
        <Typography
          variant='h4'
          noWrap
          component='a'
          href={props.page === Page.Home ? undefined : '/'}
          sx={{
            ml: 2,
            mr: 4,
            fontWeight: 600,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          MALT
        </Typography>

        {props.page !== Page.Editor && (
          <Link href='/editor' passHref style={{ textDecoration: 'none' }}>
            <Button
              variant='text'
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
              }}
            >
              EDITOR
            </Button>
          </Link>
        )}
        {props.page !== Page.Guide && (
          <Link href='/guide' passHref style={{ textDecoration: 'none' }}>
            <Button
              variant='text'
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
              }}
            >
              GUIDA
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
