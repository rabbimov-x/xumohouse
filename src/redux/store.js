import { createStore , applyMiddile } from "redux";
import { rootReduser } from "./rootReducer";



export const store = createStore(rootReduser)