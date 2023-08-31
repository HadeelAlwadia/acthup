import React from 'react'
import { IconProperty, MenuItemProperty, stringValue } from '../../../@types'
import { Divider, IconButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import { Menu } from './index.style'

const Icon = ({
    position='static',
  href,
  size = 'large',
  edge,
  ariaLabale,
  childern,
  handleClick
}: IconProperty) => (
  <IconButton
  sx={{position:position}}
    href={href}
    size={size}
    edge={edge}
    color='inherit'
    aria-label={ariaLabale}
    onClick={handleClick}
  >
    {childern}
  </IconButton>
)





const MenuList = ({ itemsOfMenu }: { itemsOfMenu: MenuItemProperty[] }) => (
  <Menu>
    {itemsOfMenu.map((item,index) => (
      <>
      {index===itemsOfMenu.length-1&&<Divider/>}
          <MenuItem  onClick={()=>item.handleClick?item.handleClick(item.name):''}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText >{item.name}</ListItemText>
        </MenuItem>
      </>
    ))}
  </Menu>
)
export { Icon,MenuList }
