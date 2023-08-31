import { styled } from '@mui/material/styles';

const SliderContineer=styled('div')(({ theme }) => ({
  width: '100%',
  aspectRatio:'16/9',
  height: '500px',
  overflow: 'hidden',
  position: 'relative'
  
  }));

  const Slide=styled('div')(({ theme }) => ({
    position: 'absolute',
    width:'100%',
    height:'100%',
    left:'0',
    top:'0',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0.4)',
    paddingTop:'200px'
  }));

  const SlideImage=styled('img')(({ theme }) => ({
 width: "100%",
    height: "100%",
    objectFit: 'cover',
  }));




  const MoveBtnContineer=styled('section')(({ theme }) => ({
    marginTop:'10px',
     cursor:'pointer'
  }))

  const MoveBtn=styled('span')(({ theme }) => ({
    margin:'auto 4px',
    display:'inline-block',
   width:'10px',
   height:'10px',
   background:'#FFD93D',
   borderRadius:'50%'
  }))



  export{
    SliderContineer,
    Slide,
    SlideImage,
    MoveBtnContineer,
    MoveBtn
  }