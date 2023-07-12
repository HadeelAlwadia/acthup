import { Link } from '@mui/material'
import React, { useEffect } from 'react'
import Slider from '../components/common/slider'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../redux/store'
import { generalDataActionsExcution } from '../redux/actions/generalData.action'


const Home = () => {
 const {generalData}=useSelector((state:AppState)=>state.generalData);

const dispatch=useDispatch()
 console.log(generalData);
 useEffect(()=>{generalDataActionsExcution(dispatch)},[])
  return (
   <>
    {generalData? <Slider Sliders={generalData.sliders}  /> :''}
    
   </>
  )
}
/*   <Slider images={[apparray[0]]}/>*/

export default Home;

