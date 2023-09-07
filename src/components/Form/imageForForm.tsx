import React from 'react'
import { ImageContineer } from './Form.style';
import { stringValue } from '../../@types';

//const widthOfScreen=window.innerWidth>=360

const ImageForForm = ({img}:{img:stringValue}) => {
  return (
    <>
     { <ImageContineer>
<img src={img} alt='signin image' width={'100%'} height={'100%'}/>

</ImageContineer>}   
    </>

  )
}

export default ImageForForm;
