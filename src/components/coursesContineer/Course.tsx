import { Rating } from '@mui/material'
import { CourseData } from '../../@types'
import { Box, Flex, InfoTilte } from '../Common/CustamizeComponent/index.style'
import { goToAntherPage } from '../../utils/functionlty'
import {  Title } from "../Common/CustamizeComponent/index.style";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Icon } from '../Common/CustamizeComponent';
const Course = ({ id, attributes }: CourseData) => {
  return (
    <Box 
    padding='10px 20px'
    style={{position:'relative',margin:'0 auto'}}
    border='1px solid rgba(245, 230, 83,0.2)' borderRedius='10px'
      height={'230px'}
      flexGrow='1'
      textAlgim='left'
      onClick={() => goToAntherPage(`/courses/${id}`)}
    >
      <img
        alt='Remy Sharp'
        src={attributes.avatar}
        width={'96%'}
        height={'90%'}
        style={{margin:'0 auto',borderRadius:'5px'}}
        
      />
      <Flex >
        <Rating value={attributes.rate} readOnly />

        <InfoTilte size='15px'>{attributes.price}</InfoTilte>

      </Flex>
      <Box background='rgba(0,0,0,0.1)' width='100%'height='100%' style={{position:'absolute',left:0,top:'0',display:'none'}} >
      <Title >{attributes.name}</Title>
      <InfoTilte size='13px'>{attributes.description}</InfoTilte>
      </Box>
  
    </Box>
  )
}
export default Course
