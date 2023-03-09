import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import tokenReducer from "./tokenReducer";
import videoPreviewReducer from "./videoPreviewReducer";

const allReducers = combineReducers(
    {
        isMenu: menuReducer,
        isVideo: videoPreviewReducer,
        isToken: tokenReducer
    }
);

export default allReducers;