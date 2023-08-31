import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { coursesActionsExcution } from '../../redux/actions/courses.action';
import { AppState } from '../../redux/store';
import CoursesContineer from '../../components/CoursesContineer';
import { CourseData } from '../../@types';
import Loading from '../../components/Loading';

const Courses = () => {
  const {data}=useSelector((state:AppState)=>state.courses)

  const dispatch=useDispatch();

  useEffect(()=>{
          coursesActionsExcution(dispatch);
  },[])
  return (
    <>
       {data.length?<CoursesContineer courses={data}/>:<Loading/>}
    </>
  )
}

export default Courses
