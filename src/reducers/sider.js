import { combineReducers } from "redux"
import { handleActions } from "redux-actions"
import { changeCollapse } from "actions/siderActions"

import {} from "actions/siderActions"

const isCollapsed = handleActions(
    {
        [changeCollapse]: (state, action) => action.payload
    },
    true
)

export default combineReducers({ isCollapsed })
export const getIsCollapsed = state => state.sider.isCollapsed
