import React from 'react'
import { Routes as ReactRoutes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/home.page'
import { LoginPage } from '../pages/login.pages'
import { SignupPage } from '../pages/signup.page'
import { ProtectedRoute } from './protected-route'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}
