import profileReducer from "../profile"
import {
    changeEmail,
    changeFirstname,
    changeLastname
} from "actions/profileActions"

describe("Profile reducer", () => {
    test("reducer init value", () => {
        expect(profileReducer(undefined, {})).toEqual({
            email: "",
            firstname: "",
            lastname: ""
        })
    })
    ;[
        ["email", changeEmail],
        ["firstname", changeFirstname],
        ["lastname", changeLastname]
    ].forEach(([name, actionCreator]) => {
        test(`${name}`, () => {
            expect(
                profileReducer(
                    profileReducer(undefined, {}),
                    actionCreator("value")
                )[name]
            ).toEqual("value")
        })
    })
})
