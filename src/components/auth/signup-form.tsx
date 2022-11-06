import React, { ChangeEvent, useState } from 'react'
import { TextField, Button, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'
import { Simulate } from 'react-dom/test-utils'
import change = Simulate.change

export const SignForm = () => {
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

  const handleSignup = (event: any) => {
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
  // todo change type
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
      setPasswordErrored(false)
    }
  }

  return (
    <div className='flex justify-center flex-col items-center h-screen gap-8'>
      <h1 className='text-5xl mb-5'>SignUp!</h1>
      <div className='flex flex-col gap-2'>
        <TextField
          label='Email'
          className='w-80'
          type='email'
          required
          value={email}
          helperText={emailErrored && 'Please enter a valid Email'}
          onChange={handleChangeEmail}
          error={emailErrored}
        />
        <TextField
          label='Password'
          className='w-80'
          type='password'
          required
          value={password}
          helperText={passwordErrored && 'Password is incorrect'}
          onChange={handleChangePassword}
          error={passwordErrored}
        />
        <Link to='/login' className='justify-self-end self-end mt-1'>
          <MuiLink>Login</MuiLink>
        </Link>
      </div>
      <Button variant='contained' className='w-80' color='error' onClick={handleLogin}>
        <span className='p-1'>Login</span>
      </Button>
    </div>
  )
}
