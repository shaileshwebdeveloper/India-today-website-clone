import { createContext} from "react";
import {useNavigate} from 'react-router-dom';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();

    const navigateSignIn = () => {
        // 👇️ navigate to /
        navigate('/sign-in');
      };
    
      const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };

      


  return (
    <AppContext.Provider value={{navigateHome, navigateSignIn}}>
      {children}
    </AppContext.Provider>
  );
};
