import { CHANGE_COLLAPSE } from "actions/siderActions";

export default (state = { collapsed: true }, action) => {
    switch (action.type) {
        case CHANGE_COLLAPSE:
            return {
                ...state,
                collapsed: action.payload
            };
        default:
            return state;
    }
};
