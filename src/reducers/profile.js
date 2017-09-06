import {
	changeEmail,
	changeFirstname,
	changeLastname
} from "actions/profileActions"
import { combineReducers } from "redux"
import { handleActions } from "redux-actions"

const email = handleActions(
	{
		[changeEmail]: (state, action) => action.payload
	},
	""
)

const firstname = handleActions(
	{
		[changeFirstname]: (state, action) => action.payload
	},
	""
)

const lastName = handleActions(
	{
		[changeLastname]: (state, action) => action.payload
	},
	""
)

export default combineReducers({ email, firstname, lastName })

export const getEmail = state => state.profile.email
export const getFirstname = state => state.profile.firstname
export const getLastname = state => state.profile.lastName
