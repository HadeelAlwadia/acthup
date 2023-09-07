import React from 'react'
import { Box, Img, InfoTilte, Title } from '../Common/CustamizeComponent/index.style'
import { UserData } from '../../@types'

const DetaliesOfUser = ({data}:{data:UserData|null}) => {
  return (
    <Box>
      <Img
       src={data?.attributes.avater||'/profile.png'} 
       alt='profile image'
       borderRadius='50%' 
       width={'200px'}
        height={'200px'} 
        />
         <Title>{data?.attributes.name}</Title>
         <InfoTilte>{data?.attributes.email}</InfoTilte>
         <InfoTilte>{data?.attributes.phone}</InfoTilte>
       </Box>
  )
}

export default DetaliesOfUser
