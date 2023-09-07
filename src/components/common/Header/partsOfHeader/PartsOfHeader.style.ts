import { AppBar, IconButton, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

// this componet to search part in header

const SearchIconWrapper = styled("div")(({ theme }) => ({
  
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchContineer = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.25),
  color:theme.palette.common.white,
  border:'1px solid rgba(250,250,250,0.3)',
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.35),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));


export const MoblieMenuContineer = styled("section")(({ theme }) => ({
  background:theme.palette.background.default,
  color:theme.palette.text.primary,
  position:'fixed',
  top:0,
  left:0,
  width:'100vw',
  height:'100vh',
  transitionProperty:'all'
}))



const AppBarContineer = styled(AppBar)(({ theme }) => ({
  backgroundColor:theme.palette.background.paper,

  flexGrow: 1,
  position: "sticky",
  top: 0,
  height: "55px",
  padding: "0 10%",
  [theme.breakpoints.down("sm")]: {
    padding: "0 1%",
  },
  boxShadow: `inset 0px -1px 1px ${theme.palette.info.contrastText} `,
}));

const Icon = styled(IconButton)(({ theme }) => ({
padding:'5px 10px'
}));


//032A33
export {
  AppBarContineer,
  SearchContineer,
  StyledInputBase,
  SearchIconWrapper,
  Icon
};
