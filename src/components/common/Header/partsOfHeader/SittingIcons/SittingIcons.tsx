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
                    edge="end"
                    aria-label="theme of current user"
                    aria-haspopup="true"
                    onClick={() => { }}
                    color="inherit"
                    sx={{ marginRight: 10 }}
                >
                    <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0, 0, 400,200"><g id="svgg"><path id="path0" d="M89.307 66.812 C 89.379 66.928,99.285 74.407,111.319 83.432 C 123.354 92.456,133.200 99.912,133.200 100.000 C 133.200 100.088,123.345 107.550,111.300 116.583 C 99.255 125.615,89.400 133.049,89.400 133.102 C 89.400 133.156,159.285 133.200,244.700 133.200 L 400.000 133.200 400.000 99.900 L 400.000 66.600 244.588 66.600 C 135.225 66.600,89.215 66.663,89.307 66.812 " stroke="none" fill="#fbfbfb" fill-rule="evenodd"></path><path id="path1" d="M0.407 0.272 C 0.568 0.422,20.526 15.407,44.758 33.572 L 88.815 66.600 244.408 66.600 L 400.000 66.600 400.000 33.300 L 400.000 0.000 200.057 0.000 C 31.405 0.000,0.160 0.043,0.407 0.272 " stroke="none" fill="#d31434" fill-rule="evenodd"></path><path id="path2" d="M0.000 100.006 L 0.000 200.001 44.450 166.665 C 68.898 148.331,88.990 133.225,89.100 133.097 C 89.210 132.969,99.134 125.497,111.154 116.493 C 123.173 107.488,132.983 100.049,132.953 99.960 C 132.897 99.792,119.309 89.569,44.421 33.356 L 0.000 0.011 0.000 100.006 " stroke="none" fill="#04732b" fill-rule="evenodd"></path><path id="path3" d="M44.600 166.526 C 20.345 184.729,0.414 199.708,0.310 199.811 C 0.191 199.930,74.867 200.000,200.060 200.000 L 400.000 200.000 400.000 166.700 L 400.000 133.400 244.350 133.415 L 88.700 133.429 44.600 166.526 " stroke="none" fill="#040404" fill-rule="evenodd"></path><path id="path4" d="M88.600 66.467 C 88.600 66.530,89.343 67.141,90.250 67.824 C 91.158 68.506,92.013 69.151,92.150 69.257 C 92.288 69.363,92.400 69.404,92.400 69.349 C 92.400 69.294,91.713 68.720,90.874 68.074 C 88.763 66.450,88.600 66.335,88.600 66.467 M95.563 71.767 C 95.928 72.088,96.648 72.639,97.163 72.991 C 97.879 73.481,97.959 73.508,97.500 73.108 C 97.170 72.820,96.450 72.269,95.900 71.884 C 95.074 71.305,95.015 71.285,95.563 71.767 M101.963 76.567 C 102.328 76.888,103.048 77.439,103.563 77.791 C 104.279 78.281,104.359 78.308,103.900 77.908 C 103.570 77.620,102.850 77.069,102.300 76.684 C 101.474 76.105,101.415 76.085,101.963 76.567 M107.800 80.868 C 107.800 80.963,111.036 83.466,112.200 84.271 C 113.083 84.881,111.710 83.723,110.100 82.500 C 109.110 81.748,108.188 81.047,108.050 80.942 C 107.913 80.837,107.800 80.804,107.800 80.868 M115.563 86.767 C 115.928 87.088,116.648 87.639,117.163 87.991 C 117.879 88.481,117.959 88.508,117.500 88.108 C 117.170 87.820,116.450 87.269,115.900 86.884 C 115.074 86.305,115.015 86.285,115.563 86.767 M121.963 91.567 C 122.328 91.888,123.048 92.439,123.563 92.791 C 124.279 93.281,124.359 93.308,123.900 92.908 C 123.570 92.620,122.850 92.069,122.300 91.684 C 121.474 91.105,121.415 91.085,121.963 91.567 M127.800 95.868 C 127.800 95.963,131.036 98.466,132.200 99.271 C 133.083 99.881,131.710 98.723,130.100 97.500 C 129.110 96.748,128.188 96.047,128.050 95.942 C 127.913 95.837,127.800 95.804,127.800 95.868 M132.785 99.650 C 133.003 99.940,133.003 100.060,132.785 100.350 C 132.534 100.683,132.540 100.683,132.904 100.350 C 133.280 100.006,133.280 99.994,132.904 99.650 C 132.540 99.317,132.534 99.317,132.785 99.650 M130.050 102.308 C 128.813 103.244,127.800 104.063,127.800 104.129 C 127.800 104.195,127.913 104.163,128.050 104.058 C 128.188 103.953,129.110 103.252,130.100 102.500 C 131.964 101.084,132.552 100.597,132.393 100.604 C 132.342 100.606,131.287 101.373,130.050 102.308 M122.850 107.710 C 122.053 108.317,121.400 108.855,121.400 108.906 C 121.400 109.012,122.999 107.866,123.900 107.115 C 124.976 106.217,124.334 106.581,122.850 107.710 M116.450 112.510 C 115.653 113.117,115.000 113.655,115.000 113.706 C 115.000 113.812,116.599 112.666,117.500 111.915 C 118.576 111.017,117.934 111.381,116.450 112.510 M110.050 117.308 C 108.813 118.244,107.800 119.063,107.800 119.129 C 107.800 119.195,107.913 119.163,108.050 119.058 C 108.188 118.953,109.110 118.252,110.100 117.500 C 111.964 116.084,112.552 115.597,112.393 115.604 C 112.342 115.606,111.288 116.373,110.050 117.308 M102.850 122.710 C 102.053 123.317,101.400 123.855,101.400 123.906 C 101.400 124.012,102.999 122.866,103.900 122.115 C 104.976 121.217,104.334 121.581,102.850 122.710 M96.450 127.510 C 95.653 128.117,95.000 128.655,95.000 128.706 C 95.000 128.812,96.599 127.666,97.500 126.915 C 98.576 126.017,97.934 126.381,96.450 127.510 M90.700 131.815 C 89.820 132.478,89.070 133.106,89.033 133.210 C 88.991 133.330,146.379 133.382,244.533 133.350 L 400.100 133.300 244.700 133.200 L 89.300 133.100 90.850 131.926 C 92.193 130.909,92.562 130.583,92.350 130.605 C 92.323 130.608,91.580 131.153,90.700 131.815 " stroke="none" fill="#5ca474" fill-rule="evenodd"></path></g></svg>

                </IconButton>
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

