
const currentGuestReducer = (state = [{}], action) => {
    switch (action.type) {

        case "CURRENT_GUEST":
            return action.currentGuestState;
        default: return state;
    }
};


export default currentGuestReducer;