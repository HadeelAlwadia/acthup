import React from 'react'
import { Box, FlexBox, GridBox } from '../Common/CustamizeComponent/index.style'
import { Divider } from '@mui/material'
import { CollectionsProperties } from '../../@types'
import {  Title } from "../Common/CustamizeComponent/index.style";

const Collections = ({name,childern,pathOfLink,sx,sxChildern}:CollectionsProperties) => {
  return (
 
<Box height={sx.height} width='100%' background={sx.background} border={sx.border} padding={sx.padding} >
      <Title>{name}</Title>
      <Divider/>
      <GridBox height={sxChildern.height} width={sxChildern.width} gridTemplateColumns={sxChildern.gridTemplateColumns} margin={sxChildern.margin} >
        {childern}
 </GridBox>
</Box>
)
} 

export default Collections
