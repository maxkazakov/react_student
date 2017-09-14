import { combineReducers } from "redux"
import sider from "./sider"
import profile from "./profile"
import candles from "./candles"

export default combineReducers({
    candles,
    sider,
    profile
})
