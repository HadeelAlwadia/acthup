import { Alert } from '@mui/material';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { themeReducer } from "./Theme.reducer";
import { courseDetaliesReducer } from "./courseDetaliesReducer";
import {reducer as coursesReducer } from "./courses.reducers";
import { generalDataReducer } from "./generalData.reducers";
import axios from "axios";
import { signUpReducer } from "./signUp.reducer";
import { verifiedEmailReducer } from "./verifiedEmail.reducer";
import { loginReducer } from "./login.reducer";
import { userDataReducer } from "./userData.reducer";
import { Api } from "../../api";

const getCourses=createAsyncThunk('getCourses',async({})=>{
    return 'hadeel'
})

console.log(getCourses())


const faceCoursesSlices=createSlice({name:'courses',initialState:[],reducers:{},
extraReducers:{
    'getUsers/panding':(state)=>({...state,loading:true}),
    'getUsers/fullfid':(state:any,{payload})=>({...state,user:payload,loading:false}),
    'getUser/reject':(state:any,{payload})=>({...state,error:payload,data:[]})
}})


export const reducer={ 
    theme:themeReducer,
    courses:coursesReducer,
    courseDetalies:courseDetaliesReducer,
    generalData:generalDataReducer,
    sigUpInfo:signUpReducer,
    verifiedEmailInfo:verifiedEmailReducer,
    loginInfo:loginReducer,
    userData:userDataReducer,
    fakeCourses:faceCoursesSlices.reducer
}


export const getUsers=createAsyncThunk(
    `getCourses`,
    async () => await Api.get('/courses')
);

  
  



















