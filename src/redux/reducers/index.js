import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import videoPreviewReducer from "./videoPreviewReducer";

const allReducers = combineReducers(
    {
        isMenu: menuReducer,
        isVideo: videoPreviewReducer
    }
);

export default allReducers;