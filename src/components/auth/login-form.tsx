import React, { ChangeEvent, useState } from 'react'
import { TextField, Button, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [emailErrored, setEmailErrored] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordErrored, setPasswordErrored] = useState(false)

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = (event: any) => {
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
