import { ReactComponent as LightIcon } from './../images/light.svg';
import { ReactComponent as DarkIcon } from './../images/dark.svg';
import { useDispatchDarkMode, useDarkMode } from './../context/darkModeContext';

function Topbar() {
    const dispatch = useDispatchDarkMode();
    const darkMode = useDarkMode();
    return (
        <div className="topbar">
            <p>React Infinite Scroll</p>
            <div className="dark_mode_icon" onClick = {() => dispatch({ type: "TOGGLE" })}>
                {darkMode ? <DarkIcon /> : <LightIcon />}
            </div> 
        </div>
    );
}

export default Topbar;