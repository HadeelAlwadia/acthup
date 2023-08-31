import { createSlice } from "@reduxjs/toolkit";
import { CourseData, CourseObject, CoursesObject } from "../../@types";
import { constantsCourses } from "../constants/courses.constants"
import { coursesActionsExcution } from "../actions/courses.action";


const coursesObject:CoursesObject={data:[],error:'',loading:false}

export const coursesReducer1=(initalState=coursesObject,action:any)=>{

 switch(action.type){
    case  constantsCourses.START_GET_COURSES:{
        return {...initalState,loading:true}
        break;
    } 
    case  constantsCourses.SUCCESS_GET_COURSES:{
        return {...initalState,data:action.payload,error:'',loading:false}
        break;
    } 
    case  constantsCourses.FAIL_GET_COURSES:{
        return {...initalState,error:action.payload,loading:false,data:[]}
        break;
    } 
    default:return initalState
 }

}


const coursesSlice=createSlice({
    name:'courses',
    initialState:coursesObject,
    reducers:{
        start:(state:CoursesObject)=>({...state,loading:true,data:[]}),
        success:(state:CoursesObject,action)=>({...state,loading:false,data:action.payload}),
        fail:(state:CoursesObject,action)=>({...state,loading:true,error:action.payload})
    }/*
    extraReducers: {
        [coursesActionsExcution.pending]: (state) => {
          state.loading = true
        },
        [coursesActionsExcution.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.entities = payload
        },
        [getPosts.rejected]: (state) => {
          state.loading = false
        },
      },
      */
})

export  const  {reducer,actions}=coursesSlice
