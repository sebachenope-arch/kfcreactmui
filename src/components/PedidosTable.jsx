import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Tooltip,
} from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { PedidosContext } from '../providers/context';

export default function PedidosTable() {
  const { pedidos } = useContext(PedidosContext);

  const renderIconoTipo = (tipo) => {
    const tipoNormalizado = (tipo || '').toLowerCase();
    if (tipoNormalizado === 'combo') {
      return (
        <Tooltip title="Combo" arrow>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', color: 'warning.main' }}>
            <FastfoodIcon fontSize="medium" />
          </Box>
        </Tooltip>
      );
    }
    // "solo hamburguesa"
    return (
      <Tooltip title="Solo Hamburguesa" arrow>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', color: 'secondary.main' }}>
          <LunchDiningIcon fontSize="medium" />
        </Box>
      </Tooltip>
    );
  };

  return (
    <Card variant="outlined" sx={{ boxShadow: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          Listado de Pedidos
        </Typography>

        <TableContainer component={Paper} variant="outlined" sx={{ mt: 1 }}>
          <Table aria-label="tabla de pedidos">
            <TableHead sx={{ backgroundColor: 'action.hover' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Nombre del Cliente</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total de Compra</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Tipo</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Medio de pago</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos && pedidos.length > 0 ? (
                pedidos.map((pedido) => (
                  <TableRow key={pedido.id} hover>
                    <TableCell>{pedido.cliente}</TableCell>
                    <TableCell>${Number(pedido.total).toFixed(2)}</TableCell>
                    <TableCell align="center">
                      {renderIconoTipo(pedido.tipo)}
                    </TableCell>
                    <TableCell>{pedido.medioPago}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 3, color: 'text.secondary' }}>
                    No hay pedidos registrados aún.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
