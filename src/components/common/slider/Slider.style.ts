import { styled } from '@mui/material/styles';

const SliderContineer=styled('div')(({ theme }) => ({
  width: '100%',
  aspectRatio:'16/9',
  height: '400px',
  overflow: 'hidden',
  position: 'relative'
  }));

  const Slide=styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    left:0,
    top:0,
    background:'rgba(0,0,0,0.5) ',
    textAlign:'center',
    paddingTop:'10%'
  }));

  const SlideImage=styled('img')(({ theme }) => ({
 width: "100%",
    height: "100%",
    objectFit: 'cover',
  }));




  const MoveBtnContineer=styled('section')(({ theme }) => ({
    width:'100%',
    position:'absolute',
    display:'flex',
    justifyContent:'space-between',
    top:'50%',
    left:'0',
  }))


  export{
    SliderContineer,
    Slide,
    SlideImage,
    MoveBtnContineer
  }