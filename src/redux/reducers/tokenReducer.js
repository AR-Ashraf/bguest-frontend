const tokenReducer = (state = null, action) => {
    switch (action.type) {

        case "TOKEN":
            return action.tokenState;
        default: return state;
    }
};


export default tokenReducer;