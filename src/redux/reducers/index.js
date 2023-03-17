import { combineReducers } from "redux";
import dateViewReducer from "./dateViewReducer";
import guestDataReducer from "./guestDataReducer";
import menuReducer from "./menuReducer";
import tokenReducer from "./tokenReducer";
import videoPreviewReducer from "./videoPreviewReducer";

const allReducers = combineReducers(
    {
        isMenu: menuReducer,
        isVideo: videoPreviewReducer,
        isToken: tokenReducer,
        isDateView: dateViewReducer,
        isGuestData: guestDataReducer
    }
);

export default allReducers;