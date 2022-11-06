import React, { ChangeEvent, useState } from 'react'
import { TextField, Button, Link as MuiLink } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../apis/auth.api'
import { User } from '../../models/User'
import { useAppDispatch } from '../../app/hooks'
import { setAuthState } from '../../slices/auth/auth.slice'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [emailErrored, setEmailErrored] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordErrored, setPasswordErrored] = useState(false)

  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (event: any) => {
    event.preventDefault()

    if (!email) {
      setEmailErrored(true)
    } else {
      setEmailErrored(false)
    }
    if (!password) {
      setPasswordErrored(true)
    } else {
      setEmailErrored(false)
    }
    try {
      const respone = (await login({ email, password })) as { data: User }
      dispatch(setAuthState({ user: respone.data }))
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='flex justify-center flex-col items-center h-screen gap-8'>
      <h1 className='text-5xl mb-5'>Login</h1>
      <div className='flex flex-col gap-2'>
        <TextField
          label='Email'
          className='w-80'
          type='email'
          required
          value={email}
          helperText={emailErrored && 'Please enter a valid Email'}
          error={emailErrored}
          onChange={handleChangeEmail}
        />
        <TextField
          label='Password'
          className='w-80'
          type='password'
          required
          value={password}
          helperText={passwordErrored && 'Password is incorrect'}
          error={passwordErrored}
          onChange={handleChangePassword}
        />
        <Link to='/signup' className='justify-self-end self-end mt-1'>
          <MuiLink>Sign Up</MuiLink>
        </Link>
      </div>
      <Button
        type='submit'
        variant='contained'
        className='w-80'
        color='error'
        onClick={handleLogin}
      >
        <span className='p-1'>Login</span>
      </Button>
    </div>
  )
}
