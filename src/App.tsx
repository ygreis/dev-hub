import { BrowserRouter } from "react-router-dom"

import { AppRouter } from "@/app/router/router"
import { ThemeProvider } from "@/theme/theme-provider"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
