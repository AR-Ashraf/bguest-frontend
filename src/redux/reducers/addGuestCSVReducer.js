const addGuestCSVReducer = (state = false, action) => {
    switch (action.type) {

        case "ADD_GUEST_CSV":
            return action.addGuestCSVState;
        default: return state;
    }
};


export default addGuestCSVReducer;