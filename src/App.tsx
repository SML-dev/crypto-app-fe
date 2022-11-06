import React from 'react'
import { LoginForm } from './components/auth/login-form'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Routes } from './routes/routes'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

export default App
