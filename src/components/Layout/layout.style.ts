import { styled } from "@mui/material";

const BoxContineer=styled('section')(({theme})=>({
    background:theme.palette.background.default,

    display:'flex',
    '& > *': {
   width:'30%'
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection:'column',
        '& > *': {
            width:'100%'
             }
    }
    }))
    export {
        BoxContineer
    }