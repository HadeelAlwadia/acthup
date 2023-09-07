import React ,{ useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { courseDetailesActionsExcution } from '../../redux/actions/courseDetalies.action';
import { AppState } from '../../redux/store';
import { Box, Btn, InfoTilte } from '../../components/Common/CustamizeComponent/index.style';
import Course from '../../components/CoursesContineer/Course';

const CoursDetalies = () => {
  const {courseDetalies}=useSelector((state:AppState)=>state.courseDetalies)
  const {id}=useParams();
  const dispatch=useDispatch();

  useEffect(()=>{
  courseDetailesActionsExcution(dispatch,id as string);
  },[])

  return (
    <>
      <Box >

       <a href='/courses'>back to courses </a>
       <Box width='40%'>
       <img src={courseDetalies.attributes.avatar} width={200} height={200} />
       <InfoTilte>{courseDetalies.attributes.name}</InfoTilte>
       <InfoTilte>{courseDetalies.attributes.description}</InfoTilte>
       <Btn>book now</Btn>
       </Box>
       
  
    </Box>
    </>

  )
}

export default CoursDetalies
