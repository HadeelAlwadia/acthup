import React from 'react';
import {RouterProvider}from 'react-router-dom'
import routers from './routes';
import { useTranslation } from 'react-i18next';
function App() {
   const [t,i18]=useTranslation()
  return (
       <>
       <RouterProvider router={routers}/>     
      <button onClick={()=>console.log(i18)}>{       t('name')}</button> 
       </>
  );
}

export default App;
