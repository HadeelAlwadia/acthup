import { createAsyncThunk } from "@reduxjs/toolkit"
import { Api } from "../../api"
import { constantsCourses } from "../constants/courses.constants"
import {actions as  coursesActions} from '../reducers/courses.reducers'

/*const coursesActions={
  startGetCourses:()=>({type:constantsCourses.START_GET_COURSES}),
  successGetCourses:(payload:any)=>({type:constantsCourses.SUCCESS_GET_COURSES,payload}),
  failGetCourses:(payload:string)=>({type:constantsCourses.FAIL_GET_COURSES,payload}),
}*/



export const coursesActionsExcution=async(dispatch:any)=>{
    dispatch(coursesActions.start())
       try{
         const {data}=(await Api.get('/courses')).data;
         dispatch(coursesActions.success(data))
        }
        catch(error:any){
        dispatch(coursesActions.start(error?.response?.data?.message || error.message))
       } 
}


export const coursesActionsExcution1 = createAsyncThunk('courses/getCourses', async () => {
        const {data}=(await Api.get('/courses')).data;
       return data

})


export const getCourses=()=> createAsyncThunk(
  `getCourses`,
  async () => await Api.get('/courses')
);






 








