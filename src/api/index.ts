import  axios from "axios";
import { stringValue } from "../@types";
const token= document.cookie?document.cookie.split(";").find(name=>name.substring(0,8)==='user-data')?.split('=')[1]:"";
console.log(document.cookie.split(','))
const baseURL='https://act-hub.actit.ps/api/auth/user';
const headers=/*token?{'Authorization':token}:*/{'Authorization':"Bearer 18|EoY5URHrsJhVCapFiyfXgeGhY7uYz0p0H0keD6sw"}
console.log(headers)
const config={headers,baseURL}
const fetchData=axios.create(config)

export const Api={
 get:(url:stringValue)=>{
   return  fetchData.get(url)
},

post(url:stringValue,body:any){
   return fetchData.post(url,body)
},
put(){

},
delete(){

}
}
