import React from 'react'

import CardContineer from '../Common/Card'
import { Typography } from '@mui/material'
import { ResourceData } from '../../@types'
import {
  Box,
  FlexBox,
  Img,
  InfoTilte,
  Title
} from '../Common/CustamizeComponent/index.style'
import { goToAntherPage } from '../../utils/functionlty'

const Resource = ({ id, attributes }: ResourceData) => {
  return (
    <FlexBox
      height={'230px'}
      key={id}
      onClick={() => goToAntherPage(`/workspaces/${id}`)}
      borderRedius='14px'
      border={'1px solid rgba(250,250,250,0.3)'}
      style={{position:'relative'}}
    >
      <Img
        borderRadius='14px'
        alt='Remy Sharp'
        src={attributes.thumbnail_image}
        width={'95%'}
        height={'95%'}
        style={{margin:'0 auto'}}

      />
      <Box background='rgba(0,0,0,0.5)' style={{position:'absolute',width:'100%',top:'0',left:'0',height:'100%',paddingTop:'20%'}}>
        <Title>{attributes.name}</Title>
        <InfoTilte>{attributes.description}</InfoTilte>

      </Box>
    </FlexBox>
  )
}

export default Resource
