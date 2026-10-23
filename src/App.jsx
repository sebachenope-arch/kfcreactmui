import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Header from "./layouts/Header"

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header />
        <div className="container mt-3">
          <p>Proyecto listo. Agrega tus componentes aquí.</p>
        </div>
      </>
    </LocalizationProvider>
  )
}

export default App
