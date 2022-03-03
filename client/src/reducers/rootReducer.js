import { combineReducers } from "redux";

import { listsReducer } from "./listsReducer";



export const rootReducer = combineReducers({
    listsReducer,
})

// export default combineReducers({
//     lists: listsReducer,
// })