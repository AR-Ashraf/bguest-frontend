const videoPreviewReducer = (state = false, action) => {
    switch (action.type) {

        case "VIDEO":
            return action.videoPreviewState;
        default: return state;
    }
};


export default videoPreviewReducer;