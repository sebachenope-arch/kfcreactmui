import React, { useState, useContext } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { PedidosContext } from '../providers/context';

export default function PedidosForm() {
  const { agregarPedido } = useContext(PedidosContext);

  const [cliente, setCliente] = useState('');
  const [tipo, setTipo] = useState('combo');
  const [total, setTotal] = useState('');
  const [medioPago, setMedioPago] = useState('Efectivo');

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreLimpio = cliente.trim();
    if (!nombreLimpio) {
      setToastMessage('El nombre del cliente es obligatorio.');
      setToastSeverity('error');
      setToastOpen(true);
      return;
    }

    const valorTotal = parseFloat(total);
    if (isNaN(valorTotal) || valorTotal <= 0) {
      setToastMessage('El total debe ser un número mayor a 0.');
      setToastSeverity('error');
      setToastOpen(true);
      return;
    }

    agregarPedido({
      cliente: nombreLimpio,
      tipo,
      total: valorTotal,
      medioPago,
    });

    // Limpiar formulario y mostrar feedback
    setCliente('');
    setTipo('combo');
    setTotal('');
    setMedioPago('Efectivo');

    setToastMessage('¡Pedido agregado exitosamente!');
    setToastSeverity('success');
    setToastOpen(true);
  };

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') return;
    setToastOpen(false);
  };

  return (
    <Card variant="outlined" sx={{ boxShadow: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          Nuevo Pedido
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 1 }}>
          {/* 1. Nombre del cliente (obligatorio) */}
          <TextField
            label="Nombre del cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
            fullWidth
            placeholder="Ingrese el nombre"
            size="small"
          />

          {/* 2. Tipo de pedido (Dropdown) */}
          <FormControl fullWidth size="small">
            <InputLabel id="tipo-pedido-label">Tipo de pedido</InputLabel>
            <Select
              labelId="tipo-pedido-label"
              id="tipo-pedido-select"
              value={tipo}
              label="Tipo de pedido"
              onChange={(e) => setTipo(e.target.value)}
            >
              <MenuItem value="combo">Combo</MenuItem>
              <MenuItem value="solo hamburguesa">Solo hamburguesa</MenuItem>
            </Select>
          </FormControl>

          {/* 3. Total (input number mayor a 0) */}
          <TextField
            label="Total ($)"
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            fullWidth
            size="small"
            inputProps={{ min: "0.01", step: "any" }}
            placeholder="0.00"
            required
          />

          {/* 4. Medio de pago */}
          <FormControl component="fieldset">
            <FormLabel component="legend" sx={{ fontSize: '0.9rem' }}>Medio de pago</FormLabel>
            <RadioGroup
              row
              value={medioPago}
              onChange={(e) => setMedioPago(e.target.value)}
            >
              <FormControlLabel value="Efectivo" control={<Radio size="small" />} label="Efectivo" />
              <FormControlLabel value="Tarjeta" control={<Radio size="small" />} label="Tarjeta" />
            </RadioGroup>
          </FormControl>

          {/* 5. Botón de agregar */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            sx={{ mt: 1 }}
          >
            Agregar Pedido
          </Button>
        </Box>
      </CardContent>

      {/* Toast de notificación */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3500}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleCloseToast} severity={toastSeverity} variant="filled" sx={{ width: '100%' }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
}
