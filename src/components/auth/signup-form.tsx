import React, { ChangeEvent, useState } from 'react'
import { TextField, Button, Link as MuiLink } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserMutation } from '../../apis/users.api'
import { useLoginMutation } from '../../apis/auth.api'
import { useAppDispatch } from '../../app/hooks'
import { User } from '../../models/User'
import { setAuthState } from '../../slices/auth/auth.slice'

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

  const [createUser] = useCreateUserMutation()
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSignup = async (event: any) => {
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
      await createUser({ email, password })
      const response = (await login({ email, password })) as { data: User }
      dispatch(setAuthState({ user: response.data }))
      navigate('/')
    } catch (err) {
      console.error(err)
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
      <Button variant='contained' className='w-80' color='error' onClick={handleSignup}>
        <span className='p-1'>Sign Up</span>
      </Button>
    </div>
  )
}
