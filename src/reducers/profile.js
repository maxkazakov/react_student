import {
    CHANGE_EMAIL,
    CHANGE_FIRSTNAME,
    CHANGE_LASTNAME
} from "actions/profileActions"

export default (state = { email: "", firstname: "", lastname: "" }, action) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case CHANGE_FIRSTNAME:
            return {
                ...state,
                firstname: action.payload
            }
        case CHANGE_LASTNAME:
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state
    }
}
