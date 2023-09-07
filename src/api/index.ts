import { getUsetInfoFromCookie, userData } from '../utils/functionlty';
import { stringValue } from './../@types/index';
import  axios from "axios";
const token= userData.token;
const baseURL='https://act-hub.actit.ps/api/auth/user'
const headers=token?{'Authorization':` Bearer ${token}`}:{'Authorization':""}
const config={headers,baseURL}
const fetchData=axios.create(config)
console.log(token)
export const Api={
 get:(url:stringValue)=>{
   return  fetchData.get(url)
},

post(url:stringValue,body:any){
   return fetchData.post(url,body)
},
put(url:stringValue,body:any){
   return fetchData.put(url,body)

},
delete( url:stringValue){
   return fetchData.delete(url)

}
}
