const menuReducer = (state = false, action) => {
    switch (action.type) {

        case "MENU":
            return action.menuState;
        default: return state;
    }
};


export default menuReducer;