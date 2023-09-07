import React, { useState } from 'react'
import {
  Badge,
  Box,

  } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useDispatch, useSelector } from 'react-redux'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { AppState } from '../../../../redux/store'
import { Icon, MenuList } from '../../CustamizeComponent'
import {
  deleteUserDataFromCookie,
  goToAntherPage,
  handleChangeAnyPropertyComponent,
  userData
} from '../../../../utils/functionlty'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout'
import Brightness6Icon from '@mui/icons-material/Brightness6'
import {  MenuItemProperty, theme } from '../../../../@types'
import { toggleThemeAction } from '../../../../redux/actions/Theme.action'
const menuId = 'primary-search-account-menu'


const themeMenuItems =(handleToggleTheme:any):MenuItemProperty[]=>{

  return( [
  { name: 'dark', icon: <DarkModeIcon /> ,handleClick: handleToggleTheme },
  { name: 'light', icon: <LightModeIcon />,handleClick:handleToggleTheme },
  { name: 'system', icon: <Brightness6Icon />,handleClick:handleToggleTheme }
]
)
}

const UserMenuItems = (handleLogOut:()=>void,handleGoToAntherPage:()=>void):MenuItemProperty[]=>[
  { name: 'profile', icon: <AccountCircleIcon />,handleClick:handleGoToAntherPage },
  { name: 'logout', icon: <LogoutIcon />,handleClick:handleLogOut }
]


const UserSitting = () => {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { theme } = useSelector((state: AppState): AppState => state)
  const dispatch = useDispatch()
  const handleToggleTheme=(value:theme)=>{
    dispatch(toggleThemeAction(value))
   }
const handleLogOut=()=>{
  deleteUserDataFromCookie();
  goToAntherPage('/auth/login')
}
const handleGoToAntherPage=()=>goToAntherPage('/user/profile')

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Icon
        position='relative'
        edge='end'
        aria-label='theme of current user'
        aria-controls={menuId}
        aria-haspopup='true'
        childern={
          <>
            <AccountCircleIcon 
              onClick={() => {
                handleChangeAnyPropertyComponent(
                  !isUserMenuOpen,
                  setIsUserMenuOpen
                )
              }}
            />
            { isUserMenuOpen && <MenuList itemsOfMenu={UserMenuItems(handleLogOut,handleGoToAntherPage)} /> }
          </>
        }
        href={''}
      
      />

      <Icon         
      position='relative'
        href='/notifactions'
        ariaLabale='show user notifications'
        aria-haspopup='true'
        edge='end'
        aria-controls={menuId}

        childern={
          <Badge badgeContent={userData.notification_count} color='error'>
            <ShoppingCartIcon />
          </Badge>
        }
      />

      <Icon
        position='relative'
        edge='end'
        aria-label='theme of current user'
        aria-controls={menuId}
        aria-haspopup='true'
        childern={
          <>
            {theme === 'dark' ? (
              <DarkModeIcon
                onClick={() => { 
                  handleChangeAnyPropertyComponent(
                    !isThemeMenuOpen,
                    setIsThemeMenuOpen
                  )
                }}
              />
            ) : (
              <LightModeIcon
                onClick={() => {
                  handleChangeAnyPropertyComponent(
                    !isThemeMenuOpen,
                    setIsThemeMenuOpen
                  )
                }}
              />
            )}
            {isThemeMenuOpen && <MenuList itemsOfMenu={themeMenuItems(handleToggleTheme)} />}
          </>
        }
        href={''}
      />
    </Box>
  )
}

export default UserSitting


