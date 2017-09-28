import { combineReducers } from "redux"
import { handleActions } from "redux-actions"

const email = handleActions({}, "")
const id = handleActions({}, null)
const isAuthorized = handleActions({}, false)
const isAuthorizing = handleActions({}, false)

export default combineReducers({ email, id, isAuthorized, isAuthorizing })

export const getId = state => state.auth.id
export const getEmail = state => state.auth.email
export const getIsAuthorized = state => state.auth.isAuthorized
export const getIsAuthorizing = state => state.auth.isAuthorizing
