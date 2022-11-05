import React from 'react'
import { LoginForm } from './components/auth/login-form'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LoginForm />
    </ThemeProvider>
  )
}

export default App
