import React from 'react'
import { Avatar} from '@mui/material'
import { Category } from '../../@types'
import { Box, BtnLink, InfoTilte } from '../Common/CustamizeComponent/index.style'
import { goToAntherPage } from '../../utils/functionlty'


const Catergory = ({id,attributes}:Category) => {
  return ( 

  <Box height={'100px'}   flexGrow='1' key={id} border='1px solid rgba(250,250,250,0.3)' borderRedius='12px' onClick={()=>goToAntherPage(`category/${id}`)} >
     <Avatar
        alt="Remy Sharp"
        src={attributes.icon}
        sx={{ width: 40, height: 40,margin:'auto'}}
      />
      <InfoTilte>{attributes.name}</InfoTilte>
  </Box>

  
     
  )
}

export default Catergory;
 