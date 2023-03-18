const addGuestFormReducer = (state = false, action) => {
    switch (action.type) {

        case "ADD_GUEST_FORM":
            return action.addGuestFormState;
        default: return state;
    }
};


export default addGuestFormReducer;