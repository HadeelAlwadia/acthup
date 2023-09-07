import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../redux/store'
import { generalDataActionsExcution } from '../redux/actions/generalData.action'
import Loading from '../components/Loading'
import Slider from '../components/Common/Slider'
import Catergories from '../components/Categories'
import CoursesContineer from '../components/CoursesContineer'
import Resources from '../components/Resources'
import MainStructureForAnyPage from '../components/Common/Main'

const Home = () => {
  const { generalData, error } = useSelector(
    (state: AppState) => state.generalData
  )
  const dispatch = useDispatch()
  useEffect(() => {
    generalDataActionsExcution(dispatch)
  }, [])
  return (
   MainStructureForAnyPage(error,<>
    <Slider sliders={generalData.sliders} />
    <Catergories catergories={generalData.categories} />
    <CoursesContineer courses={generalData.courses} />
    <Resources resources={generalData.resources} />
  </>,
  Object.keys(generalData).length?true:false,dispatch)
  )
}

export default Home;

