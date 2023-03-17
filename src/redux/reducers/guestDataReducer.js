
const guestDataReducer = (state = [{}], action) => {
    switch (action.type) {

        case "GUESTDATA":
            return action.guestDataState;
        default: return state;
    }
};


export default guestDataReducer;