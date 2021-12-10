import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <AppBar 
      position='static'
      sx={{mb: '2rem'}}
    >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{mr: 2}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
          React+MUI
        </Typography>
        <Button
          color='inherit'
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

