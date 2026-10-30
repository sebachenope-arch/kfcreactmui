import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from "./layouts/Header"
import PedidosProvider from "./providers/PedidosProvider"
import CrearPedidosContainer from "./containers/CrearPedidosContainer"
import VerPedidosContainer from "./containers/VerPedidosContainer"

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <PedidosProvider>
        <BrowserRouter>
          <Header />
          <main className="container mt-4 mb-4">
            <Routes>
              <Route path="/" element={<CrearPedidosContainer />} />
              <Route path="/pedidos" element={<VerPedidosContainer />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </BrowserRouter>
      </PedidosProvider>
    </LocalizationProvider>
  )
}

export default App
