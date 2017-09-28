import { select, put, call, takeLatest } from "redux-saga/effects"
import {
	getUserInfoRequest,
	getUserInfoSuccess,
	getUserInfoFailure
} from "actions/authActions"
import { getUserInfo } from "api"

export function* userInfoWatch() {
	yield takeLatest(getUserInfoRequest, function*(action) {
		try {
			const response = yield call(getUserInfo)
			yield put(getUserInfoSuccess(response))
		} catch (e) {
			yield put(getUserInfoFailure(e))
			// console.log(e)
		}
		// yield console.log("getUserInfoRequest saga call")
	})
}
