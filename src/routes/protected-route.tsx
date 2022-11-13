import React, { FC, ReactNode } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectCurrentUser } from '../slices/auth/auth.slice'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute: React.FC<any> = ({ children }) => {
  const user = useAppSelector((state) => selectCurrentUser(state))
  return user ? children : <Navigate to='/login' />
}
