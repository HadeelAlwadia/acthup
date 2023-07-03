import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

import React from 'react'
import Search from './partsOfHeader/Search';
import SittingIcons from './partsOfHeader/SittingIcons/SittingIcons';
import { maxHeaderSize } from 'http';
import { memoCom } from '../../../hooks';
import Logo from './partsOfHeader/Logo';

let Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: '0 1%' }}>
        <Toolbar>
       <Logo/>
          <Search />
          <SittingIcons />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default memoCom(Header);



