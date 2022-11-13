import React from 'react'
import { SecretKey } from '../secret'
import { Button } from '@mui/material'

export const HomePage = () => {
  const handleConnectCoinbase = () => {
    if (SecretKey.REACT_APP_COINBASE_AUTH_URL) {
      window.location.href = SecretKey.REACT_APP_COINBASE_AUTH_URL
    }
  }

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <Button variant='contained' size='large' onClick={handleConnectCoinbase}>
        Connect Coinbase
      </Button>
    </div>
  )
}
