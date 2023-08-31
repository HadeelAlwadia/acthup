import React, { useEffect ,createContext} from 'react';
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import {useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './theme';
import Header from './components/Common/Header';
import RootRoutes from './routes/RootRoutes';
import { AppState } from './redux/store';
import Footer from './components/Common/Footer';
import { storeDataInStorage } from './utils/functionlty';


function App() {
   const storeProvilder=createContext({
      
   })
   const { theme} = useSelector((state: AppState): AppState => state);

   useEffect(() => {
      storeDataInStorage('theme', theme);
   }, [theme])
   return (
      <storeProvilder.Provider value={{courses:[]}}>
         <ThemeProvider theme={theme === 'dark'?darkTheme:lightTheme }>
          <Header />
            <RouterProvider router={RootRoutes} />
         <Footer/>
         </ThemeProvider>
      </storeProvilder.Provider>
   );
} 
export default App;

 