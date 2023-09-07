import { Button, Paper, TextField, Typography, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { stringValue } from "../../@types";
import { Btn, Title } from "../Common/CustamizeComponent/index.style";


interface IItem{
  margin?:stringValue
}
const Item = styled('section')<IItem>((props) => ({
    margin:props.margin||'0',
    boxShadow:'none',
    backgroundColor: props.theme.palette.background.default,
     padding:props. theme.spacing(1),
    color: props. theme.palette.text.secondary,
    width:"55%",
    borderRadius:0,
    [props. theme.breakpoints.down('md')]: {
      width:'100%'
  }
  }));


const ImageContineer=styled(Item)(({ theme }) => ({ 
  width:'45%',
    [theme.breakpoints.down('md')]: {
      display:'none'
  }
}))



interface IForm{
  textAlign?:'center'|'left'|'right'
}
  const Form=styled('form')<IForm>((props) => ({ 
    margin: '30px auto',
    width: '100%',
    maxWidth: '414px',
    padding:' 1.3rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign:props.textAlign||'left',
   height:'100%'
  
    }))

 
    const SubmitBtn=styled(Btn)(({ theme }) => ({ 
   margin:'8px auto'
  
    }))


   const TilteOfForm=styled(Title)(({ theme }) => ({ 
    fontSize:'20px',
    textTransform:"capitalize"
   
    }))

    
    const Input=styled(TextField)(({ theme }) => ({ 
      borderRadius:'10px',
      "&:hover" : {
      },

  
      }))
      const OtpInput= styled('input')<{active:boolean}>((props) => ({ 
        width: '40px',
        height: '60px',
        textAlign: 'center',
        background:props.theme.palette.background.default,
        border:props.theme.shadows[8],
        marginRight:'9px',
        color:props.theme.palette.text.primary,
        borderBottom:props.active? '1px solid blue' :''
       
      }))
  
export{Item,ImageContineer,Form,TilteOfForm,SubmitBtn,Input,OtpInput}
