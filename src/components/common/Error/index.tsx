import React, { ReactElement } from 'react'
import { String } from '../../../@types'
import { Box, Btn, Img, InfoTilte } from '../CustamizeComponent/index.style'
import { generalDataActionsExcution } from '../../../redux/actions/generalData.action'
import Loading from '../../Loading'

const getChildernByErrorName = (
  error: String,
  dispatch?: any
): ReactElement => {
  let childern = <></>

  switch (error.toLowerCase()) {
    case 'network error': {
      childern = (
        <Box height='60vh' background='white' width='20%'>
          <Img src='./network-error.webp' />
          <InfoTilte>network error</InfoTilte>
          <Btn onClick={() => generalDataActionsExcution(dispatch)}>
            reload
          </Btn>
        </Box>
      )
      return childern
    }
    case 'Unauthenticated': {
      window.location.href = '/auth/login'
      return childern
    }
    default: {
      return childern
    }
  }

  return childern
}

const Error = ({
  errorName,
  dispatch
}: {
  errorName: String
  dispatch?: any
}) => getChildernByErrorName(errorName, dispatch)


export default  Error;




