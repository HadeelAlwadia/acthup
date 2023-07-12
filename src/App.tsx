import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './store';
import { darkTheme, lightTheme } from './theme';
import Header from './components/common/Header';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import RootRoutes from './routes/RootRoutes';
import Loading from './components/Loading';
function App() {
   
   const { theme, language }=useSelector((state: AppState):AppState => state);

   useEffect(() => { 
      localStorage.setItem('theme', theme); 
   localStorage.setItem('lang', language);
 
 }, [theme, language])

   return (

      <>  
         <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <I18nextProvider i18n={{...i18n,language:language}}>
            <Header />
            <RouterProvider router={RootRoutes} />
            </I18nextProvider>
         </ThemeProvider>
      </>
   );
}

export default App; 

