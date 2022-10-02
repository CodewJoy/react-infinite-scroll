import { createContext, useReducer, useContext } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
    darkMode: false,
  };
  
export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            { children }
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const { darkMode } = useContext(DarkModeContext);
    return darkMode;
}

export const useDispatchDarkMode = () => {
    const { dispatch } = useContext(DarkModeContext);
    return dispatch;
}