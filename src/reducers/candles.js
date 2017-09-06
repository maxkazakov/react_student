import { combineReducers } from "redux"
import { handleActions } from "redux-actions"
import {
	getCandlesRequest,
	getCandlesSuccess,
	getCandlesFailure
} from "actions/apiActions"

const isLoading = handleActions(
	{
		[getCandlesRequest]: (state, action) => ({
			...state,
			[action.payload]: true
		}),
		[getCandlesSuccess]: (state, action) => ({
			...state,
			[action.meta]: false
		}),
		[getCandlesFailure]: (state, action) => ({
			...state,
			[action.meta]: false
		})
	},
	{ BTCUSD: false, ETHUSD: false }
)

const isLoaded = handleActions(
	{
		[getCandlesRequest]: (state, action) => ({
			...state,
			[action.payload]: false
		}),
		[getCandlesSuccess]: (state, action) => ({
			...state,
			[action.meta]: true
		}),
		[getCandlesFailure]: (state, action) => ({
			...state,
			[action.meta]: true
		})
	},
	{ BTCUSD: false, ETHUSD: false }
)

const error = handleActions(
	{
		[getCandlesFailure]: (state, action) => ({
			pair: action.meta,
			error: action.payload
		})
	},
	{ pair: null, error: "" }
)

const enitites = handleActions(
	{
		[getCandlesSuccess]: (state, action) => {
			return {
				...state,
				[action.meta]: [...state[action.meta], ...action.payload]
			}
		}
	},
	{ BTCUSD: [], ETHUSD: [] }
)

export default combineReducers({
	isLoading,
	isLoaded,
	enitites,
	error
})

export const getCandles = (state, pair) => state.candles.enitites[pair]
export const getIsLoading = (state, pair) => state.candles.isLoading[pair]
export const getIsLoaded = (state, pair) => state.candles.isLoaded[pair]
