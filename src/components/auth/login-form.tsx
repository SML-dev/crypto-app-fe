import React from 'react'
import { TextField, Button } from '@mui/material'

export const LoginForm = () => {
  return (
    <div className='flex justify-center flex-col items-center h-screen gap-8'>
      <h1 className='text-6xl'>Crypto App</h1>
      <div className='flex flex-col gap-2'>
        <TextField label='Email' className='w-80' type='email' required />
        <TextField label='Password' className='w-80' type='password' required />
      </div>
      <Button variant='contained' className='w-80' color='error'>
        <span className='p-1'>Login</span>
      </Button>
    </div>
  )
}
