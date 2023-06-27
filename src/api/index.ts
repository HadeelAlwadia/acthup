import  axios from "axios";
const token= document.cookie?document.cookie.split(";")[0].split('=')[0]:"";
const baseURL='https://act-hub.actit.ps/api/auth/user';
const headers=token?{'Authorization':token}:{'Authorization':'Bearer 18|EoY5URHrsJhVCapFiyfXgeGhY7uYz0p0H0keD6sw'}
console.log(headers)
const config={headers,baseURL}
const fetchData=axios.create(config)

export const Api={
 get:(url:string)=>{
   return  fetchData.get(url)
},

post(){

},
put(){

},
delete(){

}
}
