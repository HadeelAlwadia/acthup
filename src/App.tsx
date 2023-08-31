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

   const { theme} = useSelector((state: AppState): AppState => state);

   useEffect(() => {
      storeDataInStorage('theme', theme);
   }, [theme])
   return (
      <>
         <ThemeProvider theme={theme === 'dark'?darkTheme:lightTheme }>
          <Header />
            <RouterProvider router={RootRoutes} />
         <Footer/>
         </ThemeProvider>
      </>
   );
} 
export default App;

 