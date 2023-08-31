import React from 'react'
import Course from './Course'
import { CourseData } from '../../@types'
import Collections from '../Layout/collections'

const CoursesContineer = ({ courses }: { courses: CourseData[] }) => {
  return (
    <Collections
      name={'courses'}
      sx={{}}

      sxChildern={{margin:'20px auto',width:"75%",gridTemplateColumns:'auto auto auto'}} 
            childern={
        <>
          {courses.map((course: CourseData) => (
            <Course {...course}
              key={course.id}
            />
          ))}
        </>
      }
    />
  )
}

export default CoursesContineer
