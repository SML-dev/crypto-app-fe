import React from 'react'
import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from '../pages/login.pages'
import { SignupPage } from '../pages/signup.page'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}
