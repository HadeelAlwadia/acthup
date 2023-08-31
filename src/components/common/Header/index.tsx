import { Box, IconButton, Toolbar } from '@mui/material';
import React, { useState } from 'react'
import Search from './partsOfHeader/Search';
import Logo from './partsOfHeader/Logo';
import { AppBarContineer, MoblieMenuContineer } from './partsOfHeader/PartsOfHeader.style';
import {  handleChangeAnyPropertyComponent, userData } from '../../../utils/functionlty';
import UserSitting from './partsOfHeader/UserSitting';
import AuthSitting from './partsOfHeader/AuthSitting';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '../CustamizeComponent';
const isUserLogin=userData.token;
const isNotAuthPages=window.location.href.split('/').find((item)=>item==='auth')?false:true;
console.log(window.location.href.split('/'))
const Header = () => {
const [isMobileMenuOpen,setIsMobileOpen]=useState(false)

  const MobileMenu=<MoblieMenuContineer>
    <CloseIcon onClick={() => {handleChangeAnyPropertyComponent(!isMobileMenuOpen,setIsMobileOpen)}}/>
    {isUserLogin &&isNotAuthPages?< UserSitting  />:<  AuthSitting/>}

   </MoblieMenuContineer>

  return (
    <AppBarContineer>
      <Toolbar >
        <Logo />
        <Search />
        <Box sx={{ flexGrow: 1 }} />
         {isUserLogin &&isNotAuthPages?< UserSitting  />:<  AuthSitting/>}
         <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Icon position='relative'
            handleClick={() => {handleChangeAnyPropertyComponent(!isMobileMenuOpen,setIsMobileOpen)}}
            childern={<MoreVertIcon />} href={''}                 />
                {isMobileMenuOpen&&MobileMenu}
            </Box>
      </Toolbar>
    </AppBarContineer>

  )
}

export default Header;



