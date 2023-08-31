import React from 'react'
import { Box, BtnLink, Img, InfoTilte } from '../components/Common/CustamizeComponent/index.style'

const Error = () => {
  return (<Box background='white' height='80vh'>
       <h1 className="text-center ">404</h1>
    
      <Img src='/errorPage.gif' alt='not font page' width={'40%'} height={'60%'}/>
      <div>
      <h4>
      Look like you're lost
      </h4>
      
      <p>the page you are looking for not avaible!</p>
      
      <BtnLink  href="/" className="link_404" >Go to Home</BtnLink>
    </div>
  </Box>

  )
}

export default Error
