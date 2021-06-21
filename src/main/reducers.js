import { combineReducers } from "redux"
import pendenciaReducer from "../pendencia/pendenciaReducer"

const rootReducer = combineReducers({
    pendencia: pendenciaReducer
})

export default rootReducer
