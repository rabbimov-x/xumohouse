import { combineReducers } from "redux";
import { mainReduser } from "./redusers/mainReduser";


export const rootReduser = combineReducers({
    main: mainReduser,
})

