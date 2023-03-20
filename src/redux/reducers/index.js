import { combineReducers } from "redux";
import addGuestCSVReducer from "./addGuestCSVReducer";
import addGuestFormReducer from "./addGuestFormReducer";
import currentGuestReducer from "./currentGuestReducer";
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
        isGuestData: guestDataReducer,
        isAddGuestCSV: addGuestCSVReducer,
        isAddGuestForm: addGuestFormReducer,
        isCurrentGuest: currentGuestReducer
    }
);

export default allReducers;