import profileReducer from "../profile"
import {
	changeEmail,
	changeFirstname,
	changeLastname
} from "actions/profileActions"

describe("Profile reducer", () => {
	test("#changeEmail", () => {
		const initState = profileReducer(undefined, {})

		expect(
			profileReducer(initState, changeEmail("test@test")).email
		).toEqual("test@test")
	})
})
