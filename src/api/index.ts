import axios, { Axios } from "axios";
const token= document.cookie?document.cookie.split(";")[0].split('=')[0]:"";
const baseURL='https://act-hub.actit.ps/api/auth/user/';
const headers=token?{'Authorization':token}:{}
const fetchData=new Axios({baseURL,headers})

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
