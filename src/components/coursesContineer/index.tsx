import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import Course from './Course';
import { Icourse } from '../../@types';
import { Grid } from '@mui/material';

const CoursesContineer = () => {
  const {courses}=useSelector((state:AppState)=>state.courses)
  return (
    <Grid container spacing={{ xs: 5, md: 3 }} columns={{ xs: 1, sm: 1, md: 2 }} margin={'20px'}>
    {courses.map((course:Icourse) => (<Course course={course} key={course.id}/>))}

</Grid>

  )
}

export default CoursesContineer;

