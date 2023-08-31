import { styled ,Link, IconButton, Button, CircularProgress} from "@mui/material";
import { BoxProperty, FlexBoxProperty, GridBoxProperty, stringValue,TilteProperty,ImgProperty } from "../../../@types";

  const Main=styled('main')(({theme})=>({
    width:'100%',
    height:'600px',
    background:theme.palette.background.default
}))

 const LinkComp=styled(Link)(({theme})=>({ 
  color:theme.palette.primary.contrastText
}))
const Box=styled('section')<BoxProperty>((props)=>({
  cursor:'pointer',
  dispaly:'flex',
  flexDirection:'column',
  height: props.height,
  width:props.width,
  background:props.background||props.theme.palette.background.default,
  flexGrow:props.flexGrow||'auto',
  padding: props.padding||'20px 13px',
  textAlign:props.textAlgim||'center',
  margin:props.margin||'',
  border:props.border||`none`,
  borderRadius:props.borderRedius||'',

  '&:hover':{
    
  },
  '& >*':{
marginBottom:'5px'
  }
  }))

const FlexBox=styled(Box)<BoxProperty>((props)=>({
display:'flex',
flexDirection:'row'
}))
const Img=styled('img')<ImgProperty>((props)=>({
   borderRadius:props.borderRadius||''
  }))
  
  const GridBox=styled(Box)<GridBoxProperty>((props)=>({
display:'grid',
gridGap: '10px',
gridTemplateColumns:props.gridTemplateColumns||'',
margin:props.margin||'',
[props.theme.breakpoints.down("lg")]: {
  gridTemplateColumns: "auto auto",
},
[props.theme.breakpoints.down("md")]: {
  gridTemplateColumns: "auto ",
}

}))


const Btn=styled(Button)(({ theme }) => ({
backgroundColor:theme.palette.secondary.main,
  color:theme.palette.secondary.contrastText,
  
  padding:'10px 25px',
  transition: 'backgroundColor 2s ease-in-out .5s',
  "&:hover":{
    backgroundColor:theme.palette.secondary.main,
    opacity:0.8
  }
  })) 


const InfoTilte=styled("p")<TilteProperty>((props) => ({
color:props.theme.palette.text.primary,
textAlign:'center',
direction:'rtl',
fontSize:props.size||'15px'
}))




const Progress=styled('button')(({theme})=>({
  height:' 40px',
  width: '40px',
  background:' inherit',
  borderRadius: '50%',
  borderTop:' 2px solid #000',
  borderRight: '2px solid transparent',
  borderBottom:'none',
  borderLeft:'none',
  animation: 'spinner5 700ms linear infinite',
  "@keyframes spinner5 ":{
    "to": {
    transform:" rotate(360deg)"
    }
    }
}))
  const Menu = styled("section")(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: "7px",
    position: "absolute",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.black,
    top: "50px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
interface BtnLinkProperty{
  border?:stringValue
  color?:stringValue
  background?:stringValue
  padding?:stringValue
}
  const BtnLink = styled("a")<BtnLinkProperty>((props) => ({
    textDecoration:'none',
  border:props.border||'none',
  color:props.color||props.theme.palette.common.black,
  background:props.background||props.theme.palette.secondary.main,
  padding:props.padding||'8px 15px',
  borderRadius:'8px',
  display:'inline-block',
  cursor:'pointer'
  }))

  const Flex = styled("section")(() => ({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start'
  }))

  const Title=styled('h4')(({ theme }) => ({
    color:theme.palette.text.secondary,
    textTransform:'capitalize',
    textAlign:"center"
   
   }))
export{
  Flex,
  BtnLink,
    Main,LinkComp,Menu,
    FlexBox,
    Box,
    Btn,
    InfoTilte,
    Progress,
    GridBox,
    Img,
    Title
}