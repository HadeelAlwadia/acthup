import { Box } from '@mui/material'
import React from 'react'
import { Btn, BtnLink } from '../../CustamizeComponent/index.style'

const AuthSitting = () => {
  return (
    
       <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
        <BtnLink  background='inhert' color='white' href='/auth/login'>Login</BtnLink>
        <BtnLink href='/auth/signUp'>signUp</BtnLink>

    </Box>
    
 
  )
}

export default AuthSitting