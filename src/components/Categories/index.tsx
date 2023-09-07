import React from 'react'
import { Category } from '../../@types'
import Collections from '../Layout/collections'
import Catergory from './Catergory'

const Catergories = ({ catergories }: { catergories: Category[] }) => {
  return (
    <Collections
      name={'catergories of the month'}
      childern={<>
        {catergories.map((category: Category) => (
          <Catergory {...category} />
        ))}
      </>}
      sx={{ }}

       sxChildern={{margin:'20px auto',width:"60%",gridTemplateColumns:'auto auto auto auto auto'}}    />
  )
}

export default Catergories
