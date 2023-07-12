import React from 'react'
import { Badge, IconButton, Box, Link } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../../redux/store';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';



const SittingIcons = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state: AppState): AppState => state);

    const handleMobileMenuOpen = () => {

    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={() => { }}
                    color="inherit"
                >
                    <AccountCircleIcon />
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Link href='/notifactions'>
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon sx={{ color: 'white' }} />
                        </Badge></Link>
                </IconButton>


                <IconButton
                    size="large"
                    edge="end"
                    aria-label="theme of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={() => { }}
                    color="inherit"
                >
                    {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>




            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={() => { handleMobileMenuOpen() }}
                    color="inherit"
                >
                    <MoreVertIcon />
                </IconButton>
            </Box>
        </>
    )
}

export default SittingIcons;

