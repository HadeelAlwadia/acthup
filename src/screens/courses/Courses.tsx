import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { coursesActionsExcution } from '../../redux/actions/courses.action';
import TitleOfSection from '../../components/TitleOfSection';
import CoursesContineer from '../../components/coursesContineer';

const Courses = () => {

  const dispatch=useDispatch();
  useEffect(()=>{
  //get courses data
  coursesActionsExcution(dispatch);
  },[])
  return (
    <>
   <TitleOfSection/>
   <CoursesContineer/>
    </>
  )
}

export default Courses
