const dateViewReducer = (state = false, action) => {
    switch (action.type) {

        case "DATE_VIEW":
            return action.dateViewState;
        default: return state;
    }
};


export default dateViewReducer;