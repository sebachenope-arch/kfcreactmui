import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KFC App
          </Typography>
          <Box component="nav" aria-label="Navegación principal" sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit" component={RouterLink} to="/">
              Crear pedido
            </Button>
            <Button color="inherit" component={RouterLink} to="/pedidos">
              Ver pedidos
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
