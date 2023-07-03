import React ,{Suspense, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { courseDetailesActionsExcution } from '../../redux/actions/courseDetalies.action';
import { AppState } from '../../redux/store';
import { Icourse } from '../../@types';

const CoursDetalies = () => {
  const {courseDetalies}=useSelector((state:AppState)=>state.courseDetalies)
  const {id}=useParams();
  const dispatch=useDispatch();
  console.log(id,courseDetalies)
  useEffect(()=>{
  //get courses data
  courseDetailesActionsExcution(dispatch,id as string);
  },[])
  return (
    <>
          <a href='/courses'>back to courses </a>
          <div>
       <img src={courseDetalies.attributes.avatar} width={200} height={200} />
       <h2>{courseDetalies.attributes.name}</h2>
       <p>{courseDetalies.attributes.description}</p>
       <button>book now</button>
    </div>
    </>

  )
}

export default CoursDetalies
