import { useState } from 'react';
import { PedidosContext } from './context';

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  const agregarPedido = (nuevoPedido) => {
    setPedidos((prevPedidos) => [
      ...prevPedidos,
      {
        id: Date.now() + Math.random(),
        ...nuevoPedido,
      },
    ]);
  };

  return (
    <PedidosContext.Provider value={{ pedidos, agregarPedido }}>
      {children}
    </PedidosContext.Provider>
  );
}

export default PedidosProvider;
