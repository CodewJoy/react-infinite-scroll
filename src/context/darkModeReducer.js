const DarkModeReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case "TOGGLE": 
            console.log('state', state)
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        // default:
        //     return state;
    }
    throw Error('Unknown action: ' + action.type);
};

export default DarkModeReducer;